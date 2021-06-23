import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationImageName } from 'src/app/Models/Venue Location/LocationImageName';
import { LocationImages } from 'src/app/Models/Venue Location/LocationImages';
import { LocationRooms, LocationRoomsList } from 'src/app/Models/Venue Location/LocationRooms';
import { LocationSiteInfo } from 'src/app/Models/Venue Location/LocationSiteInfo';
import { LocationAddress } from 'src/app/Models/Venue Location/VenueLocationAddress';
import { VenuelocationService } from 'src/app/Services/VenueLocation/venuelocation.service';
import { googlemaps } from 'googlemaps';
import { AgmMap, MapsAPILoader, MouseEvent } from '@agm/core';
import { Country } from 'src/app/Models/Settings Model/country';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { MultiDiamensionalStuffValues } from 'src/app/Models/Settings Model/mutliDiamentionalStuffValues';

@Component({
  selector: 'app-venue-location',
  templateUrl: './venue-location.component.html',
  styleUrls: ['./venue-location.component.scss']
})
export class VenueLocationComponent implements OnInit, AfterViewInit {

  /* #region  Fields */
  @ViewChild('agmMap') agmMap: AgmMap;
  lat = 132;
  lng = 150;
  zoom: number = 0;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  countries: Country[] = [];

  locationAddress: LocationAddress;
  locationAddressID: number;

  locationSiteInfo: LocationSiteInfo;

  locationImages: LocationImages[] = [];
  locationImageNames: MultiDiamensionalStuffValues[] = [];
  locationCostByValues: MultiDiamensionalStuffValues[] = [];

  locationRooms: LocationRooms = new LocationRooms();
  locationRoomsList: LocationRoomsList[] = [];


  venueLocationForm: FormGroup;
  venueLocationSubmitted: boolean = false;

  uploadImageArea: boolean = false;
  imagesToUpload = [];

  /* #endregion */
 
  constructor(private venueLocationService: VenuelocationService,
    private settingService:SettingsService,
    private fb: FormBuilder,
    private toasterService: ToastrService,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.createVenueLocationForm();
    this.getLocationImageNames();
    this.getLocationCostByValues();
    this.getCountries();
    this.loadPlacesAutoComplete();
  }
  ngAfterViewInit() {
    this.agmMap.triggerResize(true);
    this.setCurrentLocation();
  }

  /* #region  Google Map Configuration */

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  loadPlacesAutoComplete() {
    //load Places Autocomplete
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
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.venueLocationForm.get('mapLat').setValue(this.lat);
          this.venueLocationForm.get('mapLong').setValue(this.lng);

          this.zoom = 12;
        });
      });
    });
  }
  markerDragEnd($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;

    this.venueLocationForm.get('mapLat').setValue(this.lat);
    this.venueLocationForm.get('mapLong').setValue(this.lng);

    this.getAddress(this.lat, this.lng)
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.venueLocationForm.get('mapAddress').setValue(this.address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  mapClicked() {

  }
  /* #endregion */

  /* #region  Venue Location */

  getCountries() {
    this.settingService.getCountries(0).subscribe(response => {
      this.countries = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  createVenueLocationForm(data?: any) {
    this.venueLocationForm = this.fb.group({
      name: ['', Validators.required],
      countryID: ['', Validators.required],
      county: ['', Validators.required],
      town: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      postCode: ['', Validators.required],
      mapLink: [''],
      mapLat: ['', Validators.required],
      mapLong: ['', Validators.required],
      mapAddress: ['', Validators.required],
      daysOfBooking: ['', Validators.required],
      locationCostBy: ['', Validators.required],
      amount: ['', Validators.required],
      availability: ['', Validators.required],
      isDisabilityAccess: [false],
      isLiftAvailable: [false],
      onSiteParking: [false],
      ofSiteParking: [false],
      parkingFeeFullDay: ['', Validators.required],
      parkingFeeHalfDay: ['', Validators.required],
      parkingFeeHourly: ['', Validators.required],
      isReception: [false],
      isWatingArea: [false],
      isPvtRoom: [false],
      locationImagesControlsArray: this.fb.array([]),
      locationRoomsControlsArray: this.fb.array([])
    });
  }

  getLocationImageNames() {
    this.settingService.getMultiDiamensionalStuffValues('VenueLocation', 'LocationImage').subscribe(response => {
      this.locationImageNames = response.outputObject;
    }, error => {
      console.log(error);
    });
  }
  getLocationCostByValues(){
    this.settingService.getMultiDiamensionalStuffValues('VenueLocation', 'LocationCostBy').subscribe(response => {
      this.locationCostByValues = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  //add Location Images Controls
  get locationImagesControlsArray() {
    return this.venueLocationForm.get('locationImagesControlsArray') as FormArray;
  }

  addLocationImages(value) {
    let flag = true;
    if (value == '-1') {
      return;
    }

    if (this.locationImagesControlsArray.controls.length > 0) {
      for (let i = 0; i < this.locationImagesControlsArray.controls.length; i++) {
        if (this.locationImagesControlsArray.controls[i].get('areaImageID').value == value) {
          flag = false;
          break;
        }
        else {
          flag = true;
        }
      }
    }

    if (flag) {
      this.locationImagesControlsArray.push(this.addLocationImagesGroup(value));
    }
  }

  addLocationImagesGroup(value) {
    return this.fb.group({
      files: [null, Validators.required],
      areaImageName: ['', Validators.required],
      description: [''],
      areaImageID: [value],
    });
  }

  onUploadImages(files, group: FormGroup) {
    debugger
    if (files.length == 0) {
      return;
    }
    else {
      let locationImages = new LocationImages();
      for (let index = 0; index < files.length; index++) {
        locationImages.files.push(files[index]);
      }

      locationImages.areaImageName = group.get('areaImageName').value;
      locationImages.description = group.get('description').value;
      locationImages.areaImageID = +group.get('areaImageID').value;
      locationImages.userID = +localStorage.getItem('userID');

      this.locationImages.push(locationImages);
    }
  }
  removeLocationImagesControl(index) {
    this.locationImagesControlsArray.removeAt(index);
  }

  //add Location Rooms
  get locationRoomsControlsArray() {
    return this.venueLocationForm.get('locationRoomsControlsArray') as FormArray;
  }

  addLocationRooms() {
    this.locationRoomsControlsArray.push(this.addLocationRoomsGroup());
  }

  addLocationRoomsGroup() {
    return this.fb.group({
      venueRoomName: ['', Validators.required],
      isPvtRoom: [false, Validators.required],
      amt: ['', Validators.required]
    });
  }

  removeLocationRoomsControl(index) {
    this.locationRoomsControlsArray.removeAt(index);
  }

  async saveVenueLocation() {
    debugger
    this.venueLocationSubmitted = true;
    if (this.venueLocationForm.valid) {
      try {
        this.locationAddress = Object.assign({}, this.venueLocationForm.value);
        this.locationAddress.userID = +localStorage.getItem('userID');
        let responseOfLocationAddress = await this.venueLocationService.createLocationAddress(this.locationAddress).toPromise();

        this.locationAddressID = responseOfLocationAddress.outputObject ? responseOfLocationAddress.outputObject.pop().id : 0;

        this.locationSiteInfo = Object.assign({}, this.venueLocationForm.value);
        this.locationSiteInfo.locationAddressID = this.locationAddressID;
        this.locationSiteInfo.userID = +localStorage.getItem('userID');
        let responseOfLocationSiteInfo = await this.venueLocationService.createLocationSiteInfo(this.locationSiteInfo).toPromise();

        if (this.locationImages) {
          this.locationImages.forEach(async x => {
            let formData = new FormData();
            x.locationAddressID = this.locationAddressID;
            formData.append('locationAddressID', '' + x.locationAddressID);
            formData.append('areaImageName', x.areaImageName);
            formData.append('areaImageID', '' + x.areaImageID);
            formData.append('description', x.description);
            formData.append('userID', '' + x.userID);
            x.files.forEach((f) => formData.append("Files", f));
            let responseOfLocationImages = await this.venueLocationService.createLocationImages(formData).toPromise();
          });
        }

        this.locationRooms.locationRoomsList = this.venueLocationForm.get('locationRoomsControlsArray').value;
        this.locationRooms.locationAddressID = this.locationAddressID;
        this.locationRooms.userID = +localStorage.getItem('userID');
        let responseOfLocationRooms = await this.venueLocationService.createLocationRooms(this.locationRooms).toPromise();

        this.ngOnInit();
        this.toasterService.success('Venue Location created successfully.');
      }
      catch (error) {
        console.log(error);
      }
    }
  }
}
/* #endregion */