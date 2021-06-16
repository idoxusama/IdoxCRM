import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FutureClinicRequired,SearchFutureClinicRequired } from 'src/app/Models/Clinics Model/FutureClinicRequired';
import { FutureClinicRequiredService } from 'src/app/Services/Clinics Services/future-clinic-required.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ExportService} from 'src/app/Services/export.service';
declare var $: any;

@Component({
  selector: 'app-clinics-futureclinicrequired',
  templateUrl: './clinics-futureclinicrequired.component.html',
  styleUrls: ['./clinics-futureclinicrequired.component.css']
})
export class ClinicsFutureclinicrequiredComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  FutureClinicRequired: Array<FutureClinicRequired>= new Array();
  ExpertsTypeList:any;
  ExpertsList : any;
  SearchFutureClinicRequired: SearchFutureClinicRequired = new SearchFutureClinicRequired(); 

  constructor(private FutureClinicRequiredService: FutureClinicRequiredService, private router: Router,private exportService: ExportService,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Future Clinic Required");
    this.ExpertsList = [];
      this.FutureClinicRequiredService.getExpertTypes().subscribe(data=>{
        this.ExpertsTypeList = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  SearchSelectedExpertType(data){
    this.SearchFutureClinicRequired.ExpertTypeID = data;
    this.FutureClinicRequiredService.getExperts(this.SearchFutureClinicRequired).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){
    this.SearchFutureClinicRequired.ExpertID = data;
  }


  GetFutureClinicRequiredList()
  {
    this.FutureClinicRequiredService.getFutureClinicRequired(this.SearchFutureClinicRequired).subscribe(data=>{
      this.FutureClinicRequired = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }


  export() {
      this.exportService.exportExcel(this.FutureClinicRequired, 'Future Clinics');    
  }

}
