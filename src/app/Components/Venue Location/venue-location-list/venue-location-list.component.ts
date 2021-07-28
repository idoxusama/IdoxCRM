import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationAddress } from 'src/app/Models/Venue Location/VenueLocationAddress';
import { VenuelocationService } from 'src/app/Services/VenueLocation/venuelocation.service';

@Component({
  selector: 'app-venue-location-list',
  templateUrl: './venue-location-list.component.html',
  styleUrls: ['./venue-location-list.component.scss']
})
export class VenueLocationListComponent implements OnInit {
  currentPage:number=1;
  locationAddress:LocationAddress;

  constructor(private venueLocationServce: VenuelocationService,
    private toasterService:ToastrService) { }

  ngOnInit() {
    this.getLocationAddress();
  }

  getLocationAddress(){
    this.venueLocationServce.getLocationAddress(0,0).subscribe(response=>{
      this.locationAddress= response.outputObject;
    },error=>{
      console.log(error);
    });
  }
  updateLocationStatus(id,statusValue){
    let model:any={};
    model.id=id;
    model.event="IsActive";
    model.value=statusValue;
    model.functionName='LocationAddress';
    model.userID=localStorage.getItem('userID');

    this.venueLocationServce.updateLocationStatus(model).subscribe(response=>{
      this.toasterService.success('Venue Location status update successfully');
    },error=>{
      console.log(error);
    },()=>{
      this.getLocationAddress();
    });
  }
  deleteVenueLocation(id){
    let model:any={};
    model.id=id;
    model.event="IsDeleted";
    model.value=1;
    model.functionName='LocationAddress';
    model.userID=localStorage.getItem('userID');

    this.venueLocationServce.updateLocationStatus(model).subscribe(response=>{
      this.toasterService.success('Venue Location deleted successfully');
    },error=>{
      console.log(error);
    },()=>{
      this.getLocationAddress();
    });
  }
}
