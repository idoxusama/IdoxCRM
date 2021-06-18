import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExpertBasicInfo, MedicalRequiredRecordList } from 'src/app/Models/Experts Model/User';
import { CaseHandler } from 'src/app/Models/Instruction Main/CaseHandler';
import { CaseInfo } from 'src/app/Models/Instruction Main/CaseInfo';
import { MedcoRecord } from 'src/app/Models/Instruction Main/MedcoRecord';
import { NewInstruction } from 'src/app/Models/Instruction Main/NewInstruction';
import {IntructionSpecial } from 'src/app/Models/Instruction Main/Special';
import { Tranlator } from 'src/app/Models/Instruction Main/Translator';
import { ExpertType } from 'src/app/Models/Medical Performa/MedicalPerformaQuestionsForClient';
import { Referrer } from 'src/app/Models/Referrer/referrer';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { ReferrerService } from 'src/app/Services/Referrer/referrer.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';

@Component({
  selector: 'app-new-instruction',
  templateUrl: './new-instruction.component.html',
  styleUrls: ['./new-instruction.component.scss']
})
export class NewInstructionComponent implements OnInit {
  instructionID:number;
  instructionForm:FormGroup;
  instructionFromSubmit:boolean=false;

  experts:ExpertBasicInfo[]=[];
  specialities:any[]=[];
  medicalRequiredRecordList:MedicalRequiredRecordList[]=[];
  referrers:Referrer[]=[];
  occupancyTypes:any[]=[];
  occupations:any[]=[];
  incidentTypes:any[]=[];
  expertTypes:ExpertType[]=[];

  newInstruction:NewInstruction=new NewInstruction();
  instructionSpecial:IntructionSpecial= new IntructionSpecial();
  caseHandler:CaseHandler= new CaseHandler();
  medicoRecord:MedcoRecord= new MedcoRecord();
  translator:Tranlator= new Tranlator();
  caseInfo:CaseInfo = new CaseInfo();

  otherMedicalRecordUploadFiles=[];
  
  constructor(private expertUserService: ExpertuserService,
    private fb:FormBuilder,
    private instructionService: InstructionService,
    private referrerService:ReferrerService,
    private settingService:SettingsService,
    private toasterService:ToastrService) { }

  ngOnInit() {
    this.createInstructionForm();
    this.getExperts();
    this.getSpecialities();
    this.getReferrers();
    this.getIncidentTypes();
    this.getOccupancyTypes();
    this.getOccupations();
    this.getExpertTypes();
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
      caseHandlerName:['',Validators.required],
      caseHandlerEmail:['',[Validators.required,Validators.email]],
      caseHandlerPhone:['',Validators.required],
      caseHandlerFax:[''],
      translatorLanguages:[''],
      translatorName:[''],
      translatorEmail:['',Validators.email],
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
      isInitialAssessment:[false],
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
  getReferrers(){
    this.referrerService.getReferrerPersonalInfo(0).subscribe(response=>{
      this.referrers= response.outputObject;
    },error=>{
      console.log(error);
    });
  }
  getOccupancyTypes(){
    this.settingService.getMultiDiamensionalStuffValues("Occupancy","OccupancyType").subscribe(response=>{
      this.occupancyTypes = response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  getOccupations(){
    this.settingService.getMultiDiamensionalStuffValues("Occupation","OccupationType").subscribe(response=>{
      this.occupations=response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  getIncidentTypes(){
    this.settingService.getMultiDiamensionalStuffValues("Incident","IncidentType").subscribe(response=>{
      this.incidentTypes= response.outputObject;
    },error=>{
      console.log(error);
    });
  }
  getExpertTypes(){
    this.settingService.getAllExpertType(0).subscribe(response=>{
      this.expertTypes= response.outputObject;
    },error=>{
      console.log(error);
    });
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

  onSelectFile(files,requiredRecordName){
    if(files.length==0){
      return;
    }
    else{

    }
  }

  onSelectOtherMedicalRecord(files){
    if(files.length==0){
      return;
    }
    else{
      for (let i = 0; i < files.length; i++) {
        this.otherMedicalRecordUploadFiles.push(files[i]);
      }
    }

  }

  async saveInstructionForm(){
    debugger
    this.instructionFromSubmit=true;
    if(this.instructionForm.valid){

      this.newInstruction = Object.assign({},this.instructionForm.value);
      this.newInstruction.userID= +localStorage.getItem('userID');
      try{

        let instructionPersonalInfoResponse = await this.instructionService.createInstructionPersonalInfo(this.newInstruction).toPromise();
        if(instructionPersonalInfoResponse.outputObject){
          debugger
          this.instructionID = instructionPersonalInfoResponse.outputObject.pop().id;

          //create instruction special
          this.instructionSpecial = Object.assign({},this.instructionForm.value);
          this.instructionSpecial.userID= +localStorage.getItem('userID');
          this.instructionSpecial.instructionID = this.instructionID;
          await this.instructionService.createInstructionSpecial(this.instructionSpecial).toPromise();

          //create case hanlder
          this.caseHandler = Object.assign({},this.instructionForm.value);
          this.caseHandler.instructionID= this.instructionID;
          this.caseHandler.userID= +localStorage.getItem('userID'); 
          await this.instructionService.createInstructionCaseHandler(this.caseHandler).toPromise();
          debugger
          //create translator if have
          this.translator = Object.assign({},this.instructionForm.value);
          if(this.translator){
            this.translator.userID= +localStorage.getItem('userID');
            this.translator.instructionID= this.instructionID;     
            await this.instructionService.createInstructionTranslator(this.translator).toPromise();
          }
          debugger

          //create medico record if have
          this.medicoRecord = Object.assign({},this.instructionForm.value);
          if(this.medicoRecord.recordName){
            let formData = new FormData();
            formData.append("RecordName",this.medicoRecord.recordName);
            formData.append("InstructionID",''+this.instructionID);
            formData.append("IsReceived",''+this.medicoRecord.isReceived);
            formData.append("IsRequiredByExpert",''+this.medicoRecord.isRequiredByExpert);
            formData.append("UserID",''+localStorage.getItem('userID'));
            this.otherMedicalRecordUploadFiles.forEach((f)=>{formData.append("files",f)});
            await this.instructionService.createInstructionMedicalRecord(formData).toPromise();
          }
          debugger
          //create case info
          this.caseInfo = Object.assign({},this.instructionForm.value);
          this.caseInfo.userID= +localStorage.getItem('userID');
          this.caseInfo.instructionID= this.instructionID;     
          await this.instructionService.createInstructionCaseInfo(this.caseInfo).toPromise();
          debugger
          this.toasterService.success('Instruction created successfully.');
          this.ngOnInit();
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }
}
