import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DiagnosticProvider } from 'src/app/Models/Experts Model/Diagnostic Provider';
import { DiagnosticExpertClinic } from 'src/app/Models/Experts Model/Diagnostic Expert Clinics';
import { DiagnosticexpertclinicsService } from 'src/app/Services/Experts Services/diagnosticexpertclinics.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-experts-diagnosticexpertclinics',
  templateUrl: './experts-diagnosticexpertclinics.component.html',
  styleUrls: ['./experts-diagnosticexpertclinics.component.css']
})
export class ExpertsDiagnosticexpertclinicsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  DiagnosticProviderData: Array<DiagnosticProvider>= new Array();
  DiagnosticExpertClinicData: Array<DiagnosticExpertClinic>= new Array();
  CreateDiagnosticExpertClinic: DiagnosticExpertClinic = new DiagnosticExpertClinic();
  SelectedDiagnosticExpertClinic: DiagnosticExpertClinic = new DiagnosticExpertClinic();
 
   constructor(private diagnosticexpertclinicsService: DiagnosticexpertclinicsService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }
 
   ngOnInit() {
     this.headerTitle.emit("Diagnostic Expert Clinic");
     this.diagnosticexpertclinicsService.getDiagnosticExpertClinicData().subscribe(data=>{
       this.DiagnosticExpertClinicData = data.outputObject;
       },
       error=>{ 
         console.log(error);
       });
       this.diagnosticexpertclinicsService.getDiagnosticProviderData().subscribe(data=>{
        this.DiagnosticProviderData = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
     
   }
 
 selectedStatus(event){this.CreateDiagnosticExpertClinic.Status = event;}
 selectedDiagnostic(event){this.CreateDiagnosticExpertClinic.ExpertID = event;}

 EditselectedDiagnostic(event){this.CreateDiagnosticExpertClinic.ExpertID = event;}
 EditselectedStatus(event){this.SelectedDiagnosticExpertClinic.Status = event;}
 
 Create(){
     this.diagnosticexpertclinicsService.CreateDiagnosticExpertClinic(this.CreateDiagnosticExpertClinic).subscribe((resp)=>{
 
       this.Toastr.success('Diagnostic Expert Clinics Created Successfully ');
       $("#CreateDiagnosticExpertClinicModal").modal("hide");
       this.ngOnInit();
       },
       (err)=>{
         console.log(err);
       });
 }
 
 selectedDetails(Data:any){
 this.SelectedDiagnosticExpertClinic = Data;
 }
 
 
 Update(){
   this.diagnosticexpertclinicsService.UpdateDiagnosticExpertClinics(this.SelectedDiagnosticExpertClinic).subscribe((resp)=>{
 
     this.Toastr.success('Diagnostic Expert Clinics Updated Successfully ');
     $("#EditDiagnosticExpertClinicModal").modal("hide");
     this.ngOnInit();
     },
     (err)=>{
       console.log(err);
     });
 }
 
 Delete(ID){
   this.diagnosticexpertclinicsService.DeleteDiagnosticExpertClinics(ID).subscribe((resp)=>{
     this.Toastr.success('Diagnostic Expert Clinics Deleted Successfully ');
     this.ngOnInit();
     },
     (err)=>{
       console.log(err);
     });
 }
}
