import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertMedicalRequiredRecord, MedicalRequiredRecordList } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-required-medical-record',
  templateUrl: './required-medical-record.component.html',
  styleUrls: ['./required-medical-record.component.css']
})
export class RequiredMedicalRecordComponent implements OnInit {
  @Input() step: StepModel;

  medicalRecordRequiredForm:FormGroup;
  medicalRecordRequiredFormSubmit:boolean=false;

  expertMedicalRequiredRecord:ExpertMedicalRequiredRecord=new ExpertMedicalRequiredRecord();
  medicalRequiredRecordList:MedicalRequiredRecordList[]=[];

  expertID:string;

  constructor(private fb:FormBuilder,
    private toasterService:ToastrService,
    private expertUserService:ExpertuserService,
    private route:ActivatedRoute,
    private stepsService:StepsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.expertID=params.get('id');
    });

    if(localStorage.getItem('expertID')){
      this.getRequiredMedicalRecord(0,localStorage.getItem('expertID'))
    }
    else{
      this.getRequiredMedicalRecord(0,this.expertID);
    }

    this.createMedicalRecordRequiredForm();
  }

  createMedicalRecordRequiredForm(){
    this.medicalRecordRequiredForm = this.fb.group({
      requiredRecordFormArray:this.fb.array([])  
    });
  }

  get requiredRecordFormArray(){
    return this.medicalRecordRequiredForm.get('requiredRecordFormArray') as FormArray;
  }

  addRequiredMedicalRecord(data?:any){
    if(data){
      this.requiredRecordFormArray.push(this.addFormGroup(data));
    }
    else{
      this.requiredRecordFormArray.push(this.addFormGroup());
    }
  }
  
  addFormGroup(data?:any){
    if(data){
      return this.fb.group({
        id:[data.id?data.id:''],
        medicalRecordType:[data.medicalRecordType?data.medicalRecordType:'',Validators.required],
        medicalRecordName:[data.medicalRecordName?data.medicalRecordName:'',Validators.required],
        isRequired:[true],
        isEditable:[false],
      });
    }else{
      return this.fb.group({
        medicalRecordType:['',Validators.required],
        medicalRecordName:['',Validators.required],
        isRequired:[true],
        isEditable:[true],
      });
    }
    
  }

  deleteCurrentRow(index){
    this.requiredRecordFormArray.removeAt(index);
  }

  getRequiredMedicalRecord(id,expertID){
    this.expertUserService.getExpertMedicalRequiredRecord(id,expertID).subscribe(response=>{
      this.medicalRequiredRecordList=response.outputObject;
      this.medicalRequiredRecordList.forEach(x=>{
        this.addRequiredMedicalRecord(x);
      })
      this.toasterService.success('Record loaded successfully.');
    },error=>{
      console.log(error);
    });
  }

  saveRequiredMedicalRecord(group:FormGroup){
    debugger
    this.medicalRecordRequiredFormSubmit = true;
    if (group.valid) {
      if (group.get('id')) {
        this.update(group);
      }
      else {
        this.submit(group);
      }
      group.get('isEditable').setValue(false);
    }
    else{ 
      group.get('isEditable').setValue(true);
    }
  }

  submit(group:FormGroup){
    this.expertMedicalRequiredRecord.medicalRequiredRecordList.push(group.value);
    this.expertMedicalRequiredRecord.medicalRequiredRecordList.forEach(x=>{
      x.userID= +localStorage.getItem('userID');
      x.expertID=this.expertID?+this.expertID:+localStorage.getItem('userID');
      x.isRequired=true;
      x.expertTypeID=0;
    });

    this.expertUserService.createExpertMedicalRequiredRecord(this.expertMedicalRequiredRecord).subscribe(response=>{
      this.toasterService.success('Record successfully added.');
    },error=>{
      console.log(error);
    });
  }

  editMedicalRecord(group:FormGroup){
    group.get('isEditable').setValue(true);
  }

  update(group:FormGroup){
    
    this.expertMedicalRequiredRecord.medicalRequiredRecordList.push(group.value);
    this.expertMedicalRequiredRecord.medicalRequiredRecordList.forEach(x=>{
      x.userID= +localStorage.getItem('userID');
      x.expertID=this.expertID?+this.expertID:+localStorage.getItem('userID');
      x.isRequired=true;
      x.expertTypeID=0;
    });

    this.expertUserService.updateExpertMedicalRequiredRecord(this.expertMedicalRequiredRecord).subscribe(response=>{
      this.toasterService.success('Record successfully updated.');
    },error=>{
      console.log(error);
    });
  }


  onNextStep() {
    this.step.isComplete = true;
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }
}