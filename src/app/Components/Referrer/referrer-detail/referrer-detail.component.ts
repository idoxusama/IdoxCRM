import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'console';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ExpertType } from 'src/app/Models/Medical Performa/MedicalPerformaQuestionsForClient';
import { BankDetail, BankDetailList } from 'src/app/Models/Referrer/bank-detail';
import { Documents } from 'src/app/Models/Referrer/documents';
import { Referrer } from 'src/app/Models/Referrer/referrer';
import { ReferrerTypes } from 'src/app/Models/Settings Model/referrerTypes';
import { ReferrerService } from 'src/app/Services/Referrer/referrer.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';

@Component({
  selector: 'app-referrer-detail',
  templateUrl: './referrer-detail.component.html',
  styleUrls: ['./referrer-detail.component.scss']
})
export class ReferrerDetailComponent implements OnInit {
  referrerID:number;
  referrerPersonalInfo: Referrer;
  referrrerBankDetails:BankDetailList[]=[];
  referrerDocuments:Documents[]=[];

  expertTypes:ExpertType[]=[];
  referrerTypes:ReferrerTypes[]=[];

  referrerForm:FormGroup;
  referrerFormSubmit:boolean=false;

  referrerBankDetailForm:FormGroup;
  referrerBankDetailSubmit:boolean=false;

  referrerDocsForm:FormGroup;
  referrerDocsFormSubmit:boolean=false;
  filesToUpload=[];

