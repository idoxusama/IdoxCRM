import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AvailabilityStatus,SearchAvailabilityStatus } from 'src/app/Models/Clinics Model/ClinicAvailabilityStatus';
import { ClinicAvailabilityStatusService } from 'src/app/Services/Clinics Services/clinic-availability-status.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-clinics-clinicavailabilitystatus',
  templateUrl: './clinics-clinicavailabilitystatus.component.html',
  styleUrls: ['./clinics-clinicavailabilitystatus.component.css']
})
export class ClinicsClinicavailabilitystatusComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  AvailabilityClinicStatusData: Array<AvailabilityStatus>= new Array();
  ExpertsTypeList:any;
  ExpertsList : any;
  SearchClinicAvailabilityStatusData: SearchAvailabilityStatus = new SearchAvailabilityStatus(); 

  constructor(private ClinicAvailabilityStatusService: ClinicAvailabilityStatusService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Clinics Availability Status");
    this.ExpertsList = [];
      this.ClinicAvailabilityStatusService.getExpertTypes().subscribe(data=>{
        this.ExpertsTypeList = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  SearchSelectedExpertType(data){
    this.SearchClinicAvailabilityStatusData.ExpertTypeID = data;
    this.ClinicAvailabilityStatusService.getExperts(this.SearchClinicAvailabilityStatusData).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){
    this.SearchClinicAvailabilityStatusData.ExpertID = data;
  }


  GetClinicAvailabilityStatusList()
  {
    this.ClinicAvailabilityStatusService.getAvailabilityClinicList(this.SearchClinicAvailabilityStatusData).subscribe(data=>{
      this.AvailabilityClinicStatusData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

}

