import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Availability } from 'src/app/Models/SLA Models/availability';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})

export class AvailabilityComponent implements OnInit {
  @ViewChild('addExpertAvailybility') addExpertAvailybility: ElementRef;

  isMeridian = true;
  isDisabled = true;
  myTime = new Date();
  showMin: boolean = true;
  showSec: boolean = true;
  minuteStep = 1;


  availabilityForm: FormGroup;
  availabilityFormSubmitted: boolean = false;
  totalAvailabilityTime: string;

  DAYS: string[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  expertAvailabilityList: Availability[] = [];
  expertAvailability: Availability = new Availability();

  modalRef: BsModalRef;

  expertID: string;

  constructor(private slaService: SlaService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private toasterService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.expertID = params['id'];
    })
    if(this.expertID){
      this.getExpertAvailability();
    }
  }


  createExpertAvailabilityForm(data?: any) {
    if (data) {
      this.availabilityForm = this.fb.group({
        id: [data.id ? data.id : ''],
        days: [data.days ? data.days : '', Validators.required],
        startTime: [data.startTime ? new Date(data.startTime) : '', Validators.required],
        endTime: [data.endTime ? new Date(data.endTime) : '', Validators.required],
        startLunchTime: [data.startLunchTime ? new Date(data.startLunchTime) : ''],
        endLunchTime: [data.endLunchTime ? new Date(data.endLunchTime) : ''],
      }, { validators: this.endRangeValidation });
    }
    else {
      this.availabilityForm = this.fb.group({
        days: ['', Validators.required],
        startTime: [new Date(), Validators.required],
        endTime: [new Date(), Validators.required],
        startLunchTime: [null],
        endLunchTime: [null],
      }, { validators: this.endRangeValidation });
    }
  }
  endRangeValidation(group: FormGroup) {
    let startRange = +group.get('startTime').value;
    let endRange = +group.get('endTime').value;
    return endRange < startRange ? { endRangeGreater: true } : null;
  }
  openExpertAvailabilityModal(template: TemplateRef<any>) {
    this.createExpertAvailabilityForm();
    this.modalRef = this.modalService.show(template);
  }

  getExpertAvailability() {
    this.slaService.getExpertAvailability(0, this.expertID).subscribe(response => {
      this.expertAvailabilityList = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  saveExpertAvailability() {
    this.availabilityFormSubmitted = true;
    if (this.availabilityForm.valid) {
      this.expertAvailability = Object.assign({}, this.availabilityForm.value);
      if (this.availabilityForm.get('id')) {
        this.update();
      }
      else {
        this.submit();
      }
    }
  }

  editExpertAvailability(id) {
    this.slaService.getExpertAvailability(id,this.expertID).subscribe(response=>{
      let data= response.outputObject?response.outputObject.pop():null;
      this.createExpertAvailabilityForm(data);
      this.modalRef = this.modalService.show(this.addExpertAvailybility);
    });
  }

  submit() {
    let submit = true;
    if (this.checkStartEndTime(this.expertAvailability.days)) {
      this.toasterService.warning('You have already book this time slot.');
      submit = false;
    }
    if (!this.checkLunchTime()) {
      this.toasterService.warning('Lunch time in between start and end time.');
      submit = false;
    }

    if (submit) {
      this.expertAvailability.userID = +localStorage.getItem('userID');
      this.expertAvailability.expertID = +this.expertID;
      this.expertAvailability.totalTimeDuration = this.totalAvailabilityTime;
      this.slaService.createExpertAvailability(this.expertAvailability).subscribe(response => {
        this.toasterService.success('Expert Availability has been added.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.getExpertAvailability();
      });
    }
  }

  update() {
    let update = true;

    if (this.checkStartEndTime(this.expertAvailability.days)) {
      this.toasterService.warning('You have already book this time slot.');
      update = false;
    }
    if (!this.checkLunchTime()) {
      this.toasterService.warning('Lunch time must be in between start and end time slot.');
      update = false;
    }

    if (update) {
      this.expertAvailability.userID = +localStorage.getItem('userID');
      this.expertAvailability.expertID = +this.expertID;
      this.expertAvailability.totalTimeDuration = this.totalAvailabilityTime;
      this.slaService.updateExpertAvailability(this.expertAvailability).subscribe(response => {
        this.toasterService.success('Expert Availability has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.getExpertAvailability();
      });
    }
  }

  updateServiceStatus(id, statusName, statusValue, functionName) {
    let model: any = {};
    model.id = id;
    model.event = statusName;
    model.value = statusValue;
    model.functionName = functionName;
    model.userID = localStorage.getItem('userID');

    this.slaService.updateExpertSLAStaus(model).subscribe(respone => {
      this.toasterService.success('Status update successfully');
    }, error => {
      console.log(error);
    }, () => {
      this.getExpertAvailability();
    });
  }

  calculateTotalTime() {
    let time1 = this.availabilityForm.get('startTime').value;
    let time2 = this.availabilityForm.get('endTime').value;
  }

  convertHHMMToDate(hour, minute): Date {
    return new Date(null, null, null, hour, minute, null);
  }

  checkStartEndTime(day): boolean {
    let ifNotExist = false;

    let startTime = this.availabilityForm.get('startTime').value;
    let endTime = this.availabilityForm.get('endTime').value;

    if (this.expertAvailabilityList) {

      let filterSlots = this.expertAvailabilityList.filter(e=>e.days==day);
      if(filterSlots){
        for (let i = 0; i < filterSlots.length; i++) {
          let sTime = new Date(filterSlots[i].startTime);
          let eTime = new Date(filterSlots[i].endTime);
          if(startTime.getTime()>=sTime.getTime() && endTime.getTime()<=eTime.getTime() || 
              startTime.getTime()>=sTime.getTime() && endTime.getTime()<=eTime.getTime() || 
              startTime.getTime()<=sTime.getTime() && endTime.getTime()>=sTime.getTime()) {
            ifNotExist=true;
            break;
          }
        }
      }
      else{
        ifNotExist=false;
      }
    }
    else {
      ifNotExist = false;
    }
    return ifNotExist;
  }

  checkLunchTime(): boolean {
    let ifNotExist = false;

    let startTime = this.availabilityForm.get('startTime').value;
    let endTime = this.availabilityForm.get('endTime').value;

    let startLunchTime = this.availabilityForm.get('startLunchTime').value;
    let endLunchTime = this.availabilityForm.get('endLunchTime').value;

    if (startLunchTime && endLunchTime) {

      if (startLunchTime >= startTime && endLunchTime <= endTime && startLunchTime < endTime
        && endLunchTime > startTime && startLunchTime != endLunchTime) {
        ifNotExist = true;
      }
    }
    else {
      ifNotExist = true;
    }
    return ifNotExist;
  }
}
