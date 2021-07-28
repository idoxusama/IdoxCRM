import { Time } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ExpertBasicInfo, ExpertUser } from 'src/app/Models/Experts Model/User';
import { ExpertType, MedicalPerformaQuestionsForClient } from 'src/app/Models/Medical Performa/MedicalPerformaQuestionsForClient';
import { MedicalPerformaQuestionsForExpert } from 'src/app/Models/Medical Performa/MedicalPerformaQuestionsForExpert';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { MedicalPerformaService } from 'src/app/Services/Medical Performa Service/medical-performa.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { UserActivityService } from 'src/app/Services/Users Services/user-activity.service';

@Component({
  selector: 'app-choose-expert',
  templateUrl: './choose-expert.component.html',
  styleUrls: ['./choose-expert.component.css']
})
export class ChooseExpertComponent implements OnInit,OnDestroy {
  @Output() headerTitle = new EventEmitter<string>();
  ExpertTypes: Array<ExpertType> = new Array();
  Experts: Array<ExpertBasicInfo> = new Array();
  expertId:string;
  experTypeId: string;
  draftCode:string;
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  model: any = {};

  startTime:Date;
  endTime:Date;

  MedicalPerformaQuestionsForClient: Array<MedicalPerformaQuestionsForClient> = new Array();
  MedicalPerformaQuestionsForExpert: Array<MedicalPerformaQuestionsForExpert> = new Array();

  constructor(private medicalPerformaSerivce: MedicalPerformaService,
    private settingService:SettingsService,
    private expertService: ExpertuserService,
    private toaster: ToastrService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private userActivity:UserActivityService,
    private router: Router) { }

  ngOnInit() {
    this.headerTitle.emit("Medical Secretary Performa");
    this.settingService.getAllExpertType(0).subscribe((response) => {
      this.ExpertTypes = response.outputObject;
    })
    this.route.queryParams.subscribe(params => {
      debugger
      if(params.code){
        this.draftCode = params.code;
        this.experTypeId= this.medicalPerformaSerivce.expertType.value;
        this.expertId = this.medicalPerformaSerivce.expert.value;
      }
    });

    //track user time which he is spent on performa
    this.startTime =  new Date();
  }

  
  ngOnDestroy(){
    this.endTime= new Date();
    let url=this.router.url;
    this.userActivity.trackUserSpentTimeOnComponent(this.startTime,this.endTime,url).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    });
  }

  getExperts(value) {
    this.medicalPerformaSerivce.expertType.next(value);
    this.expertService.getExpertProfileInfo("ExpertType",value).subscribe((response) => {
      this.Experts = response.outputObject;
    }, error => {
      this.toaster.error(error);
    })
  }

  changeExpert(value) {
    this.experTypeId=this.medicalPerformaSerivce.expertType.value;
    this.medicalPerformaSerivce.expert.next(value);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  openExistingDraft() {
    this.draftCode = this.model.PerformaCode == '' ? this.model.CaseRefNo : this.model.PerformaCode;
    this.modalRef.hide();
  }
}
