import { AgmMap, MapsAPILoader, MouseEvent } from '@agm/core';
import { AfterViewInit, Component, ContentChild, ElementRef, NgZone, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'console';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/Models/Settings Model/country';
import { LocationImageName } from 'src/app/Models/Venue Location/LocationImageName';
import { LocationImage, LocationImages } from 'src/app/Models/Venue Location/LocationImages';
import { LocationRooms, LocationRoomsList } from 'src/app/Models/Venue Location/LocationRooms';
import { LocationSiteInfo } from 'src/app/Models/Venue Location/LocationSiteInfo';
import { LocationAddress } from 'src/app/Models/Venue Location/VenueLocationAddress';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { VenuelocationService } from 'src/app/Services/VenueLocation/venuelocation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-venu-location-detail',
  templateUrl: './venu-location-detail.component.html',
  styleUrls: ['./venu-location-detail.component.css']
})
export class VenuLocationDetailComponent implements OnInit {
  /* #region  Fields */
  @ViewChild('search') search;
  @ViewChild('agmMap') agmMap: AgmMap;
  lat = 132;
  lng = 150;
  zoom: number = 0;
  address: string;
  private geoCoder;
  updateLocationForm:FormGroup;
  updateMapLocation:boolean=false;
  disableOrEnableSearchAddress=true;


  locationAddressID: string;

  locationAddress: LocationAddress;
  locationAddressForm: FormGroup;
  locatoinAddressFormSubmit: boolean = false;

  locationSiteInfo: LocationSiteInfo;
  locationSiteInfoForm: FormGroup;
  locationSiteInfoFormSubmit: boolean = false;

  locationRoom: LocationRooms = new LocationRooms();
  locationRoomItem: LocationRoomsList;
  locationRoomItemForm: FormGroup;
  locationRoomFormSubmit: boolean = false;
  @ViewChild('addOrUpdateLocationRoom') addOrUpdateLocationRoom: ElementRef;

  locationImages: LocationImage[] = [];
  locationRooms: LocationRoomsList[] = [];
  locationImagesName: LocationImageName[] = [];
  uploadLocationImageForm: FormGroup;
  uploadLocationImageFormSubmit: boolean = false;
  filesUploaded = [];

  imageUrl:string|ArrayBuffer;

  modalRef: BsModalRef;
  /* #endregion */

