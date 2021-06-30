import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService, TypeaheadOptions } from 'ngx-bootstrap';
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

  todayClinics: TodayClinics[] = [];
  liveClinics: TodayClinics[] = [];
  previousClinics: TodayClinics[] = [];
  upComingClinics: TodayClinics[] = [];
  experts: Array<Select2OptionData>;

  expertID: string;

  modalRef:BsModalRef;

  constructor(private todayClinicService: TodayClinicService,
    private expertUserService: ExpertuserService,
    private modalService:BsModalService) { }


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
      debugger
      if (response.outputObject) {
        this.todayClinics = response.outputObject;
        this.mapTimeSlot();
      }
      else{
        this.liveClinics.length=0;
        this.upComingClinics.length=0;
        this.previousClinics.length=0;
      }
    }, error => {
      console.log(error);
    });
  }

  mapTimeSlot() {
    this.todayClinics.map(x => {

      let splitTimeSlot = x.timeSlot.split('-');

      let splitFirst = splitTimeSlot[0].split(':');
      x.startTime = new Date(null, null, null, +splitFirst[0], +splitFirst[1]);

      let splitSecond = splitTimeSlot[1].split(':');
      x.endTime = new Date(null, null, null, +splitSecond[0], +splitSecond[1]);

    });

    let currentTime = new Date().getTime();

    this.liveClinics = this.todayClinics.filter(e=>currentTime>=e.startTime.getTime() && currentTime<=e.endTime.getTime());
    this.upComingClinics = this.todayClinics.filter(e=>currentTime>e.endTime.getTime());
    this.previousClinics = this.todayClinics.filter(e=>currentTime<e.startTime.getTime());
  }

  showUpdateStatusModel(template){
    this.modalRef = this.modalService.show(template);
  }
}
