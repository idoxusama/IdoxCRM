import { Component, OnInit } from '@angular/core';
import { shiftInitState } from '@angular/core/src/view';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService, TypeaheadOptions } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TodayClinics } from 'src/app/Models/Clinics Model/TodayClinics';
import { TodayClinicService } from 'src/app/Services/Clinics Services/today-clinic.service';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';

@Component({
  selector: 'app-clinics-todayclinics',
  templateUrl: './clinics-todayclinics.component.html',
  styleUrls: ['./clinics-todayclinics.component.css']
})
export class ClinicsTodayclinicsComponent implements OnInit {
  liveCurrentPage: number = 1;
  upComingCurrentPage: number = 1;
  previousCurrentPage: number = 1;

  appSchedualID: number;

  todayClinics: TodayClinics[] = [];

  liveClinics: TodayClinics[] = [];
  filterLClinics: TodayClinics[] = [];

  previousClinics: TodayClinics[] = [];
  filterPClinics: TodayClinics[] = [];

  upComingClinics: TodayClinics[] = [];
  filterUCClinics: TodayClinics[] = [];

  experts: Array<Select2OptionData>;

  expertID: number;

  modalRef: BsModalRef;

  appointmentUpdateStatusFrom: FormGroup
  updateStatusSubmitted: boolean = false;

  constructor(private todayClinicService: TodayClinicService,
    private expertUserService: ExpertuserService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toasterSerivce: ToastrService) { }


  ngOnInit() {
    this.getExperts();
  }

  getExperts() {
    this.expertUserService.getExpertProfileInfo("Expert", 0, "", "completedprofile").subscribe(response => {
      this.experts = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.experts.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.firstName
        };
        this.experts.push(object);
      });
    }, error => {
      console.log(error);
    });
  }

  getAllTodayAppoinments(event: any) {
    this.expertID = event.value == "" ? 0 : event.value;
    this.todayClinicService.getAllTodayAppointments(this.expertID).subscribe(response => {
      if (response.outputObject) {
        this.todayClinics = response.outputObject;
        this.mapTimeSlot();
      }
      else {
        this.liveClinics.length = 0;
        this.upComingClinics.length = 0;
        this.previousClinics.length = 0;
      }
    }, error => {
      console.log(error);
    });
  }

  mapTimeSlot() {
    this.todayClinics.map(x => {
      let splitSlotDate = x.slotDate.split('-'); // split slot date by - to get year, month , date number

      let splitTimeSlot = x.timeSlot.split('-'); // split time slot by - to get two times

      let splitFirst = splitTimeSlot[0].split(':'); // split time by : to get hour and minute
      x.startTime = new Date(+splitSlotDate[0], +splitSlotDate[1] - 1, +splitSlotDate[2], +splitFirst[0], +splitFirst[1]);

      let splitSecond = splitTimeSlot[1].split(':'); // split time by : to get hour and minute
      x.endTime = new Date(+splitSlotDate[0], +splitSlotDate[1] - 1, +splitSlotDate[2], +splitSecond[0], +splitSecond[1]);
    });
    let currentTime = new Date().getTime();

    //get live clinics
    this.liveClinics = this.todayClinics.filter(e => currentTime >= e.startTime.getTime() && currentTime <= e.endTime.getTime());
    this.filterLClinics = this.liveClinics;

    //get up coming clinics
    this.upComingClinics = this.todayClinics.filter(e => e.startTime.getTime() > currentTime && e.endTime.getTime() > currentTime);
    this.filterUCClinics = this.upComingClinics;

    //get previous clinics
    this.previousClinics = this.todayClinics.filter(e => e.startTime.getTime() < currentTime && e.endTime.getTime() < currentTime);
    this.filterPClinics = this.previousClinics;
  }

  filterLiveClinics(value: string) {
    this.filterLClinics = value != "" ? this.liveClinics.filter(e => e.expert.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.clientRefNo.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.instructionCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.referrerCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.client.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : this.liveClinics;
  }
  filterUpComingClinics(value: string) {
    this.filterUCClinics = value != "" ? this.upComingClinics.filter(e => e.expert.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.clientRefNo.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.instructionCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.referrerCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.client.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : this.upComingClinics;
  }
  filterPreviousClinics(value: string) {
    this.filterPClinics = value != "" ? this.previousClinics.filter(e => e.expert.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.clientRefNo.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.instructionCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.referrerCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.client.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      e.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    ) : this.previousClinics;
  }


  createAppointmentStatusForm() {
    this.appointmentUpdateStatusFrom = this.fb.group({
      state: ['', Validators.required],
      rating:['']
    });
  }

  showUpdateStatusModel(template, appointmentId) {
    this.createAppointmentStatusForm();
    this.appSchedualID = appointmentId;
    this.modalRef = this.modalService.show(template);
  }

  countStar(star) {
    debugger
    this.appointmentUpdateStatusFrom.get('rating').setValue(star);
  }

  updateAppointmentStatus() {
    this.updateStatusSubmitted = true;
    if (this.appointmentUpdateStatusFrom.valid) {
      this.todayClinicService.updateClinicState(this.appSchedualID, this.appointmentUpdateStatusFrom.get('state').value).subscribe(response => {
        this.toasterSerivce.success('Status has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      },()=>{
        let event:any={};
        event.value=0;
        this.getAllTodayAppoinments(event);
      });
    }
  }
}
