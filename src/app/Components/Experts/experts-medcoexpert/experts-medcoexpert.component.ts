import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedcoExperts,QualificationData,FurtherSpecialityData } from 'src/app/Models/Experts Model/Medco Experts';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-experts-medcoexpert',
  templateUrl: './experts-medcoexpert.component.html',
  styleUrls: ['./experts-medcoexpert.component.css']
})
export class ExpertsMedcoexpertComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  MedcoExpertData: Array<MedcoExperts>= new Array();
  ReportSpecialitiesData : any;
  ExpertFurtherSpecialitiesData : any;
  ExpertQualificationsSpecialitiesData : any;
  ExpertsTypeList : any;
  CreateMedcoExpert: MedcoExperts = new MedcoExperts();
  SelectedMedcoExpert: MedcoExperts = new MedcoExperts();
  formData = new FormData();
  Qualification = new Array;
  FurtherSpecialites = new Array;
  QualificationDescription: string;
  FurtherSpeciality: string;
  QualifictionsData: QualificationData = new QualificationData();
  FurtherSpecialityData: FurtherSpecialityData = new FurtherSpecialityData();
  ShowMedcoExpertForm : boolean = false;
  ShowPsychologistExpertForm : boolean = false;
  ShowOrthopaedicExpertForm : boolean = false;
  ShowRehabExpertForm : boolean = false;
  ShowENTExpertForm : boolean = false;
  ShowCBTExpertForm : boolean = false;
  ShowHealthExpertForm : boolean = false;

  constructor(private MedcoexpertService: MedcoexpertService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.CreateMedcoExpert.Status = 'A';
    this.Qualification = [];
    this.FurtherSpecialites = [];
    this.headerTitle.emit("Medco Experts");
    this.MedcoexpertService.getAllExpertsData().subscribe(data=>{
      if(data.outputObject !== null)
      {
        this.MedcoExpertData = data.outputObject;
      }
      else {
        this.MedcoExpertData = [];
      }
      
      },
      error=>{ 
        console.log(error);
      });
  
      this.MedcoexpertService.getReportSpecialitiesData().subscribe(data=>{
        this.ReportSpecialitiesData = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });

        this.MedcoexpertService.getExpertTypesList().subscribe(data=>{
          this.ExpertsTypeList = data.outputObject;
          },
          error=>{ 
            console.log(error);
          });
  
  }

  GetSelectedExpertsData(data){
    this.MedcoexpertService.getSelectedExpertsData(data).subscribe(data=>{
      if(data.outputObject !== null)
      {
        this.MedcoExpertData = data.outputObject;
      }
      else {
        this.MedcoExpertData = [];
      }
      },
      error=>{ 
        console.log(error);
      });
  }

  SelectedExpertType(event:any){
    this.CreateMedcoExpert.ExpertTypeID = event;
   if(event == 1)
    {
      this.ShowMedcoExpertForm = true;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
   else if(event == 2)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = true;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
   else if(event == 3)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = true;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 5)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = true;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 6)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = true;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 7)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = true;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 8)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = true;
    }
  }
  selectedTitle(event){this.CreateMedcoExpert.NamePrefix = event;}
  selectedReportSpecialities(event){this.CreateMedcoExpert.SpecialityID = event;}
  selectedContract(event){this.CreateMedcoExpert.ExpertContractType = event;}
  selectedClassifications(event){this.CreateMedcoExpert.ExpertSpecialityID = event;}
  selectedOnPanel(event){this.CreateMedcoExpert.OnPanel = event;}
  selectedStatus(event){this.CreateMedcoExpert.Status = event;}
  
  Signature (myFiles: any) {this.formData.append("Signaturefile",myFiles[0]);}
  UploadCV (myFiles: any) {this.formData.append("CVfile",myFiles[0]);}
  AccCertificate (myFiles: any) {this.formData.append("AccCertificatefile",myFiles[0]);}
  Contract (myFiles: any) {this.formData.append("Contractfile",myFiles[0]);}
  MedcoCertificate (myFiles: any) {this.formData.append("MedcoCertificatefile",myFiles[0]);}
  ICO (myFiles: any) {this.formData.append("ICOfile",myFiles[0]);}
  Insurance (myFiles: any) {this.formData.append("Insurancefile",myFiles[0]);}
  
  AddQualifcations(){
    this.Qualification.push({'Qualifications': this.CreateMedcoExpert.QualificationDescription});
    this.QualifictionsData.QualificationDescription = this.Qualification;
    this.QualificationDescription = JSON.stringify(this.QualifictionsData);
  
  }
  RemoveQualification(index){
    this.Qualification.splice(index,1);
    this.QualifictionsData.QualificationDescription = this.Qualification;
    this.QualificationDescription = JSON.stringify(this.QualifictionsData);
  };
  AddFurtherSpecialites(){
    this.FurtherSpecialites.push({'Specialities':this.CreateMedcoExpert.FurtherSpeciality});
    this.FurtherSpecialityData.FurtherSpeciality = this.FurtherSpecialites;
    this.FurtherSpeciality = JSON.stringify(this.FurtherSpecialityData);
  }
  RemoveFurtherSpecialites(index){
    this.FurtherSpecialites.splice(index,1);
    this.FurtherSpecialityData.FurtherSpeciality = this.FurtherSpecialites;
    this.FurtherSpeciality = JSON.stringify(this.FurtherSpecialityData);
  };


  Create(){
    this.formData.append("NamePrefix",this.CreateMedcoExpert.NamePrefix);
    this.formData.append("Gender",this.CreateMedcoExpert.Gender);
    this.formData.append("FirstName",this.CreateMedcoExpert.FirstName);
    this.formData.append("LastName",this.CreateMedcoExpert.LastName);
    this.formData.append("FullName",this.CreateMedcoExpert.NamePrefix + ' ' + this.CreateMedcoExpert.FirstName + ' ' + this.CreateMedcoExpert.LastName);
    this.formData.append("AddressLine1",this.CreateMedcoExpert.AddressLine1);
    this.formData.append("County",this.CreateMedcoExpert.County);
    this.formData.append("Town",this.CreateMedcoExpert.Town);
    this.formData.append("PostCode",this.CreateMedcoExpert.PostCode);
    this.formData.append("Qualificationjson",JSON.stringify(this.QualificationDescription));
    this.formData.append("SpecilityJson",JSON.stringify(this.FurtherSpeciality));
    this.formData.append("SpecialityID",this.CreateMedcoExpert.SpecialityID);
    this.formData.append("MobileNumber",this.CreateMedcoExpert.MobileNumber);
    this.formData.append("Email",this.CreateMedcoExpert.Email);
    this.formData.append("BankName",this.CreateMedcoExpert.BankName);
    this.formData.append("AccountTitle",this.CreateMedcoExpert.AccountTitle);
    this.formData.append("AccountNo",this.CreateMedcoExpert.AccountNo);
    this.formData.append("SortCode",this.CreateMedcoExpert.SortCode);
    this.formData.append("GmcHcpc",this.CreateMedcoExpert.GmcHcpc);
    this.formData.append("Indeminity",this.CreateMedcoExpert.Indeminity);
    this.formData.append("Ico",this.CreateMedcoExpert.Ico);
    this.formData.append("MedcoNo",this.CreateMedcoExpert.MedcoNo);
    this.formData.append("AccreditationNo",this.CreateMedcoExpert.AccreditationNo);
    this.formData.append("PINCode",this.CreateMedcoExpert.PINCode);
    this.formData.append("ExpertContractType",this.CreateMedcoExpert.ExpertContractType);
    this.formData.append("AmountRate",this.CreateMedcoExpert.AmountRate);
    this.formData.append("IACharges",this.CreateMedcoExpert.IACharges);
    this.formData.append("DCCharges",this.CreateMedcoExpert.DCCharges);
    this.formData.append("PerSessionCharges",this.CreateMedcoExpert.PerSessionCharges);
    this.formData.append("DNACharges",this.CreateMedcoExpert.DNACharges);
    this.formData.append("DueDays",this.CreateMedcoExpert.DueDays);
    this.formData.append("IsAvailableForReferrer",this.CreateMedcoExpert.IsAvailableForReferrer);
    this.formData.append("IsVATRegistered",this.CreateMedcoExpert.IsVATRegistered);
    this.formData.append("IsLocumAgencyExpert",this.CreateMedcoExpert.IsLocumAgencyExpert);
    this.formData.append("IsAvailableForGoPrivate",this.CreateMedcoExpert.IsAvailableForGoPrivate);
    this.formData.append("IsAvailableForIdox",this.CreateMedcoExpert.IsAvailableForIdox);
    this.formData.append("Status",this.CreateMedcoExpert.Status);
    this.formData.append("CreatedBy",localStorage.getItem('userName'));


    this.MedcoexpertService.CreateMedcoExpert(this.formData).subscribe(data=>{
      $("#EditMedcoExpertModal").modal("hide");
      this.ngOnInit();
      },
      error=>{ 
        console.log(error);
      });
  }


