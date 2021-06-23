import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertContactInfo } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-expert-contact-info',
  templateUrl: './expert-contact-info.component.html',
  styleUrls: ['./expert-contact-info.component.css']
})
export class ExpertContactInfoComponent implements OnInit {
  @Input() step: StepModel;
  contactInfoForm: FormGroup;

  expertContactInfo: ExpertContactInfo;
  submitted: boolean = false;
  companies: any[];

  expertID: string;
  state: string;

  constructor(private stepsService: StepsService,
    private fb: FormBuilder,
    private experUserService: ExpertuserService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterSerivce: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.expertID = params.get('id');
      this.state = params.get('state');
    })
    if (localStorage.getItem('expertID')) {
      this.getContactInfo(localStorage.getItem('expertID'), 'draftprofile');
    }
    else if (this.expertID != null && this.state == 'completedprofile') {
      this.getContactInfo(this.expertID, this.state);
    }
    else if (this.expertID != null && this.state == 'draftprofile') {
      this.getContactInfo(this.expertID, this.state);
    }
    else {
      this.createContactInfoForm();
    }
    this.getCompanies();
  }


  getCompanies() {
    this.experUserService.companies().subscribe((response) => {
      this.companies = response.outputObject;
    }, error => {
      console.log(error);
    })
  }

  getContactInfo(id, state) {
    this.experUserService.getExpertProfileInfo("Expert",id, "", state).subscribe(response => {
      this.expertContactInfo = response.outputObject?response.outputObject.pop():null;
      if(this.expertContactInfo){
        this.createContactInfoForm(this.expertContactInfo);
      }
      else{
        this.createContactInfoForm();
      }
    })
  }
  createContactInfoForm(data?: any) {
    if (data) {
      this.contactInfoForm = this.fb.group({
        phoneNo: [data.phoneNo ? data.phoneNo : '', [Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
        mobileNumber: [data.mobileNumber ? data.mobileNumber : '', [Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
        alternatePhoneNo: [data.alternatePhoneNo ? data.alternatePhoneNo : '',[Validators.maxLength(11),Validators.minLength(11)]],
        email: [data.email ? data.email : '', Validators.required],
        generalEmail: [data.generalEmail ? data.generalEmail : ''],
        postCode: [data.postCode ? data.postCode : '', Validators.required],
        faxNo: [data.faxNo ? data.faxNo : '', Validators.required],
        county: [data.county ? data.county : '', Validators.required],
        town: [data.town ? data.town : '', Validators.required],
        companyID: [data.companyID ? data.companyID : '', Validators.required]
      });
    } else {
      this.contactInfoForm = this.fb.group({
        phoneNo: ['', [Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
        mobileNumber: ['', [Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
        alternatePhoneNo: ['',[Validators.maxLength(11),Validators.minLength(11)]],
        email: ['', [Validators.email,Validators.required]],
        generalEmail: ['',Validators.email],
        postCode: ['', Validators.required],
        faxNo: ['', Validators.required],
        county: ['', Validators.required],
        town: ['', Validators.required],
        companyID: ['', Validators.required]
      });
    }

  }
  
  onNextStep() {
    this.submitted = true;
    if (this.contactInfoForm.valid) {
      if (!this.stepsService.isLastStep()) {

        if ((this.expertID && this.state == 'completedprofile') ||
          (this.expertID && this.state == 'draftprofile')) {
          this.update();
        }
        else if (localStorage.getItem('expertID')) {
          this.expertID = localStorage.getItem('expertID');
          this.update();
        }
        else {
          this.submit();
        }

        this.step.isComplete = true;
        this.stepsService.moveToNextStep();
      }
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }

  submit(): void {
    this.expertContactInfo = Object.assign({}, this.contactInfoForm.value);
    this.expertContactInfo.id = +localStorage.getItem('expertID');
    this.expertContactInfo.userID = +localStorage.getItem('userID');
    this.experUserService.createExpertContactInfo(this.expertContactInfo).subscribe((responce) => {
      let data = responce.outputObject;
      this.toasterSerivce.success('Contact information has been added!');
    }, error => {
      console.log(error);
    })
  }

  update(): void {
    this.expertContactInfo = Object.assign({}, this.contactInfoForm.value);
    this.expertContactInfo.id = +this.expertID;
    this.expertContactInfo.userID = +localStorage.getItem('userID');
    this.experUserService.createExpertContactInfo(this.expertContactInfo).subscribe(response => {
      this.toasterSerivce.success('Contact information has been updated!');
    }, error => {
      console.log(error);
    })
  }
}
