import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModelSecretary } from 'src/app/Models/Experts Model/MedicalSecretary';
import { MedicalsecretaryService } from 'src/app/Services/Experts Services/medicalsecretary.service';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ThemeService } from 'ng2-charts';
declare var $: any;

@Component({
  selector: 'app-experts-medicalsecretary',
  templateUrl: './experts-medicalsecretary.component.html',
  styleUrls: ['./experts-medicalsecretary.component.css']
})
export class ExpertsMedicalsecretaryComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  MedicalSecretaryData: Array<ModelSecretary>= new Array();
  CreateMedicalSecretary: ModelSecretary = new ModelSecretary();
  SelectedMedicalSecretary: ModelSecretary = new ModelSecretary();
  IsInhouse:boolean=false;
   constructor(private medicalsecretaryService: MedicalsecretaryService,private MedcoexpertService: MedcoexpertService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }
 
   ngOnInit() {
     this.headerTitle.emit("Medical Secretary");
     this.IsInhouse=false;
     this.medicalsecretaryService.getMedicalSecretaryData().subscribe(data=>{
       this.MedicalSecretaryData = data.outputObject;
       },
       error=>{ 
         console.log(error);
       });
     
   }
 
 selectedTitle(event){this.CreateMedicalSecretary.namePrefix = event;}
 selectedContract(event){this.CreateMedicalSecretary.medicalSecretaryContractType = event;}
 selectedStatus(event){this.CreateMedicalSecretary.status = event;}
 selectedMedicalSecretary(event){
   this.CreateMedicalSecretary.medicalSecretaryTypeID=event;
  this.IsInhouse=event==1?true:false;
  }


 Create(){
   debugger
  this.CreateMedicalSecretary.postCode='';
  this.CreateMedicalSecretary.phoneNo='';
  this.CreateMedicalSecretary.medicalSecretaryContractType='';
  this.CreateMedicalSecretary.lastModifiedBy=0;
  this.CreateMedicalSecretary.reportWritingCount=0;
  this.CreateMedicalSecretary.additionalEmailJson='';
  this.CreateMedicalSecretary.isDirectMedSecretary=true;
  this.CreateMedicalSecretary.isLinkMedSec=true;
  this.CreateMedicalSecretary.fees='';
  
  if(this.CreateMedicalSecretary.medicalSecretaryTypeID==1){
    this.CreateMedicalSecretary.companyAddress='0';
    this.CreateMedicalSecretary.companyName='0';
    this.CreateMedicalSecretary.companyPhoneNumber='0';
  }
     this.medicalsecretaryService.CreateMedicalSecretary(this.CreateMedicalSecretary).subscribe((resp)=>{
       this.Toastr.success('Medical Secretary Created Successfully ');
       $("#CreateMedicalSecretaryModal").modal("hide");
       this.ngOnInit();
       },
       (err)=>{
         console.log(err);
       });
 }
 
 
 
 selectedDetails(Data:any){
 this.SelectedMedicalSecretary = Data;
 }
 

 EditselectedTitle(event){this.SelectedMedicalSecretary.namePrefix = event;}
 EditselectedContract(event){this.SelectedMedicalSecretary.medicalSecretaryContractType = event;}
 EditselectedStatus(event){this.SelectedMedicalSecretary.status = event;}
 
 Update(){
   this.medicalsecretaryService.UpdateMedicalSecretary(this.SelectedMedicalSecretary).subscribe((resp)=>{
 
     this.Toastr.success('Medical Secretary Updated Successfully ');
     $("#EditMedicalSecretaryModal").modal("hide");
     this.ngOnInit();
     },
     (err)=>{
       console.log(err);
     });
 }
 
 Delete(ID){
   this.medicalsecretaryService.DeleteMedicalSecretary(ID).subscribe((resp)=>{
     this.Toastr.success('Medical Secretary Deleted Successfully ');
     this.ngOnInit();
     },
     (err)=>{
       console.log(err);
     });
 }
}
