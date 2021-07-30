import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { MedicalSecretary } from 'src/app/Models/Medical Secretary Model/Secretary';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';
import { UserService } from 'src/app/Services/Users Services/user.service';

@Component({
  selector: 'app-new-medical-secretary',
  templateUrl: './new-medical-secretary.component.html',
  styleUrls: ['./new-medical-secretary.component.scss']
})
export class NewMedicalSecretaryComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  public medSecForm:FormGroup;
  public medSecFormSubmit:boolean=false; 
  public CreateMedicalSecretary: MedicalSecretary = new MedicalSecretary();

  constructor(private medicalsecretaryService: MedicalsecretaryService,
    private router: Router,
    public datepipe: DatePipe,
    private toasterService: ToastrService,
    private fb:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.headerTitle.emit("Add New Medical Secretary");
    this.createMedicalSecretaryForm();
  }

  createMedicalSecretaryForm(){
    this.medSecForm = this.fb.group({
      addressLine1:['',Validators.required],
      addressLine2:[''],
      county:['',Validators.required],
      town:['',Validators.required],
      mobileNumber:['',Validators.required],
      amountRate:[''],
      medicalSecretaryTypeID:['',Validators.required],
      additionalEmailJson:[''],
      contract:[''],
      fees:[''],
      isActive:[true],
      isUser:[false],
      secretaryFormArray:this.fb.array([]),
      companyFormArray:this.fb.array([]),
      userFormArray:this.fb.array([]),
    });
  }

  get secretaryFormArray(){
    return this.medSecForm.get('secretaryFormArray') as FormArray;
  }

  addSecretaryFormGroup(){
    return this.fb.group({
      namePrefix:[''],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      middleName:[''],
      nameSuffix:[''],
      gender:['',Validators.required],
      phoneNo:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
    });
  }

  get companyFormArray(){
    return this.medSecForm.get('companyFormArray') as FormArray;
  }

  addCompnayFormGroup(){
    return this.fb.group({
      companyName:['',Validators.required],
      companyAddress:['',Validators.required],
      companyPhoneNumber:['',Validators.required],
      postCode:['',Validators.required],
    });
  }

  get userFormArray(){
    return this.medSecForm.get('userFormArray') as FormArray;
  }

  addUserFormGroup(){
    return this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    },{validators:this.passwordMatchValidators});
  }

  passwordMatchValidators(g: FormGroup) {
    let result = g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true};
    return result;
  }


  selectedType(value){
    if(value==1){
      this.companyFormArray.controls.length=0;
      this.secretaryFormArray.push(this.addSecretaryFormGroup());
    }
    else if(value==2){
      this.secretaryFormArray.controls.length=0;
      this.companyFormArray.push(this.addCompnayFormGroup());
    }
  }

  isMedSecUser(value){
    if(value==true){
      this.userFormArray.controls.length=0;
      this.userFormArray.push(this.addUserFormGroup());
    }
    else{
      this.userFormArray.controls.length=0;
    }
  }

  assignSecretaryInfo(){
    if(this.secretaryFormArray.controls.length>0){
      let info = this.secretaryFormArray.value.pop();
      this.CreateMedicalSecretary.firstName= info.firstName;
      this.CreateMedicalSecretary.lastName = info.lastName;
      this.CreateMedicalSecretary.middleName= info.middleName;
      this.CreateMedicalSecretary.namePrefix = info.namePrefix;
      this.CreateMedicalSecretary.nameSuffix= info.nameSuffix;
      this.CreateMedicalSecretary.phoneNo = info.phoneNo;
      this.CreateMedicalSecretary.gender= info.gender;
      this.CreateMedicalSecretary.email = info.email;
      this.CreateMedicalSecretary.fullName = info.namePrefix + ' ' + info.firstName + ' ' + info.middleName + ' ' + info.lastName;
    }
  }

  assignCompanyInfo(){
    if(this.companyFormArray.controls.length>0){
      let info = this.companyFormArray.value.pop();
      this.CreateMedicalSecretary.companyName = info.companyName;
      this.CreateMedicalSecretary.companyAddress = info.companyAddress;
      this.CreateMedicalSecretary.companyPhoneNumber = info.companyPhoneNumber;
      this.CreateMedicalSecretary.postCode = info.postCode;  
    }
  }

  assignUserInfo(){
    if(this.userFormArray.controls.length>0){
      let info = this.userFormArray.value.pop();
      this.CreateMedicalSecretary.username =info.username;
      this.CreateMedicalSecretary.password = info.password;
    }
  }

  async existUserName(userName){
    let user = await this.userService.checkUserExist(userName).toPromise();
    if(user)
      return true;
    else
      return false;
  }

  async submit() {
    debugger
    this.medSecFormSubmit=true;
    if(this.medSecForm.valid){
      this.CreateMedicalSecretary = Object.assign(this.CreateMedicalSecretary,this.medSecForm.value);
      this.CreateMedicalSecretary.userID = +localStorage.getItem('userID');
      
      //fill the isHourlyFee, isPerRptFee fields upon the value of contract.
      this.CreateMedicalSecretary.isHourlyFee = this.medSecForm.get('contract').value=="isHourlyFee"?true:false;
      this.CreateMedicalSecretary.isPerRptFee = this.medSecForm.get('contract').value=="isPerRptFee"?true:false;

      this.assignSecretaryInfo();
      this.assignUserInfo();
      this.assignCompanyInfo();

      //check Username if exist
      let userExist = await this.existUserName(this.CreateMedicalSecretary.username);
      if(userExist===false){
        await this.medicalsecretaryService.CreateMedicalSecretary(this.CreateMedicalSecretary).toPromise();
        this.toasterService.success('Medical Secretary created successfully.');
        this.router.navigate(['/MedicalSecretary/List']);
      }
      else{
        this.toasterService.warning('Username already exist!');
      }
    }
  }
}
