import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AssignMedSec } from 'src/app/Models/Clinics Model/AssignMedicalSecretary';
import { OutstandingAppointments } from 'src/app/Models/Medco CMS Model/OutstandingAppointment';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';
import { VenuelocationService } from 'src/app/Services/VenueLocation/venuelocation.service';

@Component({
  selector: 'app-schedual-appointments',
  templateUrl: './schedual-appointments.component.html',
  styleUrls: ['./schedual-appointments.component.css']
})
export class SchedualAppointmentsComponent implements OnInit {

  @ViewChild("templateUpdateStatus") templateUpdateStatus: ElementRef;
  @ViewChild("templateAssignMedSec") templateAssignMedSec: ElementRef;

  scheduledCurrentPage: number = 1;
  modelFilter: any = {
    id: 0,
    expertID: 0,
    instructionID: 0,
    expertClinicSlotPlanID: 0,
    startDate: new Date(),
    endDate: new Date(),
    locationID: 0
  };

  medicalSectreies: Array<Select2OptionData>;
  experts: Array<Select2OptionData>;
  expertLocations: Array<Select2OptionData>;
  instructions: Array<Select2OptionData>;

  filterApptScheduled: any[] = [];
  apptScheduled: any[] = [];

  schedualID: number;
  instructionId: number;
  cinicSlotPlanId: number;

  appointmentUpdateStatusFrom: FormGroup
  updateStatusSubmitted: boolean = false;

  assignMedSecForm: FormGroup;
  assignMedSecFormSubmit: boolean = false;
  assignMedSec: AssignMedSec;

  showAttended = false;

  modalRef: BsModalRef;

  constructor(private instructionService: InstructionService,
    private modalService: BsModalService,
    private medicalSecretaryService: MedicalsecretaryService,
    private fb: FormBuilder,
    private toasterSerivce: ToastrService,
    private expertUserService: ExpertuserService,
    private venuLocationService:VenuelocationService) { }

  ngOnInit() {
    this.getExperts();
    this.getMedicalSectries();
    this.getInstructions();
    this.getAppointments();
  }

  getAppointments() {
    this.instructionService.getAppointmentsScheduled(this.modelFilter).subscribe(response => {
      this.apptScheduled = response.outputObject;
      this.filterApptScheduled = this.apptScheduled;
      this.toasterSerivce.success('Successfully loaded...');
    }, error => {
      console.log(error);
    });
  }

  /* #region  Filter Dropdonws */

  getExperts() {
    this.expertUserService.getExpertProfileInfo("Expert", 0, "", "completedprofile").subscribe(response => {
      this.experts = [];
      let defualtOptiton = {
        id: '0',
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
  changeExpert(event: any) {
    this.modelFilter.expertID = event.value;
    this.getExpertLocations(this.modelFilter.expertID);
  }

  getMedicalSectries() {
    this.medicalSecretaryService.getMedicalSecretaryData(0).subscribe(response => {
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

    }, error => {
      console.log(error);
    });
  }
  changeMedicalSecretary(event: any) {
    this.assignMedSecForm.get('medSecID').setValue(event.value);
  }

  getInstructions() {
    this.instructionService.getInstructionPersonalInfo(0).subscribe(response => {
      this.instructions = [];
      let defualtOptiton = {
        id:'0',
        text: 'Select Option'
      };
      this.instructions.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.firstName+' '+element.lastName
        };
        this.instructions.push(object);
      });
    }, error => {
      console.log(error);
    });
  }
  changeInstruction(event:any) {
    this.modelFilter.instructionID=event.value;
  }

  getExpertLocations(expertID){
    this.venuLocationService.getLocationByExpert(expertID).subscribe(response=>{
      this.expertLocations = [];
      let defualtOptiton = {
        id: '0',
        text: 'Select Option'
      };
      this.expertLocations.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.mapAddress
        };
        this.expertLocations.push(object);
      });
    },error=>{
      console.log(error);
    });
  }
  changeLocation(event:any) {
    this.modelFilter.locationID=event.value;
  }


  /* #endregion */

  createAppointmentStatusForm() {
    this.appointmentUpdateStatusFrom = this.fb.group({
      state: ['', Validators.required],
      rating: [''],
      feedBack: ['']
    });
  }

  createAssignMedSecForm() {
    this.assignMedSecForm = this.fb.group({
      isExpertMedSec: ['', Validators.required],
      medSecID: ['', Validators.required],
      assignDate: ['', Validators.required],
    });
  }

  showUpdateStatusModel(template, schedualID,instructionID,clinicSlotPlanId,date) {
    this.createAppointmentStatusForm();
    this.schedualID = schedualID;
    this.instructionId = instructionID;
    this.cinicSlotPlanId = clinicSlotPlanId;

    let slotDate = new Date(date);
    this.showAttended = slotDate.getDate()<new Date().getDate()?true:false;

    this.modalRef = this.modalService.show(template);
  }

  showAssignMedSecModal() {
    this.createAssignMedSecForm();
    this.modalRef = this.modalService.show(this.templateAssignMedSec);
  }

  updateAppointmentStatus() {
    this.updateStatusSubmitted = true;
    if (this.appointmentUpdateStatusFrom.valid) {
      let model: any = {};
      model = this.appointmentUpdateStatusFrom.value;
      model.schedualID = this.schedualID;
      if (model.state == 'Attended') {
        this.appoinmentAttended(model);
      }
      else {
        this.appointmentDNAorCancel(model);
      }
    }
  }

  countStar(star) {
    this.appointmentUpdateStatusFrom.get('rating').setValue(star);
  }

  appoinmentAttended(model) {
    this.assignMedSecFormSubmit = true;
    model.ExpertClinicSlotPlanID = this.cinicSlotPlanId;
    model.ClientGivenRating = model.rating;
    model.ClientGivenFeedBack = model.feedBack;
    model.UserID = localStorage.getItem('userID');
    this.instructionService.createAppointmentAttended(model).subscribe(response => {
      this.toasterSerivce.success('Appointment attended successfully.');
      this.modalRef.hide();
      this.showAssignMedSecModal();
    }, error => {
      console.log(error);
    }, () => {
      let event: any = {};
      event.value = 0;
      this.getAppointments();
    });
  }

  appointmentDNAorCancel(model) {
    this.instructionService.updateClinicState(model.schedualID, model.state).subscribe(response => {
      this.toasterSerivce.success('Status has been updated.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      let event: any = {};
      event.value = 0;
      this.getAppointments();
    });
  }

  assignMedicalSecretary() {
    this.assignMedSecFormSubmit = true;
    if (this.assignMedSecForm.valid) {
      this.assignMedSec = Object.assign({}, this.assignMedSecForm.value);
      this.assignMedSec.medSecID = this.assignMedSec.medSecID ? +this.assignMedSec.medSecID : 0;
      this.assignMedSec.expertClinicSlotPlanID = this.schedualID;
      this.assignMedSec.instructionID = this.instructionId;
      this.assignMedSec.userTypeID = 0;
      this.assignMedSec.createdBy = 0;
      this.assignMedSec.userID = +localStorage.getItem('userID');
      this.instructionService.createInstAssignMedSec(this.assignMedSec).subscribe(responce => {
        this.toasterSerivce.success("Medical secretary assigned successfully.");
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.ngOnInit();
      });
    }
  }
}