  constructor(
    private venueLocationService: VenuelocationService,
    private settingService:SettingsService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toasterService: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.locationAddressID = params.get('id');
    });

    if (this.locationAddressID) {
      this.getLocationAddress(this.locationAddressID);
      this.getLocationSiteInfo(this.locationAddressID);
      this.getLocationImages(this.locationAddressID);
      this.getLocationRooms(this.locationAddressID);
    }
    
    this.loadPlacesAutoComplete();
    this.setCurrentLocation();
    this.updateMapLocationForm();
  }

  /* #region  Google Map Configuration */
  loadPlacesAutoComplete() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement);
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
          this.updateLocationForm.get('mapLat').setValue(this.lat);
          this.updateLocationForm.get('mapLong').setValue(this.lng);

          this.zoom = 12;
        });
      });
    });
  }
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  markerDragEnd($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;

    this.updateLocationForm.get('mapLat').setValue(this.lat);
    this.updateLocationForm.get('mapLong').setValue(this.lng);

    this.getAddress(this.lat, this.lng)
  }
  getAddress(latitude, longitude) {
    this.mapsAPILoader.load().then(()=>{
      this.geoCoder = new google.maps.Geocoder;
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
            this.updateLocationForm.get('enterAddress').setValue(this.address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
  
      });
    })
  }
  mapClicked() {

  }

  updateMapLocationForm(data?:any,updateMapLocation?:boolean){
    if(data){
      this.lat=+data.mapLat;
      this.lng= +data.mapLong;
      this.getAddress(this.lat,this.lng);
      this.updateLocationForm= this.fb.group({
        mapLat:[data.mapLat?data.mapLat:'',Validators.required],
        mapLong:[data.mapLong?data.mapLong:'',Validators.required],
        enterAddress:[this.address?this.address:'',Validators.required],
      });
      this.updateMapLocation=updateMapLocation;
      if(updateMapLocation){
        this.disableOrEnableSearchAddress=false;
      }
    }
    else{
      this.updateLocationForm= this.fb.group({
        mapLat:['',Validators.required],
        mapLong:['',Validators.required],
        enterAddress:['',Validators.required],
      });
      this.setCurrentLocation();
    }
  }

  saveUpdatedLocation(){
    if(this.updateLocationForm.valid){
      this.locationAddress.mapLat= this.updateLocationForm.get('mapLat').value;
      this.locationAddress.mapLong = this.updateLocationForm.get('mapLong').value;

      this.venueLocationService.updateLocationAddress(this.locationAddress).subscribe(response=>{
        this.toasterService.success('Map Locaiton updated successfully');
      },error=>{
        console.log(error);
      },()=>{
        this.ngOnInit();
      });
    }
  }

  /* #endregion */

  /* #region  Location Address */

  getLocationAddress(id) {
    this.venueLocationService.getLocationAddress(id, 1).subscribe(response => {
      this.locationAddress = response.outputObject ? response.outputObject.pop() : null;
    }, error => {
      console.log(error);
    },()=>{
      this.updateMapLocationForm(this.locationAddress);
    })
  }

  editLocationAddressForm(template: TemplateRef<any>) {
    let data = this.locationAddress;
    this.getAddress(+data.mapLat,+data.mapLong);
    this.locationAddressForm = this.fb.group({
      id: [data.id ? data.id : ''],
      name: [data.name ? data.name : '', Validators.required],
      countryID: [data.countryID ? data.countryID : '', Validators.required],
      county: [data.county ? data.county : '', Validators.required],
      town: [data.town ? data.town : '', Validators.required],
      address: [data.address ? data.address : '', Validators.required],
      phone: [data.phone ? data.phone : '', Validators.required],
      postCode: [data.postCode ? data.postCode : '', Validators.required],
      mapLat: [data.mapLat ? data.mapLat : '', Validators.required],
      mapLong: [data.mapLong ? data.mapLong : '', Validators.required],
      enterAddress:[this.address?this.address:'',Validators.required]
    });
    this.modalRef = this.modalService.show(template,{class:'modal-lg'});

    this.agmMap.triggerResize(true);
  }

  updateLocationAddress() {
    this.locatoinAddressFormSubmit = true;
    if (this.locationAddressForm.valid) {
      this.locationAddress = Object.assign({}, this.locationAddressForm.value);
      this.venueLocationService.updateLocationAddress(this.locationAddress).subscribe(response => {
        this.toasterService.success('Location address has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.getLocationAddress(this.locationAddressID);
      });
    }
  }

  /* #endregion */

  /* #region  Location Site Info */
  getLocationSiteInfo(id) {
    this.venueLocationService.getLocationSiteInfo(0, id).subscribe(response => {
      this.locationSiteInfo = response.outputObject ? response.outputObject.pop() : null;
    }, error => {
      console.log(error);
    })
  }

  editLocationSiteInfo(template: TemplateRef<any>) {
    let data = this.locationSiteInfo;
    this.locationSiteInfoForm = this.fb.group({
      id: [data.id ? data.id : ''],
      locationAddressID: [data.locationAddressID ? data.locationAddressID : ''],
      daysOfBooking: [data.daysOfBooking ? data.daysOfBooking : '', Validators.required],
      locationCostBy: [data.locationCostBy ? data.locationCostBy : '', Validators.required],
      amount: [data.amount ? data.amount : '', Validators.required],
      availability: [data.availability ? data.availability : '', Validators.required],
      isDisabilityAccess: [data.isDisabilityAccess ? data.isDisabilityAccess : false, Validators.required],
      isLiftAvailable: [data.isLiftAvailable ? data.isLiftAvailable : false, Validators.required],
      onSiteParking: [data.onSiteParking ? data.onSiteParking : false, Validators.required],
      ofSiteParking: [data.ofSiteParking ? data.ofSiteParking : false, Validators.required],
      parkingFeeFullDay: [data.parkingFeeFullDay ? data.parkingFeeFullDay : '', Validators.required],
      parkingFeeHalfDay: [data.parkingFeeHalfDay ? data.parkingFeeHalfDay : '', Validators.required],
      parkingFeeHourly: [data.parkingFeeHourly ? data.parkingFeeHourly : '', Validators.required],
      isReception: [data.isReception ? data.isReception : false, Validators.required],
      isWatingArea: [data.isWatingArea ? data.isWatingArea : false, Validators.required],
      isPvtRoom: [data.isPvtRoom ? data.isPvtRoom : false, Validators.required],
    });

    this.modalRef = this.modalService.show(template);
  }

  updateLocationSiteInfo() {
    this.locationSiteInfoFormSubmit = true;
    if (this.locationSiteInfoForm.valid) {
      this.locationSiteInfo = Object.assign({}, this.locationSiteInfoForm.value);
      this.venueLocationService.updateLocationSiteInfo(this.locationSiteInfo).subscribe(response => {
        this.toasterService.success('Location Site Info has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.getLocationSiteInfo(this.locationAddressID);
      });
    }
  }
  /* #endregion */

  /* #region  Location Images */

  getLocationImages(id) {
    this.venueLocationService.getLocationImages(0, id).subscribe(response => {
      debugger
      this.locationImages = response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  getLocationImagesName() {
    this.settingService.getMultiDiamensionalStuffValues("VenueLocation", "LocationImage").subscribe(response => {
      this.locationImagesName = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  createLocationImageForm() {
    this.uploadLocationImageForm = this.fb.group({
      files: [null, Validators.required],
      areaImageID: ['', Validators.required],
      description: [''],
    });
  }

  uploadImageModal(template: TemplateRef<any>) {
    this.getLocationImagesName();
    this.createLocationImageForm();
    this.modalRef = this.modalService.show(template);
  }

  onSelectImages(files) {
    if (files.length == 0) {
      return;
    }
    else {
      for (let index = 0; index < files.length; index++) {
        this.filesUploaded.push(files[index]);
      }
    }
  }

  createImgPath = (data:any) => {
    debugger
    // let objectURL = 'data:image/png;base64,' + data;
    // let imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    var base64String = data;
    let objectURL = 'data:image/png;base64,' + base64String;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
  saveLocationImages() {
    this.uploadLocationImageFormSubmit = true;
    if (this.uploadLocationImageForm.valid) {
      let formData = new FormData();
      formData.append("areaImageID", this.uploadLocationImageForm.get('areaImageID').value);
      formData.append("areaImageName", this.locationImagesName.find(e => e.id == this.uploadLocationImageForm.get('areaImageID').value).stuffValue);
      formData.append("description", this.uploadLocationImageForm.get("description").value);
      formData.append("locationAddressID", this.locationAddressID);
      formData.append("userID", localStorage.getItem('userID'));
      this.filesUploaded.forEach((f) => formData.append("files", f));
      this.venueLocationService.createLocationImages(formData).subscribe(response => {
        this.toasterService.success('Location Images has been uploaded.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.getLocationImages(this.locationAddressID);
      });
    }
  }

  deleteLocationImage(id) {
    let model: any = {};
    model.id = id;
    model.event = 'IsDeleted';
    model.value = 1;
    model.functionName = 'LocationImages';
    model.userID = +localStorage.getItem('userID');

    this.venueLocationService.updateLocationStatus(model).subscribe(response => {
      this.toasterService.success('Image has been deleted.');
    }, error => {
      console.log(error);
    }, () => {
      this.getLocationImages(this.locationAddressID);
    });
  }

  /* #endregion */

  /* #region  Location Rooms */

  getLocationRooms(id) {
    this.venueLocationService.getLocationRooms(0, id).subscribe(response => {
      this.locationRooms = response.outputObject;
    }, error => {
      console.log(error);
    })
  }

  createLocationRoomForm(data?: any) {
    if (data) {
      this.locationRoomItemForm = this.fb.group({
        id: [data.id ? data.id : ''],
        venueRoomName: [data.venueRoomName ? data.venueRoomName : '', Validators.required],
        isPvtRoom: [data.isPvtRoom ? data.isPvtRoom : false, Validators.required],
        amt: [data.amt ? data.amt : '', Validators.required]
      });
    }
    else {
      this.locationRoomItemForm = this.fb.group({
        venueRoomName: ['', Validators.required],
        isPvtRoom: [false, Validators.required],
        amt: ['', Validators.required]
      });
    }
  }
  addLocationRoom() {
    this.createLocationRoomForm();
    this.modalRef = this.modalService.show(this.addOrUpdateLocationRoom);
  }
  editLocationRoom(id) {
    let data = this.locationRooms.find(e => e.id == id);
    this.createLocationRoomForm(data);
    this.modalRef = this.modalService.show(this.addOrUpdateLocationRoom);
  }

  saveLocationRoom() {
    this.locationRoomFormSubmit = true;
    if (this.locationRoomItemForm.valid) {
      this.locationRoom.locationAddressID = +this.locationAddressID;
      this.locationRoom.userID = +localStorage.getItem('userID');
      this.locationRoom.locationRoomsList.push(this.locationRoomItemForm.value);
      if (this.locationRoomItemForm.get('id')) {
        this.updateLocationRoom();
      }
      else {
        this.createLocationRoom();
      }
    }
  }

  createLocationRoom() {
    this.venueLocationService.createLocationRooms(this.locationRoom).subscribe(response => {
      this.toasterService.success('Location Room has been added.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      this.getLocationRooms(this.locationAddressID);
    });
  }
  updateLocationRoom() {
    this.venueLocationService.updateLocationRooms(this.locationRoom).subscribe(response => {
      this.toasterService.success('Location Room has been updated.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      this.getLocationRooms(this.locationAddressID);
    });
  }

  deleteLocationRoom(id) {
    let model: any = {};
    model.id = id;
    model.event = 'IsDeleted';
    model.value = 1;
    model.functionName = 'LocationRoom';
    model.userID = +localStorage.getItem('userID');

    this.venueLocationService.updateLocationStatus(model).subscribe(response => {
      this.toasterService.success('Room has been deleted.');
    }, error => {
      console.log(error);
    }, () => {
      this.getLocationRooms(this.locationAddressID);
    });
  }
  /* #endregion */

}
