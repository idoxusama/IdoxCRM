import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Cropper from 'cropperjs';
import * as fileSaver from 'file-saver';
import html2canvas from 'html2canvas';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { MedcoRecord } from 'src/app/Models/Instruction Main/MedcoRecord';
import { CroppedImages } from 'src/app/Models/Medical Secretary Model/cropped-image';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';

@Component({
  selector: 'app-record-review',
  templateUrl: './record-review.component.html',
  styleUrls: ['./record-review.component.css']
})
export class RecordReviewComponent implements OnInit {
  private instructionID: string;
  private cropper!: Cropper;
  public medcoRecord: MedcoRecord[] = [];
  public showPreview: boolean = false;
  public fileContent="";
  public pdfSrc;
  public totalPages: number = 0;
  public currentpage: number = 0;
  public isCropImage: boolean = false;
  public croppedImages:CroppedImages[]=[];
  public croppedImageReferences=[];
  public modalRef:BsModalRef;
  public reviewNote:any={};
  public uploadedFiles=[];
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  private startTime:Date;

  constructor(private expertUserService: ExpertuserService,
    private instructionService: InstructionService,
    private route: ActivatedRoute,
    private modalService:BsModalService,
    private medicalSecretaryService:MedicalsecretaryService) { }

  ngOnInit() {
    this.startTime = new Date();
    this.route.queryParams.subscribe(params => {
      this.instructionID = params['id'];
    });
    if (this.instructionID) {
      this.getMedicalRecord();
    }
  }

  getMedicalRecord() {
    this.instructionService.getInstructionMedicalRecord(0, this.instructionID).subscribe(res => {
      this.medcoRecord = res.outputObject;
    }, error => {
      console.log(error);
    });
  }

  download(serverPath: string, recorName, ext) {
    this.expertUserService.downloadMedicalRecord(serverPath).subscribe((response: any) => {
      let blob: any = new Blob([response], { type: response.type });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, recorName + ext);
    });
  }

  preview(base64String) {
    if(this.cropper) {
      this.cropper.destroy();
      this.isCropImage = false;
      this.ngOnInit();
    }
    this.pdfSrc = this.base64ToArrayBuffer(base64String);   
    this.showPreview = true;
  }

  private base64ToArrayBuffer(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }

    return bytes.buffer;
  }

  private convertBase64ToFile(base64,filename){
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const binary_string = atob(arr[1]);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return new File([bytes], filename, { type: mime });
  }

  private get_time_diff( startTime ){
      var now = new Date().getTime();
      if( isNaN(startTime) ) return "";
      if (startTime < now)
          var milisec_diff = now - startTime;
      else
          var milisec_diff = startTime - now;
  
      var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
      var date_diff = new Date( milisec_diff );
      return date_diff.getHours() + ":" + date_diff.getMinutes();
  }

  openNoteModal(template){
    this.modalRef = this.modalService.show(template);
  }

  saveNote(){
    //get cropped canvas
    let canvas = this.cropper.getCroppedCanvas();
    this.getCanvasToDownload(canvas,this.reviewNote.note);

    //push upload images to cropped images array for displaying in cropped image list
    this.croppedImages.forEach(x=>{
      this.uploadedFiles.forEach(e=>{
        let object = {
          croppedImageId:x.id,
          image :e
        };
        x.references.push(object);
      });
    });

    this.destroyCropper();
    this.modalRef.hide();
    this.reviewNote.note="";
    this.uploadedFiles=[];
  }

  getCroppedReferences(id,template){
    this.croppedImageReferences = this.croppedImages.filter(e=>e.id==id).pop().references;

    //prepare gallary
    const imageUrls = [];
    for (let i = 0; i < this.croppedImageReferences.length; i++) {
      imageUrls.push({
        small: this.croppedImageReferences[i].image,
        medium: this.croppedImageReferences[i].image,
        big: this.croppedImageReferences[i].image,
      });
    }
    this.galleryOptions = [
      {
        width: '465px',
        height: '365px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = imageUrls;
    this.modalRef = this.modalService.show(template,{class:'modal-md'});
  }

  onSelectFile(files) {
    if (files.length===0) return;
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      let self = this;
      reader.onload = function (e) {
        self.uploadedFiles.push(reader.result);
      }
      reader.readAsDataURL(files[i]);
    }
  }

  saveCroppedImages(){
    this.croppedImages.forEach(async x=>{
      let formData = new FormData();
      formData.append("InstructionID",this.instructionID);
      formData.append("ExpertID","0");
      formData.append("MedicalSecretaryID","0");
      formData.append("Description","");
      formData.append("UserNote",x.note);
      formData.append("TotalSpendTime",this.get_time_diff(this.startTime));
      formData.append("UserID",localStorage.getItem("userID"));
      formData.append("RequestType","MedicalSecretary");
      formData.append("File",this.convertBase64ToFile(x.image,"Cropped"));
      formData.append("FileName","Cropped");
      let result = await this.medicalSecretaryService.createRptConversationLog(formData).toPromise();
    });
    
  }

  /* #region  Cropper Methods */
  initCrop() {
    html2canvas(document.querySelector(".pdf-container") as HTMLElement).then((canvas: any) => {
      let ctx = canvas.getContext('2d');
      ctx.scale(3, 3);
      let image = canvas.toDataURL("image/png").replace("image/png", "image/png");

      if(image!=='data:,') this.fileContent=image; //after destroy init the cropper 
      image= this.fileContent;

      $("#cropper-img").attr('src', image);
      $('#cropper-img').addClass('ready');
      this.isCropImage = true
      let cropImg: any = document.getElementById('cropper-img');
      this.cropper = new Cropper(cropImg, {
        zoomable: true,
        background: false,
        guides: false,
        highlight: false,
        movable: false,
        data:{
          width: 240,
          height:  240,
        },
        ready: (e) => {
          let cropper = this.cropper;
        },
        crop: (e) => {}
      });
    })
  }

  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
  }

  previous() {
    if (this.currentpage > 0) {
      if (this.currentpage == 1) {
        this.currentpage = this.totalPages;
      } else {
        this.currentpage--;
      }
    }
  }

  next() {
    if (this.totalPages > this.currentpage) {
      this.currentpage++;
    } else {
      this.currentpage = 1;
    }
  }

  destroyCropper(){
    this.cropper.destroy();
    this.ngOnInit();
    this.isCropImage=false;
  }

  private getCanvasToDownload(canvas: any,note) {
    debugger
    let ctx = canvas.getContext('2d');
    ctx.scale(3, 3);
    let image = canvas.toDataURL("image/png").replace("image/png", "image/png");
    let cImages = new CroppedImages();
    cImages.id = cImages.id > 0 ? cImages.id + 1 : 1;
    cImages.image = image;
    cImages.note = note;
    cImages.references =[];
    this.croppedImages.push(cImages);
  }
  /* #endregion */
}