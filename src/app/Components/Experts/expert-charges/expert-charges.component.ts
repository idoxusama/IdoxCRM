import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertCharges } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-expert-charges',
  templateUrl: './expert-charges.component.html',
  styleUrls: ['./expert-charges.component.css']
})
export class ExpertChargesComponent implements OnInit {
  @Input() step: StepModel;
  chargesForm: FormGroup;
  expertCharges: ExpertCharges;
  submitted: boolean = false;

  expertID: string;
  state: string;


  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private stepsService: StepsService,
    private fb: FormBuilder,
    private expertUserService: ExpertuserService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() {
    this.createChargesForm();

    this.route.paramMap.subscribe(params => {
      this.expertID = params.get('id');
      this.state = params.get('state');
    });
    if (localStorage.getItem('expertID')) {
      this.getCharges(localStorage.getItem('expertID'), 'draftprofile');
    }
    else if (this.expertID && this.state == 'completedprofile') {
      this.getCharges(this.expertID, this.state);
    }
    else if (this.expertID && this.state == 'draftprofile') {
      this.getCharges(this.expertID, this.state);
    }

    this.setCurrentLocation();
    this.loadPlaceAutoComplete();
  }

  /* #region  Charges */
  createChargesForm(data?: any) {
    if (data) {
      this.chargesForm = this.fb.group({
        iaCharges: [data.iaCharges ? data.iaCharges : '', Validators.required],
        dcCharges: [data.dcCharges ? data.dcCharges : '', Validators.required],
        perSessionCharges: [data.perSessionCharges ? data.perSessionCharges : '', Validators.required],
        mapAddress:[data.mapAddress?data.mapAddress:'',Validators.required],
        mapLat:[data.mapLat?data.mapLat:'',Validators.required],
        mapLong:[data.mapLong?data.mapLong:'',Validators.required],
      });
    }
    else {
      this.chargesForm = this.fb.group({
        iaCharges: ['', Validators.required],
        dcCharges: ['', Validators.required],
        perSessionCharges: ['', Validators.required],
        mapAddress:['',Validators.required],    
        mapLat:['',Validators.required],
        mapLong:['',Validators.required],
      });
    }
  }
  getCharges(id, state) {
    this.expertUserService.getExpertProfileInfo("Expert", id, "", state).subscribe(response => {
      this.expertCharges = response.outputObject ? response.outputObject.pop() : null;
      if (this.expertCharges) {
        this.createChargesForm(this.expertCharges);
        this.getAddress(+this.expertCharges.mapLat,+this.expertCharges.mapLong)
      }
      else {
        this.createChargesForm();
      }
    })
  }

  /* #endregion */
  
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
            
            this.chargesForm.get('mapLat').setValue(this.latitude);
            this.chargesForm.get('mapLong').setValue(this.longitude);
  
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

      this.chargesForm.get('mapLat').setValue(this.latitude);
      this.chargesForm.get('mapLong').setValue(this.longitude);

      this.getAddress(this.latitude, this.longitude);
    }
  
    getAddress(latitude, longitude):void|string {
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
            this.chargesForm.get('mapAddress').setValue(this.address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
  
    /* #endregion */

  onNextStep() {
    this.submitted = true;
    if (this.chargesForm.valid) {
      this.step.isComplete = true;
      if (!this.stepsService.isLastStep()) {

        if ((this.expertID && this.state == 'completedprofile') ||
          (this.expertID && this.state == 'draftprofile')) {
          this.update();
        } else if (localStorage.getItem('expertID')) {
          this.expertID = localStorage.getItem('expertID');
          this.update();
        } else {
          this.submit();
        }
        this.stepsService.moveToNextStep();
      }
    }
  }

  submit() {
    this.expertCharges = Object.assign({}, this.chargesForm.value);
    this.expertCharges.id = +localStorage.getItem('expertID');
    this.expertCharges.userID = +localStorage.getItem('userID');
    this.expertUserService.createExpertFeeCharges(this.expertCharges).subscribe(response => {
      this.toasterService.success('Fee Charges has been added!');
    }, error => {
      console.log(error);
    });
  }

  update() {
    this.expertCharges = Object.assign({}, this.chargesForm.value);
    this.expertCharges.id = +this.expertID;
    this.expertCharges.userID = +localStorage.getItem('userID');
    this.expertUserService.createExpertFeeCharges(this.expertCharges).subscribe(response => {
      this.toasterService.success('Fee Charges has been updated!');
    }, error => {
      console.log(error);
    });
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }
}
