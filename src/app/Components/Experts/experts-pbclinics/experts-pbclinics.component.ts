import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedcoExperts } from 'src/app/Models/Experts Model/Medco Experts';
import { PbClinicsService } from 'src/app/Services/Experts Services/pb-clinics.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-experts-pbclinics',
  templateUrl: './experts-pbclinics.component.html',
  styleUrls: ['./experts-pbclinics.component.css']
})
export class ExpertsPbclinicsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  Town: string;
  Status:string;
  StartDate:string;
  EndDate:string;
  PBCinicData:any;


  constructor(private PbClinicsService: PbClinicsService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("PB Clinics");
    this.Town = "All";
    this.Status = "All";
  }


  selectedStatus(event){this.Status = event;}


  SearchPBClinicsData(){
    this.PbClinicsService.getPBClinicsData(this.Town, this.Status,this.StartDate,this.EndDate).subscribe(data=>{
      this.PBCinicData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }


  ChangeStatus(Data){
    if(Data.IsAvailableForIdox == "True")
    {Data.IsAvailableForIdox = "Disabled";}
    else if(Data.IsAvailableForIdox == "False")
    {Data.IsAvailableForIdox = "Enabled";}
    this.PbClinicsService.ChangePBStatus(Data).subscribe(data=>{
      this.ngOnInit();
      },
      error=>{ 
        console.log(error);
      });
  }
}
