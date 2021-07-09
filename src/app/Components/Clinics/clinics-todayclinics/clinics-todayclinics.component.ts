import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AssignMedSec } from 'src/app/Models/Clinics Model/AssignMedicalSecretary';
import { TodayClinics } from 'src/app/Models/Clinics Model/TodayClinics';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';

@Component({
  selector: 'app-clinics-todayclinics',
  templateUrl: './clinics-todayclinics.component.html',
  styleUrls: ['./clinics-todayclinics.component.css']
})
export class ClinicsTodayclinicsComponent implements OnInit {
  /* #region  Fields */

  @ViewChild("templateUpdateStatus") templateUpdateStatus:ElementRef;
  @ViewChild("templateAssignMedSec") templateAssignMedSec:ElementRef;

  liveCurrentPage: number = 1;
  upComingCurrentPage: number = 1;
  previousCurrentPage: number = 1;

  schedualID: number;
  instructionId:number;
  cinicSlotPlanId:number;

  todayClinics: TodayClinics[] = [];

  liveClinics: TodayClinics[] = [];
  filterLClinics: TodayClinics[] = [];

  previousClinics: TodayClinics[] = [];
  filterPClinics: TodayClinics[] = [];

  upComingClinics: TodayClinics[] = [];
  filterUCClinics: TodayClinics[] = [];

  experts: Array<Select2OptionData>;

  expertID: number;

  modalRef: BsModalRef;

  appointmentUpdateStatusFrom: FormGroup
  updateStatusSubmitted: boolean = false;

  assignMedSecForm:FormGroup;
  assignMedSecFormSubmit:boolean=false;

  medicalSectreies:Array<Select2OptionData>;

  assignMedSec:AssignMedSec;

  /* #endregion */
  
  constructor(
    private medicalSecretaryService: MedicalsecretaryService,
    private instructionService:InstructionService,
    private expertUserService: ExpertuserService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toasterSerivce: ToastrService) { }


  ngOnInit() {
    this.getExperts();
    this.getMedicalSectries();
  }

  /* #region  Methods */
  getExperts() {
    this.expertUserService.getExpertProfileInfo("Expert", 0, "", "completedprofile").subscribe(response => {
      this.experts = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.experts.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.firstName
        };
        this.experts.push(object);
      });
    }, error => {
      console.log(error);
    });
  }
  getMedicalSectries(){
    this.medicalSecretaryService.getMedicalSecretaryData(0).subscribe(response=>{
      this.medicalSectreies = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.medicalSectreies.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.fullName
        };
        this.medicalSectreies.push(object);
      });

    },error=>{
      console.log(error);
    });
  }
  changeMedicalSecretary(event:any){
    this.assignMedSecForm.get('medSecID').setValue(event.value);
  }

  getAllTodayAppoinments(event: any) {
    this.expertID = event.value == "" ? 0 : event.value;
    this.instructionService.getAllTodayAppointments(this.expertID).subscribe(response => {
      if (response.outputObject) {
        this.todayClinics = response.outputObject;
        this.mapTimeSlot();
      }
      else {
        this.liveClinics.length = 0;
        this.upComingClinics.length = 0;
        this.previousClinics.length = 0;
      }
    }, error => {
      console.log(error);
    });
  }

  mapTimeSlot() {
    this.todayClinics.map(x => {
      let slotDate = moment(new Date(x.slotDate)).format('yyyy-MM-DD');
      let splitTimeSlot = x.timeSlot.split('-'); // split time slot by - to get two times

      x.startTime = new Date(slotDate + ' ' + splitTimeSlot[0]);
      x.endTime = new Date(slotDate + ' ' + splitTimeSlot[1]);
    });
    let currentTime = new Date().getTime();

    //get live clinics
    this.liveClinics = this.todayClinics.filter(e => currentTime >= e.startTime.getTime() && currentTime <= e.endTime.getTime());
    this.filterLClinics = this.liveClinics;

    //get up coming clinics
    this.upComingClinics = this.todayClinics.filter(e => e.startTime.getTime() > currentTime && e.endTime.getTime() > currentTime);
    this.filterUCClinics = this.upComingClinics;

    //get previous clinics
    this.previousClinics = this.todayClinics.filter(e => e.startTime.getTime() < currentTime && e.endTime.getTime() < currentTime);
    this.filterPClinics = this.previousClinics;
  }

  filterLiveClinics(value: string) {
    this.filterLClinics = value != "" ? this.liveClinics.filter(e => e.expert.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.clientRefNo.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.instructionCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.referrerCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.client.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : this.liveClinics;
  }

  filterUpComingClinics(value: string) {
    this.filterUCClinics = value != "" ? this.upComingClinics.filter(e => e.expert.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.clientRefNo.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.instructionCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.referrerCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.client.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : this.upComingClinics;
  }

  filterPreviousClinics(value: string) {
    this.filterPClinics = value != "" ? this.previousClinics.filter(e => e.expert.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.clientRefNo.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.instructionCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.referrerCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.client.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    ) : this.previousClinics;
  }

  createAppointmentStatusForm() {
    this.appointmentUpdateStatusFrom = this.fb.group({
      state: ['', Validators.required],
      rating: [''],
      feedBack:['']
    });
  }

  showUpdateStatusModel(template, schedualID,instructionId,cinicSlotPlanId) {
    this.createAppointmentStatusForm();
    this.schedualID = schedualID;
    this.instructionId= instructionId;
    this.cinicSlotPlanId = cinicSlotPlanId;
    this.modalRef = this.modalService.show(template);
  }

  showAssignMedSecModal() {
    this.createAssignMedSecForm();
    this.modalRef = this.modalService.show(this.templateAssignMedSec);
  }
  createAssignMedSecForm(){
    this.assignMedSecForm = this.fb.group({
      isExpertMedSec:['',Validators.required],
      medSecID:['',Validators.required],
      assignDate:['',Validators.required],
    });
  }
  countStar(star) {
    this.appointmentUpdateStatusFrom.get('rating').setValue(star);
  }

  assignMedicalSecretary(){
    debugger
    this.assignMedSecFormSubmit=true;
    
    if(this.assignMedSecForm.valid){
      this.assignMedSec = Object.assign({},this.assignMedSecForm.value);
      this.assignMedSec.medSecID = this.assignMedSec.medSecID?+this.assignMedSec.medSecID:0;
      this.assignMedSec.expertClinicSlotPlanID=this.schedualID;
      this.assignMedSec.instructionID = this.instructionId;
      this.assignMedSec.userTypeID =0;
      this.assignMedSec.createdBy=0;
      this.assignMedSec.userID= +localStorage.getItem('userID');

      this.instructionService.createInstAssignMedSec(this.assignMedSec).subscribe(responce=>{
        this.toasterSerivce.success("Medical secretary assigned successfully.");
        this.modalRef.hide();
      },error=>{
        console.log(error);
      },()=>{
        this.ngOnInit();
      });
    }
  }

  updateAppointmentStatus() {
    this.updateStatusSubmitted = true;
    if (this.appointmentUpdateStatusFrom.valid) {
      debugger
      let model :any={};
      model = this.appointmentUpdateStatusFrom.value;
      model.schedualID = this.schedualID;
      if(model.state=='Attended'){
        this.appoinmentAttended(model);
      }
      else{
        this.appointmentDNAorCancel(model);
      }
    }
  }

  appoinmentAttended(model){
    this.assignMedSecFormSubmit= true;
    model.ExpertClinicSlotPlanID = this.cinicSlotPlanId;
    model.ClientGivenRating=model.rating;
    model.ClientGivenFeedBack= model.feedBack;
    model.UserID= localStorage.getItem('userID');
    this.instructionService.createAppointmentAttended(model).subscribe(response=>{
      this.toasterSerivce.success('Appointment attended successfully.');
      this.modalRef.hide();
      this.showAssignMedSecModal();
    },error=>{
      console.log(error);
    },()=>{
      let event: any = {};
      event.value = 0;
      this.getAllTodayAppoinments(event);
    });
  }
  appointmentDNAorCancel(model){
    this.instructionService.updateClinicState(model.schedualID,model.state).subscribe(response => {
      this.toasterSerivce.success('Status has been updated.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      let event: any = {};
      event.value = 0;
      this.getAllTodayAppoinments(event);
    });
  }
  /* #endregion */
}
