import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClinicExtentionRequired,SearchClinicExtentionRequired } from 'src/app/Models/Clinics Model/ClinicExtentionRequired';
import { ClinicExtentionRequiredService } from 'src/app/Services/Clinics Services/clinic-extention-required.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ExportService} from 'src/app/Services/export.service';
declare var $: any;

@Component({
  selector: 'app-clinics-clinicextensionrequired',
  templateUrl: './clinics-clinicextensionrequired.component.html',
  styleUrls: ['./clinics-clinicextensionrequired.component.css']
})
export class ClinicsClinicextensionrequiredComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ClinicExtentionRequired: Array<ClinicExtentionRequired>= new Array();
  ExpertsTypeList:any;
  ExpertsList : any;
  SearchClinicExtentionRequired: SearchClinicExtentionRequired = new SearchClinicExtentionRequired(); 

  constructor(private ClinicExtentionRequiredService: ClinicExtentionRequiredService, private router: Router,private exportService: ExportService,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Clinic Extention Required");
    this.ExpertsList = [];
    this.SearchClinicExtentionRequired.StartDate = new Date().toLocaleDateString();
    this.SearchClinicExtentionRequired.StartDate = this.datepipe.transform(this.SearchClinicExtentionRequired.StartDate, 'yyyy-MM-dd');
    this.SearchClinicExtentionRequired.EndDate = new Date();
    this.SearchClinicExtentionRequired.EndDate = this.datepipe.transform(this.SearchClinicExtentionRequired.EndDate, 'yyyy-MM-dd');
      this.ClinicExtentionRequiredService.getExpertTypes().subscribe(data=>{
        this.ExpertsTypeList = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  SearchSelectedExpertType(data){
    this.SearchClinicExtentionRequired.ExpertTypeID = data;
    this.ClinicExtentionRequiredService.getExperts(this.SearchClinicExtentionRequired).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){
    this.SearchClinicExtentionRequired.ExpertID = data;
  }


  GetClinicExtentionRequiredList()
  {
    this.ClinicExtentionRequiredService.getClinicExtentionRequiredList(this.SearchClinicExtentionRequired).subscribe(data=>{
      this.ClinicExtentionRequired = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }


  export() {
      this.exportService.exportExcel(this.ClinicExtentionRequired, 'Clinic Extention');    
  }

}