selectedUserDetail(SelectedMedcoExpertDetails)
{
  this.SelectedMedcoExpert = SelectedMedcoExpertDetails;

  this.MedcoexpertService.getExpertsFurtherSpecialitiesData(this.SelectedMedcoExpert.ID).subscribe(data=>{
    this.FurtherSpecialites = data.outputObject;
    },
    error=>{ 
      console.log(error);
    });

    this.MedcoexpertService.getExpertsQualitiesData(this.SelectedMedcoExpert.ID).subscribe(data=>{
      this.Qualification = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });

    if(this.SelectedMedcoExpert.IsAvailableForReferrer == "True") { this.SelectedMedcoExpert.IsAvailableForReferrer = true;}
    else if(this.SelectedMedcoExpert.IsAvailableForReferrer == "False") { this.SelectedMedcoExpert.IsAvailableForReferrer == false;}
    if(this.SelectedMedcoExpert.IsVATRegistered == "True") { this.SelectedMedcoExpert.IsVATRegistered = true;}
    else if(this.SelectedMedcoExpert.IsVATRegistered == "False") { this.SelectedMedcoExpert.IsVATRegistered = false;}
    if(this.SelectedMedcoExpert.IsLocumAgencyExpert == "True") { this.SelectedMedcoExpert.IsLocumAgencyExpert = true;}
    else if(this.SelectedMedcoExpert.IsLocumAgencyExpert == "False") { this.SelectedMedcoExpert.IsLocumAgencyExpert = false;}
    if(this.SelectedMedcoExpert.IsAvailableForGoPrivate == "True") { this.SelectedMedcoExpert.IsAvailableForGoPrivate = true;}
    else if(this.SelectedMedcoExpert.IsAvailableForGoPrivate == "False") { this.SelectedMedcoExpert.IsAvailableForGoPrivate = false;}
    if(this.SelectedMedcoExpert.IsAvailableForIdox == "True") { this.SelectedMedcoExpert.IsAvailableForIdox = true;}
    else if(this.SelectedMedcoExpert.IsAvailableForIdox == "False") { this.SelectedMedcoExpert.IsAvailableForIdox = false;}
   
   

    if(this.SelectedMedcoExpert.ExpertTypeID == '1')
    {
      this.ShowMedcoExpertForm = true;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
   else if(this.SelectedMedcoExpert.ExpertTypeID == '2')
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = true;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
   else if(this.SelectedMedcoExpert.ExpertTypeID == '3')
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = true;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(this.SelectedMedcoExpert.ExpertTypeID == '5')
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = true;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(this.SelectedMedcoExpert.ExpertTypeID == '6')
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = true;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(this.SelectedMedcoExpert.ExpertTypeID == '7')
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = true;
      this.ShowHealthExpertForm = false;
    }
    else if(this.SelectedMedcoExpert.ExpertTypeID == '8')
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = true;
    }

}


