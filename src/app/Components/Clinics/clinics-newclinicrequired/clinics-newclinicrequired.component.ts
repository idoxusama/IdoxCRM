import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NewClinicRequired,SearchNewClinicRequired } from 'src/app/Models/Clinics Model/NewClinicRequired';
import { NewClinicRequiredService } from 'src/app/Services/Clinics Services/new-clinic-required.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ExportService} from 'src/app/Services/export.service';
declare var $: any;

@Component({
  selector: 'app-clinics-newclinicrequired',
  templateUrl: './clinics-newclinicrequired.component.html',
  styleUrls: ['./clinics-newclinicrequired.component.css']
})
export class ClinicsNewclinicrequiredComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  NewClinicRequired: Array<NewClinicRequired>= new Array();
  ExpertsTypeList:any;
  ExpertsList : any;
  SearchNewClinicRequired: SearchNewClinicRequired = new SearchNewClinicRequired(); 

  constructor(private NewClinicRequiredService: NewClinicRequiredService, private router: Router,private exportService: ExportService,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("New Clinic Required");
    this.ExpertsList = [];
    this.SearchNewClinicRequired.StartDate = new Date().toLocaleDateString();
    this.SearchNewClinicRequired.StartDate = this.datepipe.transform(this.SearchNewClinicRequired.StartDate, 'yyyy-MM-dd');
    this.SearchNewClinicRequired.EndDate = new Date();
    this.SearchNewClinicRequired.EndDate = this.datepipe.transform(this.SearchNewClinicRequired.EndDate, 'yyyy-MM-dd');
      this.NewClinicRequiredService.getExpertTypes().subscribe(data=>{
        this.ExpertsTypeList = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  SearchSelectedExpertType(data){
    this.SearchNewClinicRequired.ExpertTypeID = data;
    this.NewClinicRequiredService.getExperts(this.SearchNewClinicRequired).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){
    this.SearchNewClinicRequired.ExpertID = data;
  }


  GetNewClinicRequiredList()
  {
    this.NewClinicRequiredService.getNewClinicRequired(this.SearchNewClinicRequired).subscribe(data=>{
      this.NewClinicRequired = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }


  export() {
      this.exportService.exportExcel(this.NewClinicRequired, 'New Clinics');    
  }

}
