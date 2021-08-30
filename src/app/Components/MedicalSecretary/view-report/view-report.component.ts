import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ExpertRPTLog, ExpertRptLogReference } from 'src/app/Models/Report Writing/ExpertRptLog';
import { ExpertReportLogRefImgResponse, ExpertRptLogResponse } from 'src/app/Models/Report Writing/ExpertRptLogResponse';
import { MedSecRptLogs, MedSecRptLogReferenceList } from 'src/app/Models/Report Writing/MedSecRptLog';
import { MedSecRptLogResponse } from 'src/app/Models/Report Writing/MedSecRptLogResponce';
import { ReportWritingService } from 'src/app/Services/Report Writing Services/report-writing.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  public instructionID:string;
  public logId:number;
  public refLogId:number;
  public resLogId:number;
  public expertRPTLog: ExpertRPTLog[];
  public expertRPTLogReferences: ExpertRptLogReference[];
  public expertRptLogResponse:ExpertRptLogResponse[];
  public expertRptLogResponseReference:ExpertReportLogRefImgResponse[];
  public medSecRptLog:MedSecRptLogs[];
  public medSecRptLogReferences:MedSecRptLogReferenceList[];
  public medSecRptLogResponces:MedSecRptLogResponse[];
  public modalRef:BsModalRef;

  public actionValue:string;
  public modal:any={};
  public uploadedFiles=[];
  public imageUrl:string;

  constructor(private reportWritingService: ReportWritingService,
    private modalService:BsModalService,
    private toasterSerice:ToastrService,
    private senitizer:DomSanitizer,
    private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.queryParams.subscribe(params=>{
      this.instructionID = params['id'];
    });

    if(this.instructionID){
      this.getReportWritingData();
    }
  }

  getReportWritingData() {
    this.reportWritingService.getExpertRptLog(this.instructionID).subscribe(async res => {
      this.expertRPTLog = res.outputObject;
      await this.parepareViewReport();
    }, error => {
      console.log(error);
    });
  }
  
  async parepareViewReport(){
    if (this.expertRPTLog) {
      this.expertRPTLog.map(async x => {
        x.imageDataUrl = x.isImage ? await this.getImage(x.expertRptLogImgPath) : "";
      });

      this.expertRPTLog.forEach(x => {
        x.expertReportLogReferenceList.map(async e => {
          e.imageDataUrl = e.isRefImage ? await this.getImage(e.referenceImgPath) : "";
          e.isCaseClosed = x.isCaseClosed==true?true:false;
        });
      });

      this.logId = this.expertRPTLog[0].expertRptLogID;
      await this.getExpertRptLogReference(this.expertRPTLog[0].expertRptLogID);
      await this.getExpertRptLogResponse(this.expertRPTLog[0].expertRptLogID);


      //get medical secretary log
      await this.getMedSecRptLog();
      await this.getMedSecRptLogResponse(this.expertRPTLog[0].medSecRptLogID);


      //update log status
      for (const item of this.expertRPTLog) {
        await this.updateExpertLogStatus(item.expertRptLogID,"IsViewed","mainsource");
        await this.updateMedSecLogStatus(item.medSecRptLogID,"IsViewed","mainsource");
      }
    }
  }

  async getMedSecRptLog(){
    let result = await this.reportWritingService.getMedSecRptLog(this.instructionID).toPromise();
    if(result){
      this.medSecRptLog = result;
      for (let i = 0; i < this.expertRPTLog.length; i++) {
        this.expertRPTLog[i].medSecRptLogID = this.medSecRptLog[i].medSecRptLogID;
        await this.getMedSecRptLogReference(this.expertRPTLog[i].medSecRptLogID);
      }
    }
  }

  async getExpertRptLogResponse(id){
    let result = await this.reportWritingService.getExpertRptLogResponse(id).toPromise();
    if(result){
      this.expertRptLogResponse = result;
      this.logId = this.expertRptLogResponse.map(e=>{return e.expertRptLogID}).pop();
      let lastItem = this.expertRptLogResponse[this.expertRptLogResponse.length];
      for (let i = 0; i < this.expertRptLogResponse.length; i++) {
        let reqsender = (this.expertRptLogResponse[i].expertRptLogResponseState === 1 ? 3 :2)
          
        if (reqsender === +localStorage.getItem("userTypeID") ? this.expertRptLogResponse[i].isSameUserType=true : this.expertRptLogResponse[i].isSameUserType=false)
        console.log(this.expertRptLogResponse[i].isSameUserType)
        console.log(this.expertRptLogResponse[i].expertRptLogResponseState)
        if(this.expertRptLogResponse[i].logResponseIsRespond === true)
        {
          this.expertRptLogResponse[i].isOpen = false;
          //this.expertRptLogResponse[i].isOpen = false;
        }
        // if ((lastItem.expertRptLogResponseID !== this.expertRptLogResponse[i].expertRptLogResponseID &&
        //   this.expertRptLogResponse[i].logResponseIsCaseClosed === false) || 
        //   this.expertRptLogResponse[i].logResponseIsCaseClosed === true) {
        //   this.expertRptLogResponse[i].isOpen = false;
        // }
        else {
          this.expertRptLogResponse[i].isOpen = true;
        }
        
        this.expertRptLogResponse[i].imageDataUrl = this.expertRptLogResponse[i].responseImgPath !== "" ?
          await this.getImage(this.expertRptLogResponse[i].responseImgPath) : "";
      }
    }
  }

  getExpertRptLogReference(id) {
    this.logId = id;
    this.expertRPTLogReferences = this.expertRPTLog.find(e => e.expertRptLogID == id).expertReportLogReferenceList;
  }

  getMedSecRptLogReference(id){
    this.expertRPTLogReferences = this.expertRPTLog.find(e=>e.medSecRptLogID ==id).expertReportLogReferenceList;
    this.medSecRptLogReferences = this.medSecRptLog.find(e=>e.medSecRptLogID==id).medSecRptLogReference;

    for (let i = 0; i < this.expertRPTLogReferences.length; i++) {
      this.expertRPTLogReferences[i].medSecRptLogRefImgID = this.medSecRptLogReferences[i].medSecRptLogReferenceImgID;
    }
  }

  async getMedSecRptLogResponse(id){
    let result = await this.reportWritingService.getMedSecRptLogResponse(id).toPromise();
    if(result){
      this.medSecRptLogResponces = result;
      for (let i = 0; i < this.expertRptLogResponse.length; i++) {
        this.expertRptLogResponse[i].medSecRptLogResponseID = this.medSecRptLogResponces[i].medSecRptLogResponseID;
      }
    }
  }
  
  async getImage(imagePath){
    let result = await this.reportWritingService.getImage(imagePath);
    let imageUrl = 'data:image/png;base64,'+result.file;
    let dataUrl = this.senitizer.bypassSecurityTrustUrl(imageUrl);
    return dataUrl;
  }

  openRecordSourceModal(temlate,actionValue,logId){
    this.actionValue = actionValue;
    this.logId = logId;
    this.modalRef = this.modalService.show(temlate);
  }

  openReferenceImageModal(temlate,actionValue,logId){
    this.actionValue = actionValue;
    this.refLogId = logId;
    this.modalRef = this.modalService.show(temlate);
  }

  openResponceModal(temlate,actionValue,logId){
    this.actionValue = actionValue;
    this.resLogId = logId;
    this.modalRef = this.modalService.show(temlate);
  }

  openImageModel(imageDataUrl,template){
    this.imageUrl = imageDataUrl;
    this.modalRef = this.modalService.show(template);
  }

  onSelectFiles(files){
    this.uploadedFiles.length=0;
    if(files.length===0) return;

    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
    }
  }

  async submitRecordSourceResponce(){
    let findLog = this.expertRPTLog.find(e=>e.expertRptLogID==this.logId);   
    let caseClosed = this.actionValue==='Agree'?true:false;
    let isSourceCaseClosed=this.actionValue==='Agree'?true:false;
    let caseStatusID = this.actionValue === 'Agree' ? 1 :
      this.actionValue === 'Disagree' ? 2 :
      this.actionValue === 'Other' ? 3 : 0;

    let formData = new FormData();
    formData.append("ID","0");
    formData.append("InstructionID",''+findLog.instructionID);
    formData.append("ExpertRptLogID",''+findLog.expertRptLogID);
    formData.append("MedSecRptLogID",''+findLog.medSecRptLogID);
    formData.append("Note",this.modal.note);
    formData.append("IsCaseClosed",''+caseClosed);
    formData.append("IsSourceCaseClosed",''+isSourceCaseClosed);
    formData.append("CaseStatusID", ''+caseStatusID);
    formData.append("TotalSpendTime","");
    formData.append("UserType", localStorage.getItem("userTypeID"));
    formData.append("UserID",localStorage.getItem('userID'));
    this.uploadedFiles.forEach((f)=>{formData.append("File",f)});

    await this.reportWritingService.createRptLogResponse(formData).toPromise();
    this.toasterSerice.success("Responce successfully submitted.");
    this.modalRef.hide();
    this.getReportWritingData();
  }

  async submitReferenceResponce(){
    let refImgLog = this.expertRPTLogReferences.find(e=>e.expertRptLogReferenceImgID==this.refLogId);
    let expertRptLog = this.expertRPTLog.find(e=>e.expertRptLogID==this.logId);
    let expertRptLogRespone = this.expertRptLogResponse.find(e=>e.expertRptLogID==this.logId);

    let caseClosed = this.actionValue==='Agree'?true:false;
    let caseStatusID = this.actionValue === 'Agree' ? 1 :
      this.actionValue === 'Disagree' ? 2 :
      this.actionValue === 'Other' ? 3 : 0;

    let formData = new FormData();
    formData.append("ID", "0");
    formData.append("InstructionID", '' + expertRptLog.instructionID);
    formData.append("ExpertRptLogReferenceImgID", '' + refImgLog.expertRptLogReferenceImgID);
    formData.append("ExpertRptLogResponseID", '' + expertRptLogRespone.expertRptLogResponseID);
    formData.append("MedSecRptLogReferenceImgID", expertRptLogRespone.expertRptLogRefImgResponse.map(x => { return x.expertRptLogReferenceImgID }).pop().toString());
    formData.append("MedSecRptLogResponseID", '' + expertRptLogRespone.medSecRptLogResponseID);
    formData.append("Note", this.modal.note);
    formData.append("IsCaseClosed", '' + caseClosed);
    formData.append("CaseStatusID", '' + caseStatusID);
    formData.append("TotalSpendTime", "");
    formData.append("UserType", localStorage.getItem("userTypeID"));
    this.uploadedFiles.forEach((f) => formData.append("File", f));

    await this.reportWritingService.createRptLogRefImgResponse(formData).toPromise();
    this.toasterSerice.success("Responce successfully submitted.");
    this.modalRef.hide();
    this.getReportWritingData();
  }

  async submitResponce(){
    let findLog = this.expertRPTLog.find(e=>e.expertRptLogID==this.logId);  
    let rptExpertResponseLog = this.expertRptLogResponse.find(e=>e.expertRptLogResponseID==this.resLogId);

    let caseClosed = this.actionValue==='Agree'?true:false;
    let isSourceCaseClosed=this.actionValue==='Agree'?true:false;
    let caseStatusID = this.actionValue === 'Agree' ? 1 :
      this.actionValue === 'Disagree' ? 2 :
      this.actionValue === 'Other' ? 3 : 0;

    let formData = new FormData();
    formData.append("ID","0");
    formData.append("InstructionID",''+findLog.instructionID);
    formData.append("ExpertRptLogID",''+findLog.expertRptLogID);
    formData.append("MedSecRptLogID",''+findLog.medSecRptLogID);
    formData.append("Note",this.modal.note);
    formData.append("IsCaseClosed",''+caseClosed);
    formData.append("IsSourceCaseClosed",''+isSourceCaseClosed);
    formData.append("CaseStatusID", ''+caseStatusID);
    formData.append("TotalSpendTime","");
    formData.append("UserType", localStorage.getItem("userTypeID"));
    formData.append("UserID",localStorage.getItem('userID'));
    this.uploadedFiles.forEach((f)=>{formData.append("File",f)});

    await this.reportWritingService.createRptLogResponse(formData).toPromise();
    this.toasterSerice.success("Responce successfully submitted.");
    this.modalRef.hide();

    await this.updateExpertLogStatus(rptExpertResponseLog.expertRptLogResponseID,"IsRespond","response");
    await this.updateMedSecLogStatus(rptExpertResponseLog.medSecRptLogResponseID,"IsRespond","response");
    
    this.getReportWritingData();
  }
  
  async updateExpertLogStatus(id,event,requestType){
    let model={
      ID: id,
      Event: event,
      Value: 1,
      UserID: localStorage.getItem('userID'),
      RequestType: requestType
    };
    let result =await this.reportWritingService.expertRptLogStatusUpdate(model).toPromise();
  }

  async updateMedSecLogStatus(id,event,requestType){
    let model={
      ID: id,
      Event: event,
      Value: 1,
      UserID: localStorage.getItem('userID'),
      RequestType: requestType
    };
    let result = await this.reportWritingService.medSecRptLogStatusUpdate(model).toPromise();
  }
}
