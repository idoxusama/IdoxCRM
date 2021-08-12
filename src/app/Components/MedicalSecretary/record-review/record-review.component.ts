import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Cropper from 'cropperjs';
import * as fileSaver from 'file-saver';
import html2canvas from 'html2canvas';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { ToastrService } from 'ngx-toastr';
import { MedcoRecord } from 'src/app/Models/Instruction Main/MedcoRecord';
import { CroppedImages } from 'src/app/Models/Medical Secretary Model/cropped-image';
import { NewlyAssigned } from 'src/app/Models/Medical Secretary Model/newly-assigned';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';
import { ReportWritingService } from 'src/app/Services/Report Writing Services/report-writing.service';

@Component({
  selector: 'app-record-review',
  templateUrl: './record-review.component.html',
  styleUrls: ['./record-review.component.css']
})
export class RecordReviewComponent implements OnInit {
  private instructionID: string;
  private cropper!: Cropper;
  public medcoRecord: MedcoRecord[] = [];
  public assignedMedSecList:NewlyAssigned[]=[];
  public showPreview: boolean = false;
  public fileContent = "";
  public pdfSrc;
  public totalPages: number = 0;
  public currentpage: number = 0;
  public isCropImage: boolean = false;
  public croppedImages: CroppedImages[] = [];
  public croppedImageReferences = [];
  public modalRef: BsModalRef;
  public reviewNote: any = {};
  public reviewNoteForm: FormGroup;
  public reviewNoteFormSubmit: boolean = false;
  public uploadedFiles = [];
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  private startTime: Date;

  constructor(private expertUserService: ExpertuserService,
    private instructionService: InstructionService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private reportWritingService: ReportWritingService,
    private fb: FormBuilder,
    private toasterService:ToastrService) { }

  ngOnInit() {
    this.startTime = new Date();
    this.route.queryParams.subscribe(params => {
      this.instructionID = params['id'];
    });
    if (this.instructionID) {
      this.getMedicalRecord();
      this.getAllAssignedMedSec();
    }
  }

  getAllAssignedMedSec(){
    let userID = +localStorage.getItem('userID');
    this.instructionService.getAllInstAssignMedSec(0,userID).subscribe(response=>{
      this.assignedMedSecList = response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  /* #region  medical record actions */

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
    if (this.cropper) {
      this.cropper.destroy();
      this.isCropImage = false;
      this.ngOnInit();
    }
    this.pdfSrc = this.base64ToArrayBuffer(base64String);
    this.showPreview = true;
  }

  /* #endregion */
  
  /* #region  prepare review note form and modal */

  createReviewNoteForm() {
    this.reviewNoteForm = this.fb.group({
      userNote: [''],
      referenceNotes: this.fb.array([])
    });
  }

  get referenceNotes() {
    return this.reviewNoteForm.get('referenceNotes') as FormArray;
  }

  addReferenceNoteGroup() {
    return this.fb.group({
      file: [null, Validators.required],
      note: ['', Validators.required]
    });
  }

  addReferenceNote() {
    this.referenceNotes.push(this.addReferenceNoteGroup());
  }

  openNoteModal(template) {
    this.createReviewNoteForm();
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }


  /* #endregion */

  saveNote() {
    this.reviewNoteFormSubmit = true;
    if (this.reviewNoteForm.valid) {
      //get cropped canvas
      let canvas = this.cropper.getCroppedCanvas();
      this.getCanvasToDownload(canvas, this.reviewNoteForm.get('userNote').value);

      //push upload images to cropped images array for displaying in cropped image list
      this.croppedImages.forEach(x => {
        this.uploadedFiles.forEach(e => {
          e.croppedImageId= x.id,
          x.references.push(e);
        });
      });

      this.destroyCropper();
      this.modalRef.hide();
      this.referenceNotes.controls.length=0;
      this.uploadedFiles = [];
    }
  }

  getCroppedReferences(id, template) {
    this.croppedImageReferences = this.croppedImages.filter(e => e.id == id).pop().references;
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
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  onSelectFile(files,note) {
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      let self = this;
      reader.onload = function (e) {
        let refNoteObject ={
          note:note,
          image:reader.result
        };
        self.uploadedFiles.push(refNoteObject);
      }
      reader.readAsDataURL(files[i]);
    }
  }

  saveCroppedImages() {
    debugger
    let recordRecordInfo = this.assignedMedSecList.find(e=>e.instructionID == +this.instructionID);
    if(this.croppedImages.length>0){
      this.croppedImages.forEach(async x => {
        //post crop images to api.
        let formData = new FormData();
        formData.append("InstructionID", this.instructionID);
        formData.append("ExpertID", ''+recordRecordInfo.expertID);
        formData.append("MedicalSecretaryID", ''+recordRecordInfo.medSecID);
        formData.append("Description", "");
        formData.append("UserNote", x.note);
        formData.append("TotalSpendTime", ''+this.get_time_diff(this.startTime));
        formData.append("UserID", localStorage.getItem("userID"));
        formData.append("UserType", localStorage.getItem("userTypeID"));
        formData.append("File", this.convertBase64ToFile(x.image, "crop"));
        formData.append("FileName", "crop");
        let result = await this.reportWritingService.createRptConversationLog(formData).toPromise();

        // post the cropped images references to api
        this.croppedImageReferences = x.references;
        for (let i = 0; i < this.croppedImageReferences.length; i++) {
          let formData = new FormData();
          formData.append("File", this.convertBase64ToFile(this.croppedImageReferences[i].image, "browseupload"));
          formData.append("ExpertRptLogID", result.expertRptLogID);
          formData.append("MedSecRptLogID", result.medSecRptLogID);
          formData.append("InstructionID", this.instructionID);
          formData.append("Note", this.croppedImageReferences[i].note);
          formData.append("userID", localStorage.getItem('userID'));
          let res = await this.reportWritingService.createRptLogReferenceImg(formData).toPromise();
        }
      });

      this.toasterService.success('Cropped images and references saved successfully!');
      this.ngOnInit();
    }
    else{
      this.toasterService.error('Please cropped the image then proceed!');
    } 
  }

  /* #region  Cropper Methods */
  initCrop() {
    html2canvas(document.querySelector(".pdf-container") as HTMLElement).then((canvas: any) => {
      let ctx = canvas.getContext('2d');
      ctx.scale(3, 3);
      let image = canvas.toDataURL("image/png").replace("image/png", "image/png");

      if (image !== 'data:,') this.fileContent = image; //after destroy init the cropper 
      image = this.fileContent;

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
        data: {
          width: 240,
          height: 240,
        },
        ready: (e) => {
          let cropper = this.cropper;
        },
        crop: (e) => { }
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

  destroyCropper() {
    this.cropper.destroy();
    this.ngOnInit();
    this.isCropImage = false;
  }
  /* #endregion */

  /* #region private functions */

  private getCanvasToDownload(canvas: any, note) {
    let ctx = canvas.getContext('2d');
    ctx.scale(3, 3);
    let image = canvas.toDataURL("image/png").replace("image/png", "image/png");
    let cImages = new CroppedImages();
    cImages.id = cImages.id > 0 ? cImages.id + 1 : 1;
    cImages.image = image;
    cImages.note = note;
    cImages.references = [];
    this.croppedImages.push(cImages);
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

  private convertBase64ToFile(base64, filename) {
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

  private get_time_diff(startTime) {
    var now = new Date().getTime();
    if (isNaN(startTime)) return "";
    if (startTime < now)
      var milisec_diff = now - startTime;
    else
      var milisec_diff = startTime - now;
    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    var date_diff = new Date(milisec_diff);
    return date_diff.getSeconds();
  }

  /* #endregion */
}
