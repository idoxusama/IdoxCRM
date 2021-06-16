import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debug, timeStamp } from 'console';
import * as moment from 'moment';
import { BsModalRef, BsModalService, plLocale } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ExpertSLAService, SLAService, SLATimeManagement } from 'src/app/Models/SLA Models/SLAService';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild('fixed') fixed: ElementRef;
  @ViewChild('hourly') hourly: ElementRef;
  @ViewChild('perPages') perPages: ElementRef;
  @ViewChild('timeManagement') timeManagement: ElementRef;

  isMeridian = true;
  isDisabled = true;
  myTime = new Date();
  showMin: boolean = true;
  showSec: boolean = true;

  fixedForm: FormGroup;
  fixedFormSubmitted: boolean = false;

  hourlyForm: FormGroup;
  hourlyFormSubmitted: boolean = false;
  totalHourlyTime: string;

  perPagesForm: FormGroup;
  perPagesFormSubmitted: boolean = false;

  timeManagementForm: FormGroup;
  timeManagementFormSubmitted: boolean = false;

  slaServices: SLAService[] = [];
  expertSLAServices: ExpertSLAService[] = [];
  expertSLAService: ExpertSLAService = new ExpertSLAService();
  expertSLATimeManagement: SLATimeManagement = new SLATimeManagement();
  getExpertSLATime: SLATimeManagement = new SLATimeManagement();
  estColumns: any[];

  modalRef: BsModalRef;

  serviceName: string;
  serviceId: string;
  paymentType: string;

  expertID:string;

  constructor(private slaService: SlaService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toasterService: ToastrService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      this.expertID=params.get('id');
    })

    this.getService();
    this.getExpertSlaServices(1);
  }

  getService() {
    this.slaService.getSLAServices(0).subscribe(response => {
      this.slaServices = response.outputObject;
      this.slaServices.map(x => { x.paymentTypesList.map(x => x.isShown = true) });
    }, error => {
      console.log(error);
    });
  }

  createFixedForm(data?: any) {
    if (data) {
      this.fixedForm = this.fb.group({
        id: [data.id ? data.id : ''],
        payment: [data.payment ? data.payment : '', Validators.required]
      });
    }
    else {
      this.fixedForm = this.fb.group({
        payment: ['', Validators.required],
      });
    }
  }
  createHourlyForm(data?: any) {
    if (data) {
      this.hourlyForm = this.fb.group({
        id: [data.id ? data.id : ''],
        startRangeTime: [data.startRangeTime ? data.startRangeTime : '', Validators.required],
        endRangeTime: [data.endRangeTime ? data.endRangeTime : '', Validators.required],
        payment: [data.payment ? data.payment : '', Validators.required]
      });
    }
    else {
      this.hourlyForm = this.fb.group({
        startRangeTime: ['', Validators.required],
        endRangeTime: ['', Validators.required],
        payment: ['', Validators.required],
      });
    }
  }
  createPerPagesForm(data?: any) {
    if (data) {
      this.perPagesForm = this.fb.group({
        id: [data.id ? data.id : ''],
        startRangeTime: [data.startRangeTime ? data.startRangeTime : '', Validators.required],
        endRangeTime: [data.endRangeTime ? data.endRangeTime : '', Validators.required],
        payment: [data.payment ? data.payment : '', Validators.required]
      });
    }
    else {
      this.perPagesForm = this.fb.group({
        startRangeTime: ['', Validators.required],
        endRangeTime: ['', Validators.required],
        payment: ['', Validators.required],
      });
    }
  }
 
  openModal(paymentType, serviceId, serviceName) {
    
    if (paymentType == 'Fix') {
      this.createFixedForm();
      this.modalRef = this.modalService.show(this.fixed);

      this.serviceId = serviceId;
      this.serviceName = serviceName;
      this.paymentType = paymentType;
    }
    else if (paymentType == 'Hourly') {
      this.createHourlyForm();
      this.modalRef = this.modalService.show(this.hourly);

      this.serviceId = serviceId;
      this.serviceName = serviceName;
      this.paymentType = paymentType;
    }
    else if (paymentType == 'PerPages') {
      this.createPerPagesForm();
      this.modalRef = this.modalService.show(this.perPages);

      this.serviceId = serviceId;
      this.serviceName = serviceName;
      this.paymentType = paymentType;
    }
  }

  submitFixedForm() {
    this.fixedFormSubmitted = true;
    if (this.fixedForm.valid) {
      this.expertSLAService = Object.assign({}, this.fixedForm.value);
      if (this.fixedForm.get('id')) {
        this.update(this.expertSLAService);
      }
      else {
        this.submit(this.expertSLAService);
      }
    }
  }

  submitHourlyForm() {
    this.hourlyFormSubmitted = true;
    if (this.hourlyForm.valid) {
      this.expertSLAService = Object.assign({}, this.hourlyForm.value);
      if (this.hourlyForm.get('id')) {
        this.update(this.expertSLAService);
      }
      else {
        this.submit(this.expertSLAService);
      }
    }
  }

  submitPerPagesForm() {
    this.perPagesFormSubmitted = true;
    if (this.perPagesForm.valid) {
      this.expertSLAService = Object.assign({}, this.perPagesForm.value);

      if (this.perPagesForm.get('id')) {
        this.update(this.expertSLAService);
      }
      else {
        this.submit(this.expertSLAService);
      }
    }
  }

  submit(expertSLAService) {
    this.expertSLAService = expertSLAService
    this.expertSLAService.expertServiceID = +this.serviceId;
    this.expertSLAService.slaServiceDescription = this.serviceName;
    this.expertSLAService.expertID = +this.expertID;//+localStorage.getItem('expertID');
    this.expertSLAService.userID = +localStorage.getItem('userID');
    this.expertSLAService.paymentType = this.paymentType;

    this.slaService.createExpertServiceSLA(this.expertSLAService).subscribe(response => {
      this.toasterService.success('Service has been added!.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      this.getExpertSlaServices(this.serviceId);
    });
  }
  update(expertSLAService) {
    
    this.expertSLAService = expertSLAService;
    this.expertSLAService.expertServiceID = +this.serviceId;
    this.expertSLAService.slaServiceDescription = this.serviceName;
    this.expertSLAService.expertID =+this.expertID;//+localStorage.getItem('expertID');
    this.expertSLAService.userID = +localStorage.getItem('userID');
    this.expertSLAService.paymentType = this.paymentType;

    this.slaService.updateExpertServiceSLA(this.expertSLAService).subscribe(response => {
      this.toasterService.success('Service has been updated!.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      this.getExpertSlaServices(this.serviceId);
    });
  }

  getExpertSlaServices(id) {
    this.slaService.getExpertServicesSLA(id).subscribe(response => {
      this.expertSLAServices = response.outputObject;
      if (this.expertSLAServices) {
        let paymentType = this.expertSLAServices[0].paymentType;
        if (paymentType.trim() == 'Fix') {
          this.slaServices.map(e => {
            e.paymentTypesList.map(x => {
              x.isShown = false;
            });
          });
        } else {
          this.slaServices.map(e => {
            e.paymentTypesList.map(x => {
              x.isShown = x.paymentType == paymentType.trim() ? true : false;
            });
          });
        }
      }
      else {
        this.slaServices.map(e => {
          e.paymentTypesList.map(x => {
            x.isShown = true;
          });
        });
      }
    }, error => {
      console.log(error);
    });


    //get services estimated time
    this.slaService.getExpertSLATimeManagement(0, id).subscribe(response => {
      
      this.getExpertSLATime = response.outputObject ? response.outputObject.pop() : response.outputObject;
      console.log(this.getExpertSLATime);
    }, error => {
      console.log(error);
    })
  }

  editExpertService(serviceId, paymentType) {
    
    let data = this.expertSLAServices.find(e => e.id == serviceId && e.paymentType == paymentType);
    this.serviceId = data.expertServiceID.toLocaleString();
    this.serviceName = data.slaServiceDescription;
    if (paymentType.trim() == 'Fix') {
      this.createFixedForm(data);
      this.modalRef = this.modalService.show(this.fixed);
    }
    else if (paymentType.trim() == 'Hourly') {
      this.createHourlyForm(data);
      this.modalRef = this.modalService.show(this.hourly);
    }
    else if (paymentType.trim() == 'PerPages') {
      this.createPerPagesForm(data);
      this.modalRef = this.modalService.show(this.perPages);
    }
  }

  updateServiceStatus(id, statusValue, serviceId) {
    let model: any = {};
    model.id = id;
    model.event = 'Status';
    model.value = statusValue;
    model.functionName = 'ExpertServiceSLA';
    model.userID = localStorage.getItem('userID');

    this.slaService.updateExpertSLAStaus(model).subscribe(respone => {
      this.toasterService.success('Status update successfully');
    }, error => {
      console.log(error);
    }, () => {
      this.getExpertSlaServices(serviceId);
    });
  }

  deleteExpertService(id, statusValue, serviceId) {
    let model: any = {};
    model.id = id;
    model.event = 'IsDeleted';
    model.value = statusValue;
    model.functionName = 'ExpertServiceSLA';
    model.userID = localStorage.getItem('userID');

    this.slaService.updateExpertSLAStaus(model).subscribe(respone => {
      this.toasterService.success('Status update successfully');
    }, error => {
      console.log(error);
    }, () => {
      this.getExpertSlaServices(serviceId);
    });
  }


  openTimeManageModal(serviceId, serviceName) {
    this.serviceName = serviceName;
    this.serviceId = serviceId;

    let data = this.slaServices.find(e => e.id == serviceId);
    this.estColumns = data.timeManagementInputList;
    this.timeManagementForm = this.fb.group({});
    data.timeManagementInputList.forEach(x => {
      this.timeManagementForm.addControl(x.slaTimeManagementInput, new FormControl('', Validators.required));
    });

    this.modalRef = this.modalService.show(this.timeManagement);
  }

  editServiceEstTime(serviceId, serviceName) {
    
    this.serviceName = serviceName;
    this.serviceId = serviceId;

    let data = this.slaServices.find(e => e.id == serviceId);
    this.estColumns = data.timeManagementInputList;
    this.timeManagementForm = this.fb.group({
      id: [this.getExpertSLATime.id ? this.getExpertSLATime.id : '']
    });
    data.timeManagementInputList.forEach(x => {
      this.timeManagementForm.addControl(x.slaTimeManagementInput,
        new FormControl(x.slaTimeManagementInput == 'EstTime' ? this.getExpertSLATime.estTime :
          this.getExpertSLATime.estReturnTime, Validators.required));
    });

    this.modalRef = this.modalService.show(this.timeManagement);
  }

  saveServiceTime() {
    
    this.timeManagementFormSubmitted = true;
    if (this.timeManagementForm.valid) {
      this.expertSLATimeManagement = Object.assign({}, this.timeManagementForm.value);
      if (this.timeManagementForm.get('id')) {
        this.updateServiceTime();
      }
      else {
        this.submitServiceTime();
      }
    }
  }
  submitServiceTime() {
    //Time Management
    this.expertSLATimeManagement.serviceSLAID = +this.serviceId;
    this.expertSLATimeManagement.slaServices = this.serviceName;
    this.expertSLATimeManagement.userID = +localStorage.getItem('userID');

    this.slaService.createExpertSLATimeManagement(this.expertSLATimeManagement).subscribe(response => {
      this.toasterService.success('Time has been added!.');
    }, error => {
      console.log(error);
    }, () => { this.getExpertSlaServices(this.expertSLATimeManagement.serviceSLAID) })
  }
  updateServiceTime() {
    this.expertSLATimeManagement.serviceSLAID = +this.serviceId;
    this.expertSLATimeManagement.slaServices = this.serviceName;
    this.expertSLATimeManagement.userID = +localStorage.getItem('userID');

    this.slaService.updateExpertSLATimeManagement(this.expertSLATimeManagement).subscribe(response => {
      this.toasterService.success('Time has been updated!.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => { this.getExpertSlaServices(this.expertSLATimeManagement.serviceSLAID) })
  }
}
