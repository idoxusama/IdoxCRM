import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Component, ElementRef, NgZone, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ClinicPlan } from 'src/app/Models/Clinics Model/AddClinicPlan';
import { ExpertBasicInfo } from 'src/app/Models/Experts Model/User';
import { ExpertType } from 'src/app/Models/Settings Model/expertType';
import { Availability } from 'src/app/Models/SLA Models/availability';
import { LocationAddress } from 'src/app/Models/Venue Location/VenueLocationAddress';
import { ClinicPlansService } from 'src/app/Services/Clinics Services/clinic-plans.service';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';
import { VenuelocationService } from 'src/app/Services/VenueLocation/venuelocation.service';

@Component({
  selector: 'app-clinics-clinicplans',
  templateUrl: './clinics-clinicplans.component.html',
  styleUrls: ['./clinics-clinicplans.component.css']
})
export class ClinicsClinicplansComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  clinicPlansForm: FormGroup;
  clinicFormSubmit: boolean = false;
  clinicPlan: ClinicPlan;

  public expertTypes: Array<Select2OptionData>;
  public experts: Array<Select2OptionData>;

  expertAvalabilites: Availability[] = [];
  avalabilites:Array<Select2OptionData>;
  startEndTimeDisabled: boolean = true;

  minuteStep = 1;

  @ViewChild('templateShowLocationList') templateShowLocationList:ElementRef;
  modalRef: BsModalRef;
  nearestLocations: LocationAddress[] = [];

  selectedVenueLocation:LocationAddress;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private settingService: SettingsService,
    private expertUserService: ExpertuserService,
    private slaService: SlaService,
    private fb: FormBuilder,
    private clinicPlanService: ClinicPlansService,
    private toasterService: ToastrService,
    private modalService: BsModalService,
    private venueLocationService: VenuelocationService) { }

  ngOnInit() {
    this.getExpertTypes();
    this.setCurrentLocation();
    this.loadPlaceAutoComplete();
    this.createClinicPlanForm();
  }

  /* #region  Google Map */

  private loadPlaceAutoComplete() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          this.clinicPlansForm.get('mapLatitude').setValue(this.latitude);
          this.clinicPlansForm.get('mapLongitude').setValue(this.latitude);

          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;

    this.clinicPlansForm.get('mapLatitude').setValue(this.latitude);
    this.clinicPlansForm.get('mapLongitude').setValue(this.latitude);

    this.getAddress(this.latitude, this.longitude);

    this.getNearestLocation(this.templateShowLocationList);
  }

  getAddress(latitude, longitude):void|string {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.clinicPlansForm.get('mapAddress').setValue(this.address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  /* #endregion */

  getExpertTypes() {
    this.settingService.getAllExpertType(0).subscribe(response => {
      let res= response.outputObject?response.outputObject:null;
      this.expertTypes=[];
      let defualtOptiton={
        id:'0',
        text:'Select Option'
      };
      this.expertTypes.push(defualtOptiton);
      if(res){
        res.forEach(element => {
          let object =  {
            id: element.expertTypeID,
            text: element.expertCategories
          };
          this.expertTypes.push(object);
        });
      }
    }, error => {
      console.log(error);
    });
  }

  getExperts(event:any) {
    this.expertUserService.getExpertProfileInfo("ExpertType", event.value).subscribe(response => {
      this.experts=[];
      let defualtOptiton={
        id:'0',
        text:'Select Option'
      };
      this.experts.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object =  {
          id: element.id,
          text: element.firstName
        };
        this.experts.push(object);
      });

    }, error => {
      console.log(error);
    });
  }

  getAvailabilityDays(event:any) {
    this.clinicPlansForm.get('expertID').setValue(event.value);
    this.expertUserService.getExpertProfileInfo("Expert",event.value,"","completedprofile").subscribe(response=>{
      let expertPersonalInfo= response.outputObject?response.outputObject.pop():null;
      if(expertPersonalInfo){
        this.getAddress(+expertPersonalInfo.mapLat,+expertPersonalInfo.mapLong);
      }
    },error=>{
      console.log(error);
    },()=>{
      this.slaService.getExpertAvailability(0, event.value).subscribe(response => {
        this.expertAvalabilites = response.outputObject;
        this.avalabilites = [];
        let defualtOptiton = {
          id: '0',
          text: 'Select Option'
        };
        this.avalabilites.push(defualtOptiton);
        response.outputObject.forEach(element => {
          let object = {
            id: element.id,
            text: element.days
          };
          this.avalabilites.push(object);
        });
      }, error => {
        console.log(error);
      });
    });
  }

  createClinicPlanForm() {
    this.clinicPlansForm = this.fb.group({
      expertID: ['', Validators.required],
      locationAddressID: ['', Validators.required],
      expertClinicAvailablityDaysID: ['', Validators.required],
      isAvailabilityTimings: ['true', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      isWeekendAvailable: [false],
      isWeekDaysAvailable: [false],
      travelDistance: ['', Validators.required],
      traveltime: ['', Validators.required],
      mapAddress: ['', Validators.required],
      mapLatitude: ['', Validators.required],
      mapLongitude: ['', Validators.required],
    }, { validators: this.checkTimeRangeInCaseNo.bind(this) });
  }

  checkTimeRangeInCaseNo(group: FormGroup) {
    //first check is Availability timming same or not
    var checkActualAvailabilityTiming = group.get('isAvailabilityTimings').value == 'true' ? true : false;

    if (!checkActualAvailabilityTiming) {
      var availabilityDayId = group.get('expertClinicAvailablityDaysID').value;
      var availability = this.expertAvalabilites.find(e => e.id == availabilityDayId);
      if (availability) {

        let startTimeInCaseYes = new Date(availability.startTime);
        let endTimeInCaseYes = new Date(availability.endTime);

        var startTimeInCaseNo = new Date(group.get('startTime').value);
        var endTimeInCaseNo = new Date(group.get('endTime').value);

        return (startTimeInCaseNo >= startTimeInCaseYes && endTimeInCaseNo <= endTimeInCaseYes) ? null : { timeRangeError: true };
      }
    }
  }

  changeAvailability(event:any) {
    this.clinicPlansForm.get('expertClinicAvailablityDaysID').setValue(event.value)
    var data = this.expertAvalabilites.find(e => e.id == event.value);
    if (data) {
      this.clinicPlansForm.get('startTime').setValue(data.startTime);
      this.clinicPlansForm.get('endTime').setValue(data.endTime);
      this.clinicPlansForm.get('isAvailabilityTimings').setValue('true');
    }
    this.startEndTimeDisabled = true;
  }

  getNearestLocation(template) {
    this.clinicPlansForm.get('mapLatitude').setValue(this.latitude);
    this.clinicPlansForm.get('mapLongitude').setValue(this.latitude);

    this.venueLocationService.getNearestLocations(this.latitude, this.longitude).subscribe(response => {
      this.nearestLocations = response.outputObject;
      this.modalRef = this.modalService.show(template,{class:'modal-lg'});
    }, error => {
      console.log(error);
    });
  }

  bindLocationWithClinicPlan(value){
    this.selectedVenueLocation= this.nearestLocations.find(e=>e.id==value);
    this.clinicPlansForm.get('locationAddressID').setValue(this.selectedVenueLocation.id);
    this.clinicPlansForm.get('travelDistance').setValue(this.selectedVenueLocation.distance);
    this.clinicPlansForm.get('traveltime').setValue(this.selectedVenueLocation.duration);
    
    this.modalRef.hide();
  }

  saveClinicPlan() {
    debugger
    this.clinicFormSubmit = true;
    if (this.clinicPlansForm.valid) {
      this.clinicPlan = Object.assign({}, this.clinicPlansForm.value);

      this.clinicPlanService.createExpertClinicPlan(this.clinicPlan).subscribe(response => {
        this.toasterService.success('Clinic Plan added successfully.');
      }, error => {
        console.log(error);
      }, () => {
        this.ngOnInit();
      });

    }
  }
}
