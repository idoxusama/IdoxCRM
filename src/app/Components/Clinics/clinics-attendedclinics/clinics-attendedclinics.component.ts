import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AssignMedSec } from 'src/app/Models/Clinics Model/AssignMedicalSecretary';
import { AttendedClinics } from 'src/app/Models/Clinics Model/AttendedClinics';
import { TodayClinicService } from 'src/app/Services/Clinics Services/today-clinic.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';

@Component({
  selector: 'app-clinics-attendedclinics',
  templateUrl: './clinics-attendedclinics.component.html',
  styleUrls: ['./clinics-attendedclinics.component.css']
})
export class ClinicsAttendedclinicsComponent implements OnInit {
  currentPage:number=1;
  attendedClinics: AttendedClinics[] = [];
  filterAttendedClinics:AttendedClinics[]=[];
  modalRef:BsModalRef;

  slotId:number;
  instructionId:number;

  medicalSectreies:Array<Select2OptionData>;
  assignMedSec:AssignMedSec;

  assignMedSecForm:FormGroup;
  assignMedSecFormSubmit:boolean=false;

  constructor(private instructionService: InstructionService,
    private medicalSecretaryService:MedicalsecretaryService,
    private modalService:BsModalService,
    private fb:FormBuilder,
    private toasterSerivce:ToastrService) { }

  ngOnInit() {
    this.getAppointmentAttended();
    this.getMedicalSectries();
  }

  getAppointmentAttended() {
    this.instructionService.getAppointmentAttended(0, 0).subscribe(response => {
      this.attendedClinics = response.outputObject;
      this.filterAttendedClinics = this.attendedClinics;
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
  
  getAttendedClinics(value){
    debugger
    this.filterAttendedClinics = value!=""? 
    this.attendedClinics.filter(e=>e.instructionCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || 
    e.expert.toLocaleLowerCase().includes(value.toLocaleLowerCase())):this.attendedClinics
  }

  counter(i: number) {
    return new Array(i);
  }

  createAssignMedSecForm(){
    this.assignMedSecForm = this.fb.group({
      isExpertMedSec:['',Validators.required],
      medSecID:['',Validators.required],
      assignDate:['',Validators.required],
    });
  }

  openAssignMedSecModal(template,slotId,instructionID){
    this.slotId =slotId;
    this.instructionId = instructionID;
    this.createAssignMedSecForm();
    this.modalRef = this.modalService.show(template);
  }

  changeMedicalSecretary(event: any){
    this.assignMedSecForm.get('medSecID').setValue(event.value);
  }

  submitAssignMedSec(){
    this.assignMedSecFormSubmit=true;
    if(this.assignMedSecForm.valid){
      this.assignMedSec = Object.assign({},this.assignMedSecForm.value);
      this.assignMedSec.medSecID = this.assignMedSec.medSecID?+this.assignMedSec.medSecID:0;
      this.assignMedSec.expertClinicSlotPlanID=this.slotId;
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
}
