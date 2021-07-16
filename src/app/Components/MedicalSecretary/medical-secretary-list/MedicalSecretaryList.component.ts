import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModelSecretary, UpdateMedicalSecretaryStatus } from 'src/app/Models/Experts Model/MedicalSecretary';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ThemeService } from 'ng2-charts';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';
declare var $: any;


@Component({
  selector: 'app-MedicalSecretaryList',
  templateUrl: './MedicalSecretaryList.component.html',
  styleUrls: ['./MedicalSecretaryList.component.css']
})
export class MedicalSecretaryListComponent implements OnInit {

  
  @Output() headerTitle = new EventEmitter<string>();
  MedicalSecretaryData: Array<ModelSecretary>= new Array();
  CreateMedicalSecretary: ModelSecretary = new ModelSecretary();
  SelectedMedicalSecretary: ModelSecretary = new ModelSecretary();
  UpdateMedicalSecretaryStatus: UpdateMedicalSecretaryStatus = new UpdateMedicalSecretaryStatus();
  IsInhouse:boolean=false;
   constructor(private medicalsecretaryService: MedicalsecretaryService,private MedcoexpertService: MedcoexpertService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }
 

  ngOnInit() {
    this.headerTitle.emit("Add New Medical Secretary");
    this.IsInhouse=false;
    this.medicalsecretaryService.getMedicalSecretaryData(0).subscribe(data=>{
      this.MedicalSecretaryData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
    
  }
  selectedDetails(Data:any){
    this.SelectedMedicalSecretary = Data;
  }

  Delete(ID){
    debugger
    this.medicalsecretaryService.getMedicalSecretaryData(ID).subscribe(data=>{
      debugger
      this.SelectedMedicalSecretary = data.outputObject[0];
      this.UpdateMedicalSecretaryStatus.Event =this.SelectedMedicalSecretary.status;
      this.UpdateMedicalSecretaryStatus.id = this.SelectedMedicalSecretary.id;
      this.UpdateMedicalSecretaryStatus.modifiedBy = + localStorage.getItem("userID");
      this.medicalsecretaryService.DeleteMedicalSecretary(this.UpdateMedicalSecretaryStatus).subscribe((resp)=>{
        this.Toastr.success('Medical Secretary Deleted Successfully ');
        this.ngOnInit();
        },
        (err)=>{
          console.log(err);
        });
      },
      error=>{ 
        console.log(error);
      });
  }
}
