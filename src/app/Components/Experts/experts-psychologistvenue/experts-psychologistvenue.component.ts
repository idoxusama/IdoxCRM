import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExpertVenue,SearchExpertVenue } from 'src/app/Models/Experts Model/Expert Venue Model';
import { VenuesService } from 'src/app/Services/Experts Services/venues.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-experts-psychologistvenue',
  templateUrl: './experts-psychologistvenue.component.html',
  styleUrls: ['./experts-psychologistvenue.component.css']
})
export class ExpertsPsychologistvenueComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ExpertVenueData: Array<ExpertVenue>= new Array();
  CreateExpertVenue: ExpertVenue = new ExpertVenue();
  SelectedExpertVenue: ExpertVenue = new ExpertVenue();
  ExpertsTypeList:any;
  ExpertsList : any;
  CreationExpertsList : any;
  formData = new FormData();
  SearchExpertVenue: SearchExpertVenue = new SearchExpertVenue(); 

  constructor(private VenuesService: VenuesService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Expert Venue");
    this.VenuesService.getAllVenueData().subscribe(data=>{
      this.ExpertVenueData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
      this.VenuesService.getExpertTypesList().subscribe(data=>{
        this.ExpertsTypeList = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
  }

  SearchSelectedExpertType(data){
    this.SearchExpertVenue.ExpertClinicTypeID = data;
    this.VenuesService.getSelectedExpertsData(this.SearchExpertVenue).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){this.SearchExpertVenue.ExpertID = data;}

  SearchExpertVenues(){
    this.VenuesService.getSelectedVenueData(this.SearchExpertVenue).subscribe(data=>{
      this.ExpertVenueData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }


  CreationSelectedExpertType(data){
    this.CreateExpertVenue.ExpertVenueTypeID = data;
    this.VenuesService.getCreationSelectedExpertsData(this.CreateExpertVenue).subscribe(data=>{
      this.CreationExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  CreationSelectedExpert(data){this.CreateExpertVenue.ExpertID = data;}
  selectedStatus(data){this.CreateExpertVenue.Status = data;}
  UploadImage(myFiles: any){this.formData.append("UploadImage",myFiles[0]);}

  Create(){
    this.formData.append("ExpertID",this.CreateExpertVenue.ExpertID);
    this.formData.append("ExpertVenueTypeID",this.CreateExpertVenue.ExpertVenueTypeID);
    this.formData.append("Description",this.CreateExpertVenue.Description);
    this.formData.append("AddressLine1",this.CreateExpertVenue.AddressLine1);
    this.formData.append("County",this.CreateExpertVenue.County);
    this.formData.append("Town",this.CreateExpertVenue.Town);
    this.formData.append("PostCode",this.CreateExpertVenue.PostCode);
    this.formData.append("PhoneNo",this.CreateExpertVenue.PhoneNo);
    this.formData.append("MapLink",this.CreateExpertVenue.MapLink);
    this.formData.append("Summary",this.CreateExpertVenue.Summary);
    this.formData.append("IsParkingFacility",this.CreateExpertVenue.IsParkingFacility);
    this.formData.append("IsDisabledAccess",this.CreateExpertVenue.IsDisabledAccess);
    this.formData.append("Status",this.CreateExpertVenue.Status);
    this.formData.append("CreatedBy",localStorage.getItem('userName'));
    this.VenuesService.CreateExpertVenue(this.formData).subscribe(data=>{
      $("#CreateVenueModal").modal("hide");
      this.ngOnInit();
      },
      error=>{ 
        console.log(error);
      });
  }


  selectedUserDetail(ExpertVenue){
    this.SelectedExpertVenue = ExpertVenue;
    this.VenuesService.getCreationSelectedExpertsData(this.SelectedExpertVenue).subscribe(data=>{
      this.CreationExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
    if(this.SelectedExpertVenue.IsParkingFacility == "True") { this.SelectedExpertVenue.IsParkingFacility = true;}
    else if(this.SelectedExpertVenue.IsParkingFacility == "False") { this.SelectedExpertVenue.IsParkingFacility = false;}
    if(this.SelectedExpertVenue.IsDisabledAccess == "True") { this.SelectedExpertVenue.IsDisabledAccess = true;}
    else if(this.SelectedExpertVenue.IsDisabledAccess == "False") { this.SelectedExpertVenue.IsDisabledAccess = false;}
  }

  UpdationSelectedExpertType(data){
    this.CreateExpertVenue.ExpertVenueTypeID = data;
    this.VenuesService.getCreationSelectedExpertsData(this.CreateExpertVenue).subscribe(data=>{
      this.CreationExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }
  UpdationSelectedExpert(data){this.SelectedExpertVenue.ExpertID = data;}
  UpdationselectedStatus(data){this.SelectedExpertVenue.Status = data;}
  UpdationUploadImage(myFiles: any){this.formData.append("UploadImage",myFiles[0]);}

  Update(){
    this.formData.append("ID",this.SelectedExpertVenue.ID);
    this.formData.append("ExpertID",this.SelectedExpertVenue.ExpertID);
    this.formData.append("ExpertVenueTypeID",this.SelectedExpertVenue.ExpertVenueTypeID);
    this.formData.append("Description",this.SelectedExpertVenue.Description);
    this.formData.append("AddressLine1",this.SelectedExpertVenue.AddressLine1);
    this.formData.append("County",this.SelectedExpertVenue.County);
    this.formData.append("Town",this.SelectedExpertVenue.Town);
    this.formData.append("PostCode",this.SelectedExpertVenue.PostCode);
    this.formData.append("PhoneNo",this.SelectedExpertVenue.PhoneNo);
    this.formData.append("MapLink",this.SelectedExpertVenue.MapLink);
    this.formData.append("Summary",this.SelectedExpertVenue.Summary);
    this.formData.append("IsParkingFacility",this.SelectedExpertVenue.IsParkingFacility);
    this.formData.append("IsDisabledAccess",this.SelectedExpertVenue.IsDisabledAccess);
    this.formData.append("Status",this.SelectedExpertVenue.Status);
    this.formData.append("LastModifiedBy",localStorage.getItem('userName'));
    this.VenuesService.UpdateExpertVenue(this.formData).subscribe(data=>{
      $("#UpdateVenueModal").modal("hide");
      this.ngOnInit();
      },
      error=>{ 
        console.log(error);
      });
  }

}