EditselectedTitle(event){this.SelectedMedcoExpert.NamePrefix = event;}
EditselectedReportSpecialities(event){this.SelectedMedcoExpert.SpecialityID = event;}
EditselectedContract(event){this.SelectedMedcoExpert.ExpertContractType = event;}
EditselectedClassifications(event){this.SelectedMedcoExpert.ExpertSpecialityID = event;}
EditselectedOnPanel(event){this.SelectedMedcoExpert.OnPanel = event;}
EditselectedStatus(event){this.SelectedMedcoExpert.Status = event;}

EditSignature (myFiles: any) {this.formData.append("Signaturefile",myFiles[0]);}
EditUploadCV (myFiles: any) {this.formData.append("CVfile",myFiles[0]);}
EditAccCertificate (myFiles: any) {this.formData.append("AccCertificatefile",myFiles[0]);}
EditContract (myFiles: any) {this.formData.append("Contractfile",myFiles[0]);}
EditMedcoCertificate (myFiles: any) {this.formData.append("MedcoCertificatefile",myFiles[0]);}
EditICO (myFiles: any) {this.formData.append("ICOfile",myFiles[0]);}
EditInsurance (myFiles: any) {this.formData.append("Insurancefile",myFiles[0]);}

EditAddQualifcations(){
  this.Qualification.push({'Qualifications': this.SelectedMedcoExpert.QualificationDescription});
  this.QualifictionsData.QualificationDescription = this.Qualification;
  this.QualificationDescription = JSON.stringify(this.QualifictionsData);

}
EditRemoveQualification(index){
  this.Qualification.splice(index,1);
  this.QualifictionsData.QualificationDescription = this.Qualification;
  this.QualificationDescription = JSON.stringify(this.QualifictionsData);
};
EditAddFurtherSpecialites(){
  this.FurtherSpecialites.push({'Specialities':this.SelectedMedcoExpert.FurtherSpeciality});
  this.FurtherSpecialityData.FurtherSpeciality = this.FurtherSpecialites;
  this.FurtherSpeciality = JSON.stringify(this.FurtherSpecialityData);
}
EditRemoveFurtherSpecialites(index){
  this.FurtherSpecialites.splice(index,1);
  this.FurtherSpecialityData.FurtherSpeciality = this.FurtherSpecialites;
  this.FurtherSpeciality = JSON.stringify(this.FurtherSpecialityData);
};


