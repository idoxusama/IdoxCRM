import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OutstandingClinicsModel,SearchOutstandingClinics } from 'src/app/Models/Clinics Model/Outstanding Clinics';
import { OutstandingClinicListService } from 'src/app/Services/Clinics Services/outstanding-clinic-list.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-clinics-outstandingcliniclist',
  templateUrl: './clinics-outstandingcliniclist.component.html',
  styleUrls: ['./clinics-outstandingcliniclist.component.css']
})
export class ClinicsOutstandingcliniclistComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  SentOutstandingClinicData: Array<OutstandingClinicsModel>= new Array();
  UnsentOutstandingClinicData: Array<OutstandingClinicsModel>= new Array();
  ExpertsTypeList:any;
  ExpertsList : any;
  CreationExpertsList : any;
  SearchOutstandingClinics: SearchOutstandingClinics = new SearchOutstandingClinics(); 

  constructor(private OutstandingClinicListService: OutstandingClinicListService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Outstanding Clinics");
    this.SentOutstandingClinicData = [];
    this.UnsentOutstandingClinicData = [];
    this.ExpertsList = [];
    this.SearchOutstandingClinics.StartDate = new Date().toLocaleDateString();
    this.SearchOutstandingClinics.StartDate = this.datepipe.transform(this.SearchOutstandingClinics.StartDate, 'yyyy-MM-dd');
    this.SearchOutstandingClinics.EndDate = new Date();
    this.SearchOutstandingClinics.EndDate = this.datepipe.transform(this.SearchOutstandingClinics.EndDate, 'yyyy-MM-dd');

      this.OutstandingClinicListService.getExpertTypes().subscribe(data=>{
        this.ExpertsTypeList = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  SearchSelectedExpertType(data){
    this.SearchOutstandingClinics.ExpertTypeID = data;
    this.OutstandingClinicListService.getExperts(this.SearchOutstandingClinics).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){
    this.SearchOutstandingClinics.ExpertID = data;
  }


  GetOutstandingClinicList()
  {
    this.OutstandingClinicListService.getUnsentOutstandingClinicsData(this.SearchOutstandingClinics).subscribe(data=>{
      this.UnsentOutstandingClinicData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });

      this.OutstandingClinicListService.getSentOutstandingClinicsData(this.SearchOutstandingClinics).subscribe(data=>{
        this.SentOutstandingClinicData = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  Send(ClinicID){
    this.OutstandingClinicListService.ChangeToSentClinic(ClinicID).subscribe(data=>{
      this.Toastr.success('Clinic Sent Successfully ');
      this.GetOutstandingClinicList();
      },
      error=>{ 
        console.log(error);
      });
  }

  Unsend(ClinicID){
    this.OutstandingClinicListService.ChangeToUnsentClinic(ClinicID).subscribe(data=>{
      this.Toastr.success('Clinic Unsent Successfully ');
      this.GetOutstandingClinicList();
      },
      error=>{ 
        console.log(error);
      });
  }



}
