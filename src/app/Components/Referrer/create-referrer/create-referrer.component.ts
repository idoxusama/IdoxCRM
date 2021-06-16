import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExpertType } from 'src/app/Models/Medical Performa/MedicalPerformaQuestionsForClient';
import { BankDetail } from 'src/app/Models/Referrer/bank-detail';
import { Referrer } from 'src/app/Models/Referrer/referrer';
import { ReferrerTypes } from 'src/app/Models/Settings Model/referrerTypes';
import { ReferrerService } from 'src/app/Services/Referrer/referrer.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';

@Component({
  selector: 'app-create-referrer',
  templateUrl: './create-referrer.component.html',
  styleUrls: ['./create-referrer.component.scss']
})
export class CreateReferrerComponent implements OnInit {
  referrerID:number;

  referrerForm:FormGroup;
  referrerFormSubmit:boolean=false;

  createReferrer:Referrer=new Referrer();
  referrerBankDetails:BankDetail=new BankDetail();

  expertTypes:ExpertType[]=[];
  referrerTypes:ReferrerTypes[]=[];

  filesToUpload=[];

  
  constructor(
    private referrerService:ReferrerService,
    private fb:FormBuilder,
    private toasterService:ToastrService,
    private settingService:SettingsService
    ) { }

  ngOnInit() {
    this.createReferrerPersonalInfo();
    this.getExpertTypes();
    this.getReferrerTypes();
  }

  getExpertTypes(){
    this.settingService.getAllExpertType(0).subscribe(response=>{
      this.expertTypes= response.outputObject;
    },error=>{
      console.log(error);
    });
  }
  getReferrerTypes(){
    this.settingService.getReferrerTypes(0).subscribe(response=>{
      this.referrerTypes= response.outputObject;
    },error=>{
      console.log(error);
    });
  }
  createReferrerPersonalInfo(){
    this.referrerForm= this.fb.group({
      description:['',Validators.required],
      addressLine1:['',Validators.required],
      addressLine2:[''],
      referrerCode:[''],
      country:['',Validators.required],
      town:['',Validators.required],
      postCode:['',Validators.required],
      phoneNo:['',Validators.required],
      alternatePhoneNo:['',Validators.required],
      faxNo:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      rptDueDays:['',Validators.required],
      enableSMS:[false],
      enableEmail:[false],
      enableQuickInstruction:[false],
      logoPath:[''],
      companyNo:['',Validators.required],
      referrerType:[''],
      expertType:[''],
      sessionDueDays:['',Validators.required],
      sessionOutOfDueDays:['',Validators.required],
      approxDueDaysDischarge:[''],
      bankDetailFormArray:this.fb.array([]),
      referrerDocumentFormArray:this.fb.array([])
    },{validators:this.sessionDueDaysValidator});
  }

  sessionDueDaysValidator(group:FormGroup){
    debugger
    let sessionDueDays= group.get('sessionDueDays').value;
    let sessionOutOfDueDays = group.get('sessionOutOfDueDays').value;

    return sessionOutOfDueDays>sessionDueDays?null:{greater:true}; 
  }

  get bankDetailFormArray(){
    return this.referrerForm.get('bankDetailFormArray') as FormArray;
  }

  addBankDetailFormGroup(){
    this.bankDetailFormArray.push(this.createBankDetailFormGroup());
  }

  createBankDetailFormGroup(){
    return this.fb.group({
      bankName:['',Validators.required],
      accountTitle:['',Validators.required],
      accountNo:['',Validators.required],
      sortCode:['',Validators.required],
      iban:['',Validators.required]
    });
  }

  removeBankDetailControl(index){
    this.bankDetailFormArray.removeAt(index);
  }


  get referrerDocumentFormArray(){
    return this.referrerForm.get('referrerDocumentFormArray') as FormArray;
  }

  addReferrerDocument(){
    this.referrerDocumentFormArray.push(this.createReferereDocument());
  }

  createReferereDocument(){
    return this.fb.group({
      documentName:['',Validators.required],
      files:[null,Validators.required]
    });
  }

  onSelectFiles(files){
    if(files.length===0){
      return;
    }
    else{
      let bankDetail=new BankDetail();
      for (let index = 0; index < files.length; index++) {
        this.filesToUpload.push(files[index]);
      }
    }
  }
  removeReferrerDocumentControl(index){
    this.referrerDocumentFormArray.removeAt(index);
  }

  async saveReferrerForm(){
    this.referrerFormSubmit=true;
    if(this.referrerForm.valid){
      this.createReferrer = Object.assign({},this.referrerForm.value);
      
      try{
        this.createReferrer.userID=+localStorage.getItem('userID');
        let referrerResponse = await this.referrerService.createReferrerPersonalInfo(this.createReferrer).toPromise();
        this.referrerID = referrerResponse.outputObject?referrerResponse.outputObject.pop().id:null;
        debugger
        if(this.referrerDocumentFormArray.controls.length>0){

          this.referrerDocumentFormArray.controls.forEach(async e=>{
  
            let formData = new FormData();
            formData.append("referrerID",''+this.referrerID);
            formData.append("userID",localStorage.getItem('userID'));
            formData.append("documentName",e.get('documentName').value);
            this.filesToUpload.forEach((x)=>formData.append("files",x));
    
            await this.referrerService.createReferrerDocuments(formData).toPromise();
  
          });
        }

        if(this.bankDetailFormArray.controls.length>0){

          this.referrerBankDetails.referrerBankDetailList = this.referrerForm.get('bankDetailFormArray').value;
          this.referrerBankDetails.referrerBankDetailList.forEach(x=>{
            x.referrerID= this.referrerID;
            x.userID= +localStorage.getItem('userID');
          });
          await this.referrerService.createReferrerBankDetail(this.referrerBankDetails).toPromise();
          
        }

        this.toasterService.success('Referrer Creation Successfully.');
        this.ngOnInit();
  
      }
      catch(error){
        console.log(error);
      }

    }
  }
}
