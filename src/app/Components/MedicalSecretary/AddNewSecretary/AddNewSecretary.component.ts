import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModelSecretary } from 'src/app/Models/Experts Model/MedicalSecretary';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ThemeService } from 'ng2-charts';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';
declare var $: any;

@Component({
  selector: 'app-AddNewSecretary',
  templateUrl: './AddNewSecretary.component.html',
  styleUrls: ['./AddNewSecretary.component.css']
})
export class AddNewSecretaryComponent implements OnInit {

  @Output() headerTitle = new EventEmitter<string>();
  MedicalSecretaryData: Array<ModelSecretary>= new Array();
  CreateMedicalSecretary: ModelSecretary = new ModelSecretary();
  SelectedMedicalSecretary: ModelSecretary = new ModelSecretary();
  IsInhouse:boolean=false;
   constructor(private medicalsecretaryService: MedicalsecretaryService,private MedcoexpertService: MedcoexpertService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }
 
   ngOnInit() {
     this.headerTitle.emit("Add New Medical Secretary");
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

  if(this.CreateMedicalSecretary.medicalSecretaryTypeID==1){
    this.CreateMedicalSecretary.companyAddress='0';
    this.CreateMedicalSecretary.companyName='0';
    this.CreateMedicalSecretary.companyPhoneNumber='0';
    this.CreateMedicalSecretary.email='0';
  }

  if(this.CreateMedicalSecretary.isHourlyOrPerReportFee=="1")
  {
    this.CreateMedicalSecretary.isHourlyFee=true;
  }
  else if(this.CreateMedicalSecretary.isHourlyOrPerReportFee=="2"){
    this.CreateMedicalSecretary.isPerRptFee=true;
  }
     this.medicalsecretaryService.CreateMedicalSecretary(this.CreateMedicalSecretary).subscribe((resp)=>{
       this.Toastr.success('Medical Secretary Created Successfully ');
       this.ngOnInit();
       },
       (err)=>{
         console.log(err);
       }, () =>{
         this.router.navigate(['/MedicalSecretary/List']);
       });
 }
}
