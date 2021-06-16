import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertUploadedDocs } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-expert-upload-doc',
  templateUrl: './expert-upload-doc.component.html',
  styleUrls: ['./expert-upload-doc.component.css']
})
export class ExpertUploadDocComponent implements OnInit {
  @Input() step: StepModel;
  uploadDocsForm: FormGroup;
  expertuploadDocs = [];

  filesToUpload = [];
  uploader: FileUploader;
  uploadMore: boolean = false;
  submitted: boolean = false;

  hasDropZoneOver = false;

  expertID: string;

  constructor(private stepsService: StepsService,
    private fb: FormBuilder,
    private expertUserService: ExpertuserService,
    private toasterService: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() {
    debugger
    this.route.paramMap.subscribe(params => {
      this.expertID = params.get('id');
    });

    if (localStorage.getItem('expertID')) {
      this.expertPersonalDocuments(localStorage.getItem('expertID'));
    }
    else if (this.expertID) {
      this.expertPersonalDocuments(this.expertID);
    }
    else {
      this.createUploadDocsForm();
    }
  }

  createUploadDocsForm() {
    this.uploadDocsForm = this.fb.group({
      documentName: ['', Validators.required],
      document: [null, Validators.required]
    });
  }


  expertPersonalDocuments(id) {
    this.expertUserService.getExpertPersonalDocuments(id).subscribe(response => {
      this.expertuploadDocs = response.outputObject;
      this.createUploadDocsForm();
    }, error => {
      console.log(error);
    })
  }


  addUpload() {
    this.uploadMore = true;
  }

  onSelectFiles(files) {
    if (files.length === 0) {
      return;
    }
    for (let index = 0; index < files.length; index++) {
      this.filesToUpload.push(files[index]);
    }
  }
  upload() {
    debugger
    this.submitted = true;
    if (this.uploadDocsForm.valid) {

      let formData = new FormData();

      formData.append("expertID", this.expertID!=="0" ? this.expertID : localStorage.getItem('expertID'));
      formData.append("userID", localStorage.getItem('userID'));
      formData.append("documentName", this.uploadDocsForm.get('documentName').value);

      this.filesToUpload.forEach((f) => formData.append("Files", f));

      this.expertUserService.uploadPersonalDocuments(formData).subscribe(response => {
        this.toasterService.success('Uploaded!...');

      }, error => {
        console.log(error);
      })
    }
    this.uploadMore = false;
    this.ngOnInit();
  }

  onNextStep() {
    localStorage.removeItem('expertID');

    this.step.isComplete = true;
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }
}
