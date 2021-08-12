import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertBasicInfo } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { UserService } from 'src/app/Services/Users Services/user.service';

@Component({
  selector: 'app-epert-basic-info',
  templateUrl: './epert-basic-info.component.html',
  styleUrls: ['./epert-basic-info.component.css']
})
export class EpertBasicInfoComponent implements OnInit {
  @Input() step: StepModel;

  expertBasicInfo: ExpertBasicInfo;
  basicInfoForm: FormGroup;
  submitted: boolean = false;

  specialities: any[];
  subSpecailities: any[];
  expertType: any[];

  expertID: string;
  state: string;

  constructor(private stepsService: StepsService,
    private experUserSerice: ExpertuserService,
    private settingService: SettingsService,
    private userService:UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toaserService: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.getSpecialities();
    this.getExpertTypes();

    this.route.paramMap.subscribe(params => {
      this.expertID = params.get('id');
      this.state = params.get('state');
    })

    if (localStorage.getItem('expertID')) {
      this.getBasicInfo(localStorage.getItem('expertID'), 'draftprofile');
    }
    else if (this.expertID && this.state == "completedprofile") {
      this.getBasicInfo(this.expertID, this.state)
    }
    else if (this.expertID && this.state == 'draftprofile') {
      this.getBasicInfo(this.expertID, "draftprofile");
    }
    else {
      this.createBasicInfoForm();
    }
  }


  createBasicInfoForm(data?: any) {
    if (data) {
      this.basicInfoForm = this.fb.group({
        //namePrefix:['',Validators.required],
        firstName: [data.firstName ? data.firstName : 'Dr.', [Validators.required]],
        lastName: [data.lastName ? data.lastName : '', [Validators.required]],
        middleName: [data.middleName ? data.middleName : ''],
        gender: [data.gender ? data.gender : '', Validators.required],
        addressLine1: [data.addressLine1 ? data.addressLine1 : '', Validators.required],
        addressLine2: [data.addressLine2 ? data.addressLine2 : ''],
        specialityID: [data.specialityID ? data.specialityID : '', Validators.required],
        subSpecialityID: [data.subSpecialityID ? data.subSpecialityID : '', Validators.required],
        expertType: [data.expertType ? data.expertType : '', Validators.required],
        assessmentTime: [data.assessmentTime ? data.assessmentTime : '', Validators.required],
        isUser:[data.isUser?data.isUser:false],
        userFormArray:this.fb.array([])
      });

      //fill sub specialities dropdown
      this.getSubSpecialities(data.specialityID);

      //fill completed steps
      if (this.state == 'draftprofile') {
        this.stepsService.getSteps().subscribe(response => {
          for (let index = 0; index < response.length; index++) {
            response[index].isComplete = index > data.stepsCompleted ? false : true;
          }
        });
      }

      // if expert is app user
      if(data.isUser){
        this.userFormArray.push(this.addUserFormGroup(data));
      }

    } 
    else {
      this.basicInfoForm = this.fb.group({
        firstName: ['Dr.', [Validators.required]],
        lastName: ['', [Validators.required]],
        middleName: [''],
        gender: ['', Validators.required],
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        specialityID: ['', Validators.required],
        subSpecialityID: ['', Validators.required],
        expertType: ['', Validators.required],
        assessmentTime: ['', Validators.required],
        isUser:[false],
        userFormArray:this.fb.array([])
      });
    }
  }

  get userFormArray(){
    return this.basicInfoForm.get('userFormArray') as FormArray;
  }

  addUserFormGroup(data?:any){
    if(data){
      return this.fb.group({
        username:[data.username?data.username:'',Validators.required],
        password:[data.pasword?data.password:'',Validators.required],
        confirmPassword:[data.pasword?data.password:'',Validators.required]
      },{validators:this.passwordMatchValidators});
    }
    else{
      return this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required],
        confirmPassword:['',Validators.required]
      },{validators:this.passwordMatchValidators});
    }
  }

  isAppUser(value){
    if(value==true){
      this.userFormArray.push(this.addUserFormGroup());
    }
    else{
      this.userFormArray.controls.length=0;
    }
  }

  passwordMatchValidators(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
  }

  getBasicInfo(id, profileSate?) {
    this.experUserSerice.getExpertProfileInfo("Expert", id, "", profileSate).subscribe(response => {
      if (response.outputObject) {
        this.expertBasicInfo = response.outputObject.pop();
        this.createBasicInfoForm(this.expertBasicInfo);
      }
      else {
        this.createBasicInfoForm();
      }
    }, error => {
      console.log(error);
    })
  }

  getSpecialities() {
    this.experUserSerice.specialities().subscribe((response) => {
      this.specialities = response.outputObject;
    }, error => {
      console.log(error);
    })
  }
  getSubSpecialities(id: number) {
    this.experUserSerice.subSpecialities(id).subscribe((response) => {
      this.subSpecailities = response.outputObject;
    }, error => {
      console.log(error);
    })
  }

  getExpertTypes() {
    this.settingService.getAllExpertType(0).subscribe(response => {
      this.expertType = response.outputObject;
    }, error => {
      console.log(error);
    });
  }

  assignUserInfo(){
    let info = this.userFormArray.value;
    if(info){
      this.expertBasicInfo.username = info.username?info.username:'';
      this.expertBasicInfo.password = info.password?info.password:'';
    }
  }

  async checkUserExist(username){
    if(username==='' || username===undefined) return false;

    let user = await this.userService.checkUserExist(username).toPromise();
    if(user) return true;
    return false;
  }

  async submit() {
    this.expertBasicInfo = Object.assign({}, this.basicInfoForm.value);
    this.expertBasicInfo.userID = +localStorage.getItem('userID');

    let userExist = await this.checkUserExist(this.expertBasicInfo.username);
    debugger
    if(userExist===false){
      let result = await this.experUserSerice.createPersonalInfo(this.expertBasicInfo).toPromise();
      let output = result.outputObject;
      localStorage.setItem("expertID", output.pop().id);
      this.toaserService.success('Personal information has been added!');
    } 
    else{
      this.toaserService.warning('Username already exist!');
    }
  }

  async update() {
    this.expertBasicInfo = Object.assign({}, this.basicInfoForm.value);
    this.expertBasicInfo.id = +this.expertID;
    this.expertBasicInfo.userID = +localStorage.getItem('userID');

    await this.experUserSerice.updateExpertPersonalInfo(this.expertBasicInfo).toPromise();
    this.toaserService.success('Personal information has been updated!');
  }

  onNextStep() {
    this.submitted = true;
    if (this.basicInfoForm.valid) {
      if (!this.stepsService.isLastStep()) {

        if ((this.expertID && this.state == 'completedprofile') ||
          (this.expertID && this.state == 'draftprofile')) {
          this.update();
        } else if (localStorage.getItem('expertID')) {
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
}
