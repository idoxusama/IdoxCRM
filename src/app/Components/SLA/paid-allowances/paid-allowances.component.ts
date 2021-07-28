import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Allowance } from 'src/app/Models/SLA Models/allowances';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';

@Component({
  selector: 'app-paid-allowances',
  templateUrl: './paid-allowances.component.html',
  styleUrls: ['./paid-allowances.component.scss']
})
export class PaidAllowancesComponent implements OnInit {
  @ViewChild('addUpdateExpertAllowances') addUpdateExpertAllowances:ElementRef;

  allowances: Allowance[]=[];
  expertAllowances:Allowance;

  allowancesForm:FormGroup;
  allowanceFormSubmitted:boolean=false;

  modalRef:BsModalRef;

  expertID:string;

  constructor(private slaSerivce:SlaService, 
    private toasterService:ToastrService,
    private fb: FormBuilder,
    private modalService:BsModalService,
    private router:ActivatedRoute
    ) { }

  ngOnInit() {
<<<<<<< HEAD
    this.router.paramMap.subscribe(params=>{
      this.expertID= params.get('id');
    })
    this.getOTOP();
=======
    this.router.queryParams.subscribe(params=>{
      this.expertID= params['id'];
    })
    if(this.expertID){
      this.getOTOP();
    }
>>>>>>> 73dc412bb65b230683769700ab0387e3c2ee480f
  }

  createOTOPForm(data?:any){
    if(data){
      this.allowancesForm= this.fb.group({
        id:[data.id?data.id:''],
        isTAPaid:[data.isTAPaid?data.isTAPaid:false],
        isParkingPaid:[data.isParkingPaid?data.isParkingPaid:false],
        isHotelPaid:[data.isHotelPaid?data.isHotelPaid:false],
        isOthersPaid:[data.isOthersPaid?data.isOthersPaid:false],
      });
    }
    else{
      this.allowancesForm= this.fb.group({
        isTAPaid:[false],
        isParkingPaid:[false],
        isHotelPaid:[false],
        isOthersPaid:[false],
      });
    }
  }
  openOTOPModal(template:TemplateRef<any>){
    this.createOTOPForm();
    this.modalRef=this.modalService.show(template);
  }
  editOTOP(id){
    let data = this.allowances.find(e=>e.id==id);
    this.createOTOPForm(data);
    this.modalRef= this.modalService.show(this.addUpdateExpertAllowances);
  }

  getOTOP(){
    this.slaSerivce.getExpertOTOP(0,this.expertID).subscribe(response=>{
      this.allowances=response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  saveExpertAllowance(){
    this.allowanceFormSubmitted=false;
    if(this.allowancesForm.valid){
      this.expertAllowances=Object.assign({},this.allowancesForm.value);
      if(this.allowancesForm.get('id')){
        this.update();
      }
      else{
        this.submit();
      }
    }
  }

  submit(){
    this.expertAllowances.expertID=+this.expertID;
    this.expertAllowances.userID=+localStorage.getItem('userID');
    this.expertAllowances.taid=0;
    this.expertAllowances.topid=0;

    this.slaSerivce.createExpertOTOP(this.expertAllowances).subscribe(response=>{
      this.toasterService.success('Paid Allowance has been added.');
      this.modalRef.hide();
    },error=>{
      console.log(error);
    },()=>{
      this.getOTOP();
    });
  }

  update(){
    this.expertAllowances.expertID=+this.expertID;
    this.expertAllowances.userID=+localStorage.getItem('userID');
    this.expertAllowances.taid=0;
    this.expertAllowances.topid=0;

    this.slaSerivce.updateExpertOTOP(this.expertAllowances).subscribe(response=>{
      this.toasterService.success('Paid Allowance has been added.');
      this.modalRef.hide();
    },error=>{
      console.log(error);
    },()=>{
      this.getOTOP();
    });
  }
}
