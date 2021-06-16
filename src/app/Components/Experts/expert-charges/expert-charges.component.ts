import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertCharges } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-expert-charges',
  templateUrl: './expert-charges.component.html',
  styleUrls: ['./expert-charges.component.css']
})
export class ExpertChargesComponent implements OnInit {
  @Input() step: StepModel;
  chargesForm: FormGroup;
  expertCharges: ExpertCharges;
  submitted: boolean = false;

  expertID: string;
  state: string;

  constructor(private stepsService: StepsService,
    private fb: FormBuilder,
    private expertUserService: ExpertuserService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.expertID = params.get('id');
      this.state = params.get('state');
    });
    if (localStorage.getItem('expertID')) {
      this.getCharges(localStorage.getItem('expertID'), 'draftprofile');
    }
    else if (this.expertID && this.state == 'completedprofile') {
      this.getCharges(this.expertID, this.state);
    }
    else if (this.expertID && this.state == 'draftprofile') {
      this.getCharges(this.expertID, this.state);
    }
    else {
      this.createChargesForm();
    }
  }

  createChargesForm(data?: any) {
    if (data) {
      this.chargesForm = this.fb.group({
        iaCharges: [data.iaCharges ? data.iaCharges : '', Validators.required],
        dcCharges: [data.dcCharges ? data.dcCharges : '', Validators.required],
        perSessionCharges: [data.perSessionCharges ? data.perSessionCharges : '', Validators.required]
      });
    }
    else {
      this.chargesForm = this.fb.group({
        iaCharges: ['', Validators.required],
        dcCharges: ['', Validators.required],
        perSessionCharges: ['', Validators.required]
      });
    }
  }
  getCharges(id, state) {
    this.expertUserService.getExpertProfileInfo(id, "", state).subscribe(response => {
      this.expertCharges = response.outputObject.pop();
      this.createChargesForm(this.expertCharges);
    })
  }

  onNextStep() {
    this.submitted = true;
    if (this.chargesForm.valid) {
      this.step.isComplete = true;
      if (!this.stepsService.isLastStep()) {

        if ((this.expertID && this.state == 'completedprofile') ||
          (this.expertID && this.state == 'draftprofile')) {
          this.update();
        } else if (localStorage.getItem('expertID')) {
          this.expertID=localStorage.getItem('expertID');
          this.update();
        } else {
          this.submit();
        }
        this.stepsService.moveToNextStep();
      }
    }
  }

  submit() {
    this.expertCharges = Object.assign({}, this.chargesForm.value);
    this.expertCharges.id = +localStorage.getItem('expertID');
    this.expertCharges.userID = +localStorage.getItem('userID');
    this.expertUserService.createExpertFeeCharges(this.expertCharges).subscribe(response => {
      this.toasterService.success('Fee Charges has been added!');
    }, error => {
      console.log(error);
    });
  }

  update() {
    this.expertCharges = Object.assign({}, this.chargesForm.value);
    this.expertCharges.id = +this.expertID;
    this.expertCharges.userID = +localStorage.getItem('userID');
    this.expertUserService.createExpertFeeCharges(this.expertCharges).subscribe(response => {
      this.toasterService.success('Fee Charges has been updated!');
    }, error => {
      console.log(error);
    });
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }
}
