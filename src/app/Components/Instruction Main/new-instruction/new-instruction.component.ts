import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpertBasicInfo, MedicalRequiredRecordList } from 'src/app/Models/Experts Model/User';
import { CaseHandler } from 'src/app/Models/Instruction Main/CaseHandler';
import { MedcoRecord } from 'src/app/Models/Instruction Main/MedcoRecord';
import { NewInstruction } from 'src/app/Models/Instruction Main/NewInstruction';
import { Tranlator } from 'src/app/Models/Instruction Main/Translator';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';

@Component({
  selector: 'app-new-instruction',
  templateUrl: './new-instruction.component.html',
  styleUrls: ['./new-instruction.component.scss']
})
export class NewInstructionComponent implements OnInit {
  instructionForm:FormGroup;
  instructionFromSubmit:boolean=false;

  experts:ExpertBasicInfo[]=[];
  specialities:any[]=[];
  medicalRequiredRecordList:MedicalRequiredRecordList[]=[];

  newInstruction:NewInstruction=new NewInstruction();
  caseHandler:CaseHandler= new CaseHandler();
  medicoRecord:MedcoRecord= new MedcoRecord();
  translator:Tranlator= new Tranlator();
  
  constructor(private expertUserService: ExpertuserService,private fb:FormBuilder) { }

  ngOnInit() {
    this.createInstructionForm();
    this.getExperts();
    this.getSpecialities();
  }

  createInstructionForm(){
    this.instructionForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      middleName:[''],
      gender:['',Validators.required],
      dob:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobileNumber:['',Validators.required],
      county:['',Validators.required],
      town:['',Validators.required],
      postCode:['',Validators.required],
      cO:[''],
      addressLine1:['',Validators.required],
      addressLine2:[''],
      occupancyTypeID:['',Validators.required],
      occupationID:['',Validators.required],
      clientRefNo:['',Validators.required],
      medicoRefNo:['',Validators.required],
      expertID:['',Validators.required],
      referrerID:['',Validators.required],
      specialityID:['',Validators.required],
      incidentTypeID:['',Validators.required],
      specialNote:[''],
      isSpecialRestrictionNeed:[false],
      specialRestrictionNeed:['',Validators.required],
      caseHandlerName:['',[Validators.required,Validators.email]],
      caseHandlerEmail:['',Validators.required],
      caseHandlerPhone:['',Validators.required],
      caseHandlerFax:[''],
      translatorLanguages:[''],
      translatorName:[''],
      translatorEmail:[''],
      translatorPhone:[''],
      translatorCO:[''],
      recordName:[''],
      recordPath:[''],
      isReceived:[false],
      isRequiredByExpert:[false],
      accidentCircumstances:['',Validators.required],
      assignmentDate:['',Validators.required],
      priority:['',Validators.required],
      startTime:[''],
      instructionType:['',Validators.required],
      appointmentDate:['',Validators.required],
      clinicType:['',Validators.required],
      iIsInitialAssessment:[false],
      noOfSessions:['',Validators.required],
      isCourtCase:[false],
      courtDate:['',Validators.required],
      isTranslatorRequired:[false],
      instructionDeadLineDate:[''],
      requiredMedicalRecordFormArray:this.fb.array([])
    });
  }

  getExperts(){
    this.expertUserService.getExpertProfileInfo(0,"","completedprofile").subscribe(response=>{
      this.experts = response.outputObject;
    },error=>{
      console.log(error);
    });
  }
  getSpecialities(){
    this.expertUserService.specialities().subscribe((response) => {
      this.specialities = response.outputObject;
    }, error => {
      console.log(error);
    })
  }

  getRequiredMedicalRecord(id){
    this.expertUserService.getExpertMedicalRequiredRecord(0,id).subscribe(response=>{
      this.medicalRequiredRecordList= response.outputObject?response.outputObject:null;
      if(this.medicalRequiredRecordList){
        this.medicalRequiredRecordList.forEach(e=>{
          this.addRequiredMedicalReqcord(e);
        });
      }
      else{
        this.requiredMedicalRecordFormArray.controls.length=0;
      }
    },error=>{
      console.log(error);
    });
  }
  
  get requiredMedicalRecordFormArray(){
    return this.instructionForm.get('requiredMedicalRecordFormArray') as FormArray;
  }

  addRequiredMedicalReqcord(data?:any){
    this.requiredMedicalRecordFormArray.push(this.addRequiredMedicalFormGroup(data))
  }

  addRequiredMedicalFormGroup(data?:any){
    if(data){
      return this.fb.group({
        medicalRecordName:[data.medicalRecordName?data.medicalRecordName:''],
        requiredMedicalRecord:[null,Validators.required]
      });
    } 
  }

  saveInstructionForm(){
    this.instructionFromSubmit=true;
    if(this.instructionForm.valid){
      this.newInstruction = Object.assign({},this.instructionForm.value);
    }
  }
}