  modalRef:BsModalRef;
  constructor(
    private referrerService: ReferrerService, 
    private settingService:SettingsService,
    private route:ActivatedRoute,
    private modalService:BsModalService,
    private fb:FormBuilder, 
    private toasterServce:ToastrService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.referrerID= +params.get('id');
    });

    if(this.referrerID){
      this.getReferrerPersonalInfo();
      this.getReferrerBankDetails();
      this.getReferrerDocuments();
    }

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

  getReferrerPersonalInfo(){
    this.referrerService.getReferrerPersonalInfo(this.referrerID).subscribe(response=>{
      this.referrerPersonalInfo= response.outputObject?response.outputObject.pop():null;
    },error=>{
      console.log(error);
    });
  }

  editReferrerPersonalInfo(template){
    this.getExpertTypes();
    this.getReferrerTypes();

    let data= this.referrerPersonalInfo;

    this.referrerForm= this.fb.group({
      id:[data.id?data.id:''],
      description:[data.description?data.description:'',Validators.required],
      addressLine1:[data.addressLine1?data.addressLine1:'',Validators.required],
      addressLine2:[data.addressLine2?data.addressLine2:''],
      referrerCode:[data.addressLine2?data.addressLine2:''],
      country:[data.country?data.country:'',Validators.required],
      town:[data.town?data.town:'',Validators.required],
      postCode:[data.postCode?data.postCode:'',Validators.required],
      phoneNo:[data.phoneNo?data.phoneNo:'',Validators.required],
      alternatePhoneNo:[data.alternatePhoneNo?data.alternatePhoneNo:'',Validators.required],
      faxNo:[data.faxNo?data.faxNo:'',Validators.required],
      email:[data.email?data.email:'',[Validators.required,Validators.email]],
      rptDueDays:[data.rptDueDays?data.rptDueDays:'',Validators.required],
      enableSMS:[data.enableSMS?data.enableSMS:false],
      enableEmail:[data.enableEmail?data.enableEmail:false],
      enableQuickInstruction:[data.enableQuickInstruction?data.enableQuickInstruction:false],
      logoPath:[data.logoPath?data.logoPath:''],
      companyNo:[data.companyNo?data.companyNo:'',Validators.required],
      referrerType:[data.referrerType?data.referrerType:''],
      expertType:[data.expertType?data.expertType:''],
      sessionDueDays:[data.sessionDueDays?data.sessionDueDays:'',Validators.required],
      sessionOutOfDueDays:[data.sessionOutOfDueDays?data.sessionOutOfDueDays:'',Validators.required],
      approxDueDaysDischarge:[data.approxDueDaysDischarge?data.approxDueDaysDischarge:''],
    },{validators:this.sessionDueDaysValidator});

    this.modalRef = this.modalService.show(template,{class:'modal-lg'});
  }

  sessionDueDaysValidator(group:FormGroup){
    let sessionDueDays= group.get('sessionDueDays').value;
    let sessionOutOfDueDays = group.get('sessionOutOfDueDays').value;

    return sessionOutOfDueDays>sessionDueDays?null:{greater:true}; 
  }

  saveReferrerForm(){
    debugger
    this.referrerFormSubmit=true;
    if(this.referrerForm.valid){
      this.referrerPersonalInfo= Object.assign({},this.referrerForm.value);
      this.referrerPersonalInfo.userID= +localStorage.getItem('userID');

      this.referrerService.updateReferrerPersonalInfo(this.referrerPersonalInfo).subscribe(response=>{
        this.toasterServce.success('Referrer Personal info has been updated.');
        this.modalRef.hide();
      },error=>{
        console.log(error);
      },()=>{
        this.getReferrerPersonalInfo();
      });
    }
  }

  getReferrerBankDetails(){
    this.referrerService.getReferrerBankDetail(0,this.referrerID).subscribe(response=>{
      this.referrrerBankDetails = response.outputObject?response.outputObject:null;
    },error=>{
      console.log(error);
    });
  }

  createReferrerBankDetail(template){
    this.referrerBankDetailForm=this.fb.group({
      bankName:['',Validators.required],
      accountTitle:['',Validators.required],
      accountNo:['',Validators.required],
      sortCode:['',Validators.required],
      iban:['',Validators.required]
    });
    
    this.modalRef = this.modalService.show(template);
  }

  editReferrerBankDetail(id,template){
    let data = this.referrrerBankDetails.find(e=>e.id==id);

    this.referrerBankDetailForm=this.fb.group({
      id:[data.id?data.id:''],
      bankName:[data.bankName?data.bankName:'',Validators.required],
      accountTitle:[data.accountTitle?data.accountTitle:'',Validators.required],
      accountNo:[data.accountNo?data.accountNo:'',Validators.required],
      sortCode:[data.sortCode?data.sortCode:'',Validators.required],
      iban:[data.iban?data.iban:'',Validators.required]
    });
    
    this.modalRef= this.modalService.show(template);
  }

  saveReferrerBankDetail(){
    debugger
    this.referrerBankDetailSubmit=true;
    if(this.referrerBankDetailForm.valid){

      let referrerBankDetail= new BankDetail();
      referrerBankDetail.referrerBankDetailList.push(this.referrerBankDetailForm.value);

      referrerBankDetail.referrerBankDetailList.forEach(x=>{
        x.userID=+localStorage.getItem('userID');
        x.referrerID= this.referrerID;
      });

      if(this.referrerBankDetailForm.get('id')){
        this.updateBankDetail(referrerBankDetail)
      }
      else{
        this.submitBankDetail(referrerBankDetail);
      }
    }
  }

  updateBankDetail(bankDetail){
    this.referrerService.updateReferrerBankDetail(bankDetail).subscribe(response=>{
      this.toasterServce.success('Bank Detail has been updated.');
      this.modalRef.hide();
    },error=>{
      console.log(error);
    },()=>{
      this.getReferrerBankDetails();
    });
  }
  
  submitBankDetail(bankDetail){
    this.referrerService.createReferrerBankDetail(bankDetail).subscribe(response=>{
      this.toasterServce.success('Bank Detail has been added.');
      this.modalRef.hide();
    },error=>{
      console.log(error);
    },()=>{
      this.getReferrerBankDetails();
    });
  }
  
    deleteReferrerBankDetail(id){
      let model:any={};
      model.id=id;
      model.event="IsDeleted";
      model.value=1;
      model.functionName="ReferrerBankDetail";
      model.userID=+localStorage.getItem('userID'); 
      this.referrerService.updateReferrerStatus(model).subscribe(response=>{
        this.toasterServce.success('Bank detail has been deleted.');
      },error=>{
        console.log(error);
      },()=>{
        this.getReferrerBankDetails();
      });
    }

  getReferrerDocuments(){
    this.referrerService.getReferrerDocuments(0,this.referrerID).subscribe(response=>{
      this.referrerDocuments= response.outputObject?response.outputObject:null;
    },error=>{
      console.log(error);
    });
  }

  createReferrerDocuments(template){
    this.referrerDocsForm= this.fb.group({
      documentName:['',Validators.required],
      files:[null,Validators.required]
    });

    this.modalRef = this.modalService.show(template);
  }
  onSelectFiles(files){
    if(files.length===0){
      return;
    }
    else{
      for (let index = 0; index < files.length; index++) {
        this.filesToUpload.push(files[index]);
      }
    }
  }

  saveReferrerDocuments(){
    this.referrerDocsFormSubmit=true;
    if(this.referrerDocsForm.valid){

      let formData = new FormData();
      formData.append("referrerID",''+this.referrerID);
      formData.append("userID",localStorage.getItem('userID'));
      formData.append("documentName",this.referrerDocsForm.get('documentName').value);
      this.filesToUpload.forEach((x)=>formData.append("files",x));

      this.referrerService.createReferrerDocuments(formData).subscribe(response=>{
        this.toasterServce.success('Documents has been added.');
        this.modalRef.hide();
      },error=>{
        console.log(error);
      },()=>{
        this.getReferrerDocuments();
      });
    }
  }

  deleteReferrerDoc(id){
    let model:any={};
    model.id=id;
    model.event="IsDeleted";
    model.value=1;
    model.functionName="ReferrerDocument";
    model.userID=+localStorage.getItem('userID'); 
    this.referrerService.updateReferrerStatus(model).subscribe(response=>{
      this.toasterServce.success('Document has been deleted.');
    },error=>{
      console.log(error);
    },()=>{
      this.getReferrerDocuments();
    });
  }
}