Update(){
  this.formData.append("ID",this.SelectedMedcoExpert.ID);
  this.formData.append("NamePrefix",this.SelectedMedcoExpert.NamePrefix);
  this.formData.append("Gender",this.SelectedMedcoExpert.Gender);
  this.formData.append("FirstName",this.SelectedMedcoExpert.FirstName);
  this.formData.append("LastName",this.SelectedMedcoExpert.LastName);
  this.formData.append("FullName",this.SelectedMedcoExpert.NamePrefix + ' ' + this.SelectedMedcoExpert.FirstName + ' ' + this.SelectedMedcoExpert.LastName);
  this.formData.append("AddressLine1",this.SelectedMedcoExpert.AddressLine1);
  this.formData.append("County",this.SelectedMedcoExpert.County);
  this.formData.append("Town",this.SelectedMedcoExpert.Town);
  this.formData.append("PostCode",this.SelectedMedcoExpert.PostCode);
  this.formData.append("Qualificationjson",JSON.stringify(this.QualificationDescription));
  this.formData.append("SpecilityJson",JSON.stringify(this.FurtherSpeciality));
  this.formData.append("SpecialityID",this.SelectedMedcoExpert.SpecialityID);
  this.formData.append("MobileNumber",this.SelectedMedcoExpert.MobileNumber);
  this.formData.append("Email",this.SelectedMedcoExpert.Email);
  this.formData.append("BankName",this.SelectedMedcoExpert.BankName);
  this.formData.append("AccountTitle",this.SelectedMedcoExpert.AccountTitle);
  this.formData.append("AccountNo",this.SelectedMedcoExpert.AccountNo);
  this.formData.append("SortCode",this.SelectedMedcoExpert.SortCode);
  this.formData.append("GmcHcpc",this.SelectedMedcoExpert.GmcHcpc);
  this.formData.append("Indeminity",this.SelectedMedcoExpert.Indeminity);
  this.formData.append("Ico",this.SelectedMedcoExpert.Ico);
  this.formData.append("MedcoNo",this.SelectedMedcoExpert.MedcoNo);
  this.formData.append("AccreditationNo",this.SelectedMedcoExpert.AccreditationNo);
  this.formData.append("PINCode",this.SelectedMedcoExpert.PINCode);
  this.formData.append("ExpertContractType",this.SelectedMedcoExpert.ExpertContractType);
  this.formData.append("AmountRate",this.SelectedMedcoExpert.AmountRate);
  this.formData.append("IACharges",this.SelectedMedcoExpert.IACharges);
  this.formData.append("DCCharges",this.SelectedMedcoExpert.DCCharges);
  this.formData.append("PerSessionCharges",this.SelectedMedcoExpert.PerSessionCharges);
  this.formData.append("DNACharges",this.SelectedMedcoExpert.DNACharges);
  this.formData.append("DueDays",this.SelectedMedcoExpert.DueDays);
  this.formData.append("IsAvailableForReferrer",this.SelectedMedcoExpert.IsAvailableForReferrer);
  this.formData.append("IsVATRegistered",this.SelectedMedcoExpert.IsVATRegistered);
  this.formData.append("IsLocumAgencyExpert",this.SelectedMedcoExpert.IsLocumAgencyExpert);
  this.formData.append("IsAvailableForGoPrivate",this.SelectedMedcoExpert.IsAvailableForGoPrivate);
  this.formData.append("IsAvailableForIdox",this.SelectedMedcoExpert.IsAvailableForIdox);
  this.formData.append("Status",this.SelectedMedcoExpert.Status);
  this.formData.append("LastModifiedBy",localStorage.getItem('userName'));


  this.MedcoexpertService.UpdateMedcoExpert(this.formData).subscribe(data=>{
    $("#CreateUserModal").modal("hide");
    this.ngOnInit();
    },
    error=>{ 
      console.log(error);
    });
}


Delete(Id){
  this.MedcoexpertService.DeleteMedcoExpert(Id).subscribe(data=>{
    $("#DeleteUserModal").modal("hide");
    this.ngOnInit();
    },
    error=>{ 
      console.log(error);
    });
}

}
