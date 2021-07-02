import { MapsAPILoader, MouseEvent } from '@agm/core';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ClinicPlan } from 'src/app/Models/Clinics Model/AddClinicPlan';
import { ExpertBasicInfo } from 'src/app/Models/Experts Model/User';
import { ExpertClinicSlotPlan } from 'src/app/Models/Medco CMS Model/ExpertClinicSlotPlan';
import { OutstandingAppointments } from 'src/app/Models/Medco CMS Model/OutstandingAppointment';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { OutstandingAppointmentsService } from 'src/app/Services/Medco CMS Services/outstanding-appointments.service';

@Component({
  selector: 'app-outstanding-appointment-schedual',
  templateUrl: './outstanding-appointment-schedual.component.html',
  styleUrls: ['./outstanding-appointment-schedual.component.css']
})
export class OutstandingAppointmentSchedualComponent implements OnInit {

  /* #region  Fields */
  @ViewChild('templateNearestLocation') templateNearestLocation: ElementRef;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  appointmentID: string;
  outstandingAppointments: OutstandingAppointments;
  expertPersonalInfo: ExpertBasicInfo;
  expertClinicPlan: ClinicPlan[] = [];
  expertNearestClininPlans: ClinicPlan[] = [];

  modalRef: BsModalRef;

  bookAppointmentForm: FormGroup;
  bookAppointmentSubmit: boolean = false;
  expertClinicSlotPlan: ExpertClinicSlotPlan = new ExpertClinicSlotPlan();

  minuteStep: number = 1;
  isMeridian = false;
  showSpinners = true;

  showMapForNearestLocation: boolean = false;
  appointmentTiming: boolean = false;

  appointmentCheckOutTime: Date;
  totalAssessmentTime: Date;
  /* #endregion */

  constructor(private outstandingAppoinmentService: OutstandingAppointmentsService,
    private expertUserService: ExpertuserService,
    private toasterService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }
  ngOnInit() {
    this.createBookAppointmentForm();
    this.route.queryParams.subscribe(param => {
      this.appointmentID = param['id'];
    });

    if (this.appointmentID) {
      this.getOutstandingAppointments(this.appointmentID);
    }
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
    this.getAddress(this.latitude, this.longitude);

    this.getNearestLocation(this.templateNearestLocation);
  }

  getAddress(latitude, longitude): void | string {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.bookAppointmentForm.get('mapAddress').setValue(this.address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  /* #endregion */

  /* #region  Prepare form for book appointment */

  createBookAppointmentForm() {
    this.bookAppointmentForm = this.fb.group({
      expertID: ['', Validators.required],
      instructionID: ['', Validators.required],
      expertClinicPlanID: ['', Validators.required],
      slotStartTime: ['', Validators.required],
      slotEndTime: ['', Validators.required],
      slotUsrVisibilitySr: [0],
      slotAdminVisibilitySr: [0],
      slotGroupID: [0],
      slotDate: ['', Validators.required],
      isBooked: [true, Validators.required],
      state: ['appointmentscheduled'],
      mapAddress: ['']
    });
  }

  getOutstandingAppointments(id) {
    this.outstandingAppoinmentService.getOutstandingAppointments(id).subscribe(response => {
      debugger
      this.outstandingAppointments = response.outputObject ? response.outputObject.pop() : null;
      if (this.outstandingAppointments) {

        this.getExpert(this.outstandingAppointments.expertID);
        this.getExpertClinicPlan(this.outstandingAppointments.expertID);

        this.bookAppointmentForm.get('expertID').setValue(this.outstandingAppointments.expertID);
        this.bookAppointmentForm.get('instructionID').setValue(this.appointmentID);
      }
    }, error => {
      console.log(error);
    });
  }
  getExpert(id) {
    this.expertUserService.getExpertProfileInfo("Expert", id, "", "completedprofile").subscribe(response => {
      this.expertPersonalInfo = response.outputObject ? response.outputObject.pop() : null;
    }, error => {
      console.log(error);
    });
  }

  getNearestLocation(template) {
    this.outstandingAppoinmentService.getExpertNearestClinicPlan(+this.latitude, +this.longitude).subscribe(response => {
      this.expertNearestClininPlans = response.outputObject;
      this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }, error => {
      console.log(error);
    });
  }

  getExpertClinicPlan(expertID) {
    this.outstandingAppoinmentService.getExpertClinicPlan(0, expertID, 0).subscribe(response => {
      this.expertClinicPlan = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  bindNearestLocation(locationAddressID) {
    var location = this.expertNearestClininPlans.find(e => e.locationAddressID == locationAddressID);
    this.expertClinicPlan.length = 0;
    this.expertClinicPlan.push(location);
    this.bookAppointmentForm.get('expertClinicPlanID').setValue(location.id);
    this.appointmentTiming = true;
    this.modalRef.hide();
  }

  showMap() {
    this.showMapForNearestLocation = true;
    this.loadPlaceAutoComplete();
  }

  changeStartTime(startTime) {
    debugger
    var date = this.convertTimeStringToDate(startTime);
    let assessmentTime = +this.expertPersonalInfo.assessmentTime.match(/\d+/)[0];
    let date1 = date.getTime() + assessmentTime * 60000;
    this.appointmentCheckOutTime = new Date(date1);

    this.bookAppointmentForm.get('slotEndTime').setValue(this.appointmentCheckOutTime);
  }
  convertTimeStringToDate(date: string): Date {
    let splitTime = date.split(':');
    let dateObject = new Date(null, null, null, +splitTime[0], +splitTime[1]);

    return dateObject;
  }

  /* #endregion */

  /* #region  Book Appointment */

  async checkAppointmentReservation(clinicPlanId, slotDate, slotSTime, slotETime) {
    let result;
    let model: any = {
      expertClinicPlanID: clinicPlanId,
      slotDate: slotDate,
      slotStartTime: slotSTime,
      slotEndTime: slotETime
    };
    let response = await this.outstandingAppoinmentService.isAppointmentReserve(model).toPromise();
    if (response) {
      result = false;
    }
    else {
      result = true;
    }
    return result;
  }

  async saveBookedAppointment() {
    this.bookAppointmentSubmit = true;
    if (this.bookAppointmentForm.valid) {
      this.expertClinicSlotPlan = Object.assign({}, this.bookAppointmentForm.value);
      this.expertClinicSlotPlan.slotStartTime = this.convertTimeStringToDate(this.bookAppointmentForm.get('slotStartTime').value)

      //check if reservation already booked.
      let result = await this.checkAppointmentReservation(this.expertClinicSlotPlan.expertClinicPlanID,
        this.expertClinicSlotPlan.slotDate, this.expertClinicSlotPlan.slotStartTime, this.expertClinicSlotPlan.slotEndTime);

      if (result) {
        this.outstandingAppoinmentService.createExpertClinicSlotPlan(this.expertClinicSlotPlan).subscribe(response => {
          this.toasterService.success('Appointment booked successfully.')
        }, error => {
          console.log(error);
        }, () => {
          this.ngOnInit();
        });
      }
      else {
        this.toasterService.warning('This slot already booked.');
      }
    }
  }

  /* #endregion */
}
