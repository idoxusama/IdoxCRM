import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ThemeService } from 'ng2-charts';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';
import { MedicalSecretary } from 'src/app/Models/Medical Secretary Model/Secretary';
declare var $: any;


@Component({
  selector: 'app-MedicalSecretaryList',
  templateUrl: './MedicalSecretaryList.component.html',
  styleUrls: ['./MedicalSecretaryList.component.css']
})
export class MedicalSecretaryListComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  currentPage:number=1;

  MedicalSecretaryData: Array<MedicalSecretary>= new Array();
  CreateMedicalSecretary: MedicalSecretary = new MedicalSecretary();
  SelectedMedicalSecretary: MedicalSecretary = new MedicalSecretary();
  IsInhouse:boolean=false;
   constructor(private medicalsecretaryService: MedicalsecretaryService,
    private MedcoexpertService: MedcoexpertService, 
    private router: Router,
    public datepipe: DatePipe,
    private Toastr: ToastrService) { }
 

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

  Delete(id){
    let model: any = {
      event: 'IsDeleted',
      id: id,
      value:1,
      functionName:'MedicalSecretary',
      userID: + localStorage.getItem("userID")
    };
    this.medicalsecretaryService.DeleteMedicalSecretary(model).subscribe((resp) => {
      this.Toastr.success('Medical Secretary Deleted Successfully ');
      this.ngOnInit();
    },
    (err) => {
      console.log(err);
    });
  }
}
