import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertBankDetail } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-expert-bank-charges',
  templateUrl: './expert-bank-charges.component.html',
  styleUrls: ['./expert-bank-charges.component.css']
})
export class ExpertBankChargesComponent implements OnInit {
  @Input() step: StepModel;
  bankDetailForm: FormGroup;
  expertBankDetail: ExpertBankDetail;
  expertBanksDetail: Array<ExpertBankDetail> = [];
  submitted: boolean = false;

  expertID: string;

  constructor(private stepsService: StepsService,
    private fb: FormBuilder,
    private expertUserService: ExpertuserService,
    private router: Router,
    private route: ActivatedRoute,
    private toaserService: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.expertID = params.get('id');
    });
    if (localStorage.getItem('expertID')) {
      this.createBankChargesForm();
      this.getBankAccountsDetail(localStorage.getItem('expertID'));
    }
    else if (this.expertID) {
      this.createBankChargesForm();
      this.getBankAccountsDetail(this.expertID);
    }
    else {
      this.createBankChargesForm();
    }
  }

  getBankAccountsDetail(id) {
    this.expertUserService.getExpertBankDetailInfo(id).subscribe(response => {
      debugger
      this.expertBanksDetail = response.outputObject;
      this.expertBanksDetail.forEach(x => {
        this.addBankDetail(x);
      })
    }, error => {
      console.log(error);
    });
  }


  createBankChargesForm() {
    this.bankDetailForm = this.fb.group({
      bankDetailFormArray: this.fb.array([])
    });
  }

  get bankDetailFormArray() {
    return this.bankDetailForm.get('bankDetailFormArray') as FormArray;
  }

  addFormGroup(data?: any) {
    debugger
    if (data) {
      return this.fb.group({
        id: [data.id ? data.id : ''],
        bankName: [data.bankName ? data.bankName : '', Validators.required],
        accountTitle: [data.accountTitle ? data.accountTitle : '', Validators.required],
        accountNo: [data.accountNo ? data.accountNo : '', Validators.required],
        IBAN:[data.iban?data.iban:'',Validators.required],
        sortCode: [data.sortCode ? data.sortCode : '', Validators.required],
        isEditable: [false]
      });
    } else {
      return this.fb.group({
        bankName: ['', Validators.required],
        accountTitle: ['', Validators.required],
        accountNo: ['', Validators.required],
        IBAN:['',Validators.required],
        sortCode: ['', Validators.required],
        isEditable: [true]
      });
    }
  }

  addBankDetail(x?: any) {
    if (x) {
      this.bankDetailFormArray.push(this.addFormGroup(x));
    } else {
      this.bankDetailFormArray.push(this.addFormGroup());
    }
  }

  editBankDetail(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }
  saveBankDetail(group: FormGroup) {
    debugger
    this.submitted = true;
    if (group.valid) {
      if (group.get('id')) {
        this.update(group);
      }
      else {
        this.submit(group);
      }
      group.get('isEditable').setValue(false);
    }
    else{ 
      group.get('isEditable').setValue(true);
    }
  }

  submit(group: FormGroup) {
    this.expertBankDetail = Object.assign({}, group.value);
    this.expertBankDetail.expertID = this.expertID !== "0" ? +this.expertID : +localStorage.getItem('expertID');
    this.expertBankDetail.userID=+localStorage.getItem('userID');
    this.expertUserService.createExpertBankDetailInfo(this.expertBankDetail).subscribe(response => {
      this.toaserService.success('Bank detail has been added!');
    }, error => {
      console.log(error);
    },()=>{
      this.getBankAccountsDetail(this.expertBankDetail.expertID);
    });
  }
  update(group: FormGroup) {
    debugger
    this.expertBankDetail = Object.assign({}, group.value);
    this.expertBankDetail.expertID = this.expertID !== "0" ? +this.expertID : +localStorage.getItem('expertID');
    this.expertBankDetail.userID = +localStorage.getItem('userID');
    this.expertUserService.updateExpertBankDetail(this.expertBankDetail).subscribe(response => {
      this.toaserService.success('Bank detail has been updated!');
    }, error => {
      console.log(error);
    },()=>{
      this.getBankAccountsDetail(this.expertBankDetail.expertID);
    });
  }

  onNextStep() {
    this.step.isComplete = true;
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }
}
