import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DiagnosticProvider } from 'src/app/Models/Experts Model/Diagnostic Provider';
import { DiagnosticproviderService } from 'src/app/Services/Experts Services/diagnosticprovider.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;


@Component({
  selector: 'app-experts-diagnosticprovider',
  templateUrl: './experts-diagnosticprovider.component.html',
  styleUrls: ['./experts-diagnosticprovider.component.css']
})
export class ExpertsDiagnosticproviderComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  DiagnosticProviderData: Array<DiagnosticProvider>= new Array();
 CreateDiagnosticProvider: DiagnosticProvider = new DiagnosticProvider();
 SelectedDiagnosticProvider: DiagnosticProvider = new DiagnosticProvider();
 
   constructor(private diagnosticproviderService: DiagnosticproviderService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }
 
   ngOnInit() {
     this.headerTitle.emit("Diagnostic Provider");
     this.diagnosticproviderService.getDiagnosticProviderData().subscribe(data=>{
       this.DiagnosticProviderData = data.outputObject;
       },
       error=>{ 
         console.log(error);
       });
     
   }
 
 selectedStatus(event){this.CreateDiagnosticProvider.Status = event;}
 EditselectedStatus(event){this.SelectedDiagnosticProvider.Status = event;}
 
 Create(){
     this.diagnosticproviderService.CreateDiagnosticProvider(this.CreateDiagnosticProvider).subscribe((resp)=>{
 
       this.Toastr.success('Diagnostic Provider Created Successfully ');
       $("#CreateDiagnosticProviderModal").modal("hide");
       this.ngOnInit();
       },
       (err)=>{
         console.log(err);
       });
 }
 
 selectedDetails(Data:any){
 this.SelectedDiagnosticProvider = Data;
 }
 
 
 Update(){
   this.diagnosticproviderService.UpdateDiagnosticProvider(this.SelectedDiagnosticProvider).subscribe((resp)=>{
 
     this.Toastr.success('Diagnostic Provider Updated Successfully ');
     $("#EditDiagnosticProviderModal").modal("hide");
     this.ngOnInit();
     },
     (err)=>{
       console.log(err);
     });
 }
 
 Delete(ID){
   this.diagnosticproviderService.DeleteDiagnosticProvider(ID).subscribe((resp)=>{
     this.Toastr.success('Diagnostic Provider Deleted Successfully ');
     this.ngOnInit();
     },
     (err)=>{
       console.log(err);
     });
 }
 

}
