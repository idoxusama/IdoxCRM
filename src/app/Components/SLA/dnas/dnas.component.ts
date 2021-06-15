import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { start } from 'repl';
import { Dnas } from 'src/app/Models/SLA Models/dnas';
import { SlaService } from 'src/app/Services/SLA Service/sla.service';

@Component({
  selector: 'app-dnas',
  templateUrl: './dnas.component.html',
  styleUrls: ['./dnas.component.scss']
})
export class DnasComponent implements OnInit {
  @ViewChild('addExpertDNAS') addExpertDNAS: ElementRef;
  expertDnasList: Dnas[] = [];
  expertDnas: Dnas = new Dnas();
  dnasForm: FormGroup;
  dnasFormSubmitted: boolean = false;

  modalRef: BsModalRef;

  expertID:string;

  constructor(private slaService: SlaService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private toasterService: ToastrService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.expertID=params.get('id');
    })
    this.getExpertDNAS();
  }

  getExpertDNAS() {
    this.slaService.getExpertDnas(0, this.expertID).subscribe(response => {
      this.expertDnasList = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  createExpertDNASForm(data?: any) {
    if (data) {
      this.dnasForm = this.fb.group({
        id: [data.id ? data.id : ''],
        noOfDna: [data.noOfDna ? data.noOfDna : '', Validators.required],
        rangeBy: [data.rangeBy ? data.rangeBy : '', Validators.required],
        startRange: [data.startRange ? data.startRange : '', Validators.required],
        endRange: [data.endRange ? data.endRange : '', Validators.required],
        chargeAmt: [data.chargeAmt ? data.chargeAmt : '', Validators.required],
        chargePercent: [data.chargePercent ? data.chargePercent : '', Validators.required]
      },{validators:this.endRangeValidation});
    }
    else {
      this.dnasForm = this.fb.group({
        noOfDna: ['', Validators.required],
        rangeBy: ['', Validators.required],
        startRange: ['', Validators.required],
        endRange: ['', Validators.required],
        chargeAmt: ['', Validators.required],
        chargePercent: ['', Validators.required]
      },{validators:this.endRangeValidation});
    }
  }

  endRangeValidation(group: FormGroup) {
    debugger
    let startRange = +group.get('startRange').value;
    let endRange = +group.get('endRange').value;
    return endRange < startRange ? { endRangeGreater: true } : null;
  }


  openExpertDNASModel(template: TemplateRef<any>) {
    this.createExpertDNASForm();
    this.modalRef = this.modalService.show(template);
  }

  saveExpertDNAS() {
    this.dnasFormSubmitted = true;
    if (this.dnasForm.valid) {
      this.expertDnas = Object.assign({}, this.dnasForm.value);
      if (this.dnasForm.get('id')) {
        this.update();
      }
      else {
        this.submit();
      }
    }
  }
  editExpertDNAS(id) {
    let data = this.expertDnasList.find(e => e.id == id);
    this.createExpertDNASForm(data);
    this.modalRef = this.modalService.show(this.addExpertDNAS);
  }

  submit() {

    this.expertDnas.expertID = +this.expertID;
    this.expertDnas.userID = +localStorage.getItem('userID');

    this.slaService.createExpertDNAS(this.expertDnas).subscribe(response => {
      this.toasterService.success('Expert dnas form has been added.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    },()=>{
      this.getExpertDNAS();
    });
  }

  update() {

    this.expertDnas.expertID = +this.expertID;
    this.expertDnas.userID = +localStorage.getItem('userID');

    this.slaService.updateExpertDNAS(this.expertDnas).subscribe(response => {
      this.toasterService.success('Expert dnas form has been updated.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    },()=>{
      this.getExpertDNAS();
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
      this.getExpertDNAS();
    });
  }
}
