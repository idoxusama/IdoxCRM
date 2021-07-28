import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debug, timeStamp } from 'console';
import { BsModalRef, BsModalService, plLocale } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ExpertSLAService, SLAService, SLATimeManagement } from 'src/app/Models/SLA Models/SLAService';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';

@Component({
  selector: 'app-service-legal-agrement',
  templateUrl: './service-legal-agrement.component.html',
  styleUrls: ['./service-legal-agrement.component.css']
})
export class ServiceLegalAgrementComponent implements OnInit {
  @ViewChild('fixed') fixed: ElementRef;
  @ViewChild('hourly') hourly: ElementRef;
  @ViewChild('perPages') perPages: ElementRef;
  @ViewChild('timeManagement') timeManagement: ElementRef;

  isMeridian = true;
  isDisabled = true;
  myTime = new Date();

  fixedForm: FormGroup;
  fixedFormSubmitted: boolean = false;
  hourlyForm: FormGroup;
  hourlyFormSubmitted: boolean = false;
  perPagesForm: FormGroup;
  perPagesFormSubmitted: boolean = false;
  timeManagementForm:FormGroup;
  timeManagementFormSubmitted:boolean=false;

  slaServices: SLAService[] = [];
  expertSLAServices: ExpertSLAService[] = [];
  expertSLAService: ExpertSLAService = new ExpertSLAService();
  expertSLATimeManagement: SLATimeManagement = new SLATimeManagement();
  estColumns:any[];

  modalRef: BsModalRef;

  serviceName: string;
  serviceId: string;
  paymentType: string;

  constructor(private slaService: SlaService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toasterService: ToastrService) { }

  ngOnInit() {
    this.getService();
  }

  getService() {
    this.slaService.getSLAServices(0).subscribe(response => {
      this.slaServices = response.outputObject;
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
      }, { validators: this.endRangeValidation });
    }
    else {
      this.hourlyForm = this.fb.group({
        startRangeTime: ['', Validators.required],
        endRangeTime: ['', Validators.required],
        payment: ['', Validators.required],
      }, { validators: this.endRangeValidation });
    }
  }
  createPerPagesForm(data?: any) {
    if (data) {
      this.perPagesForm = this.fb.group({
        id: [data.id ? data.id : ''],
        startRangeTime: [data.startRangeTime ? data.startRangeTime : '', Validators.required],
        endRangeTime: [data.endRangeTime ? data.endRangeTime : '', Validators.required],
        payment: [data.payment ? data.payment : '', Validators.required]
      }, { validators: this.endRangeValidation });
    }
    else {
      this.perPagesForm = this.fb.group({
        startRangeTime: ['', Validators.required],
        endRangeTime: ['', Validators.required],
        payment: ['', Validators.required],
      }, { validators: this.endRangeValidation });
    }
  }

  endRangeValidation(group: FormGroup) {
    let startRange = +group.get('startRangeTime').value;
    let endRange = +group.get('endRangeTime').value;
    return endRange < startRange ? { endRangeGreater: true } : null;
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
    this.expertSLAService.expertID = 1;//+localStorage.getItem('expertID');
    this.expertSLAService.userID = +localStorage.getItem('userID');
    this.expertSLAService.paymentType = this.paymentType;

    this.slaService.createExpertServiceSLA(this.expertSLAService).subscribe(response => {
      this.toasterService.success('Service has been added!.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }
  update(expertSLAService) {
    this.expertSLAService = expertSLAService;
    this.expertSLAService.expertServiceID = +this.serviceId;
    this.expertSLAService.slaServiceDescription = this.serviceName;
    this.expertSLAService.expertID = 1;//+localStorage.getItem('expertID');
    this.expertSLAService.userID = +localStorage.getItem('userID');
    this.expertSLAService.paymentType = this.paymentType;

    this.slaService.updateExpertServiceSLA(this.expertSLAService).subscribe(response => {
      this.toasterService.success('Service has been updated!.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }

  getExpertSlaServices(id) {
    this.slaService.getExpertServicesSLA(id).subscribe(response => {
      this.expertSLAServices = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  editExpertService(serviceId, paymentType) {
    let data = this.expertSLAServices.find(e => e.id == serviceId && e.paymentType == paymentType);
    this.serviceId= data.expertServiceID.toLocaleString();
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


  openTimeManageModal(serviceId,serviceName){
    this.serviceName=serviceName;
    this.serviceId=serviceId;

    let data= this.slaServices.find(e=>e.id==serviceId);
    this.estColumns=data.timeManagementInputList;
    this.timeManagementForm=this.fb.group({});
    data.timeManagementInputList.forEach(x=>{
      this.timeManagementForm.addControl(x.slaTimeManagementInput,new FormControl('',Validators.required));
    });

    this.modalRef= this.modalService.show(this.timeManagement);
  }

  saveServiceTime(){
    this.timeManagementFormSubmitted=true;
    if(this.timeManagementForm.valid){
      this.expertSLATimeManagement=Object.assign({},this.timeManagementForm.value);
      if(this.timeManagementForm.get('id')){
        this.updateServiceTime(this.expertSLATimeManagement);
      }
      else{
        this.submitServiceTime(this.expertSLATimeManagement);
      }
    }
  }
  submitServiceTime(expertSLATimeManagement){
      //Time Management
      this.expertSLATimeManagement.expertServiceID = +this.serviceId;
      this.expertSLATimeManagement.expertServiceName = this.serviceName;
      this.expertSLATimeManagement.userID = +localStorage.getItem('userID');

      this.slaService.createExpertSLATimeManagement(this.expertSLATimeManagement).subscribe(response => {
        this.toasterService.success('Time has been added!.');
      }, error => {
        console.log(error);
      },()=>{this.ngOnInit();})
  }
  updateServiceTime(expertSLATimeManagement){
    this.expertSLATimeManagement.expertServiceID = +this.serviceId;
    this.expertSLATimeManagement.expertServiceName = this.serviceName;
    this.expertSLATimeManagement.userID = +localStorage.getItem('userID');

    this.slaService.createExpertSLATimeManagement(this.expertSLATimeManagement).subscribe(response => {
      this.toasterService.success('Time has been updated!.');
    }, error => {
      console.log(error);
    },()=>{this.ngOnInit();})
  }
}
