import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClinicFillAnalysis,SearchClinicFillAnalysis } from 'src/app/Models/Clinics Model/ClinicFillAnalysis';
import { ClinicFillAnalysisService } from 'src/app/Services/Clinics Services/clinic-fill-analysis.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ExportService} from 'src/app/Services/export.service';
declare var $: any;

@Component({
  selector: 'app-clinics-clinicfillanalysis',
  templateUrl: './clinics-clinicfillanalysis.component.html',
  styleUrls: ['./clinics-clinicfillanalysis.component.css']
})
export class ClinicsClinicfillanalysisComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ClinicFullAnalysis: Array<ClinicFillAnalysis>= new Array();
  ExpertsTypeList:any;
  ExpertsList : any;
  SearchClinicFillAnalysis: SearchClinicFillAnalysis = new SearchClinicFillAnalysis(); 

  constructor(private ClinicFillAnalysisService: ClinicFillAnalysisService, private router: Router,private exportService: ExportService,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Clinic Full Analysis");
    this.ExpertsList = [];
    this.SearchClinicFillAnalysis.StartDate = new Date().toLocaleDateString();
    this.SearchClinicFillAnalysis.StartDate = this.datepipe.transform(this.SearchClinicFillAnalysis.StartDate, 'yyyy-MM-dd');
    this.SearchClinicFillAnalysis.EndDate = new Date();
    this.SearchClinicFillAnalysis.EndDate = this.datepipe.transform(this.SearchClinicFillAnalysis.EndDate, 'yyyy-MM-dd');
      this.ClinicFillAnalysisService.getExpertTypes().subscribe(data=>{
        this.ExpertsTypeList = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  SearchSelectedExpertType(data){
    this.SearchClinicFillAnalysis.ExpertTypeID = data;
    this.ClinicFillAnalysisService.getExperts(this.SearchClinicFillAnalysis).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){
    this.SearchClinicFillAnalysis.ExpertID = data;
  }


  GetOutstandingClinicList()
  {
    this.ClinicFillAnalysisService.getClinicFillAnalysisList(this.SearchClinicFillAnalysis).subscribe(data=>{
      this.ClinicFullAnalysis = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }


  export() {
      this.exportService.exportExcel(this.ClinicFullAnalysis, 'Clinic Full Analysis');    
  }

}
