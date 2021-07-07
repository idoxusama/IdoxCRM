import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, plLocale } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AppointmentCancelllation } from 'src/app/Models/SLA Models/appointmentCancellation';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';

@Component({
  selector: 'app-appointment-cancellation',
  templateUrl: './appointment-cancellation.component.html',
  styleUrls: ['./appointment-cancellation.component.scss']
})
export class AppointmentCancellationComponent implements OnInit {
  @ViewChild('addAppointmentCacenllation') addAppointmentCacenllation:ElementRef;

  appointmentCancellationList: AppointmentCancelllation[]=[];
  appointmentCancellation: AppointmentCancelllation=new AppointmentCancelllation();

  appointmentCancellationForm:FormGroup;
  appointmentSubmitted:boolean=false;

  modalRef:BsModalRef;

  expertID:string;


  constructor(private slaService: SlaService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private toasterService: ToastrService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.expertID= params['id'];
    })
    if(this.expertID){
      this.getAppointmentCancellation();
    }
  }

  getAppointmentCancellation(){
    this.slaService.getAppointmentCancellation(0,this.expertID,1,1).subscribe(response=>{
      this.appointmentCancellationList= response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  createAppointmentCancellationForm(data?:any){
    if(data){
      this.appointmentCancellationForm= this.fb.group({
        id:[data.id?data.id:''],
        noOfCancelAppointment:[data.noOfCancelAppointment?data.noOfCancelAppointment:'',Validators.required],
        rangeBy:[data.rangeBy?data.rangeBy:'',Validators.required],
        startRange:[data.startRange?data.startRange:'',Validators.required],
        endRange:[data.endRange?data.endRange:'',Validators.required],
        chargeAmt:[data.chargeAmt?data.chargeAmt:'',Validators.required],
        chargePercent:[data.chargePercent?data.chargePercent:'',Validators.required],
      },{validators:this.endRangeValidation});
    }
    else{
      this.appointmentCancellationForm= this.fb.group({
        noOfCancelAppointment:['',Validators.required],
        rangeBy:['',Validators.required],
        startRange:['',Validators.required],
        endRange:['',Validators.required],
        chargeAmt:['',Validators.required],
        chargePercent:['',Validators.required],
      },{validators:this.endRangeValidation});
    }   
  }
  endRangeValidation(group: FormGroup) {
    let startRange = +group.get('startRange').value;
    let endRange = +group.get('endRange').value;
    return endRange < startRange ? { endRangeGreater: true } : null;
  }

  openAppointmentCancellationModel(template:TemplateRef<any>){
    this.createAppointmentCancellationForm();
    this.modalRef= this.modalService.show(template);
  }

  saveAppointmentCancellation(){
    this.appointmentSubmitted=true;
    if(this.appointmentCancellationForm.valid){
      this.appointmentCancellation= Object.assign({},this.appointmentCancellationForm.value);
      if(this.appointmentCancellationForm.get('id')){
        this.update();
      }
      else{
        this.submit();
      }
    }
  }

  editAppointmentCancellation(id){
    let data=this.appointmentCancellationList.find(e=>e.id==id);
    this.createAppointmentCancellationForm(data);
    this.modalRef=this.modalService.show(this.addAppointmentCacenllation);
  }

  submit(){
    this.appointmentCancellation.expertID=+this.expertID;
    this.appointmentCancellation.userID=+localStorage.getItem('userID');
    this.appointmentCancellation.refferelID=1;
    this.appointmentCancellation.expertClinicSlotPlanID=1;
    this.slaService.createAppointmentCancellation(this.appointmentCancellation).subscribe(response=>{
      this.toasterService.success('Appointment Cancellation has been added.');
      this.modalRef.hide();
    },error=>{
      console.log(error);
    },()=>{
      this.getAppointmentCancellation();
    });
  }
  update(){
    this.appointmentCancellation.expertID=+this.expertID;
    this.appointmentCancellation.userID=+localStorage.getItem('userID');
    this.appointmentCancellation.refferelID=1;
    this.appointmentCancellation.expertClinicSlotPlanID=1;
    this.slaService.updateAppointmentCancellation(this.appointmentCancellation).subscribe(response=>{
      this.toasterService.success('Appointment Cancellation has been updated.');
      this.modalRef.hide();
    },error=>{
      console.log(error);
    },()=>{
      this.getAppointmentCancellation();  
    });
  }

  updateServiceStatus(id,statusName,statusValue,functionName){
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
      this.getAppointmentCancellation();
    });
  }
}
