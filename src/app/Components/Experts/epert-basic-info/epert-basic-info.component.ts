import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { ExpertBasicInfo } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';

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
  expertType:any[];

  expertID: string;
  state: string;

  constructor(private stepsService: StepsService,
    private fb: FormBuilder,
    private experUserSerice: ExpertuserService,
    private route: ActivatedRoute,
    private router: Router,
    private toaserService: ToastrService,
    private settingService:SettingsService) {
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
        expertType:[data.expertType?data.expertType:'',Validators.required],
        assessmentTime:[data.assessmentTime?data.assessmentTime:'',Validators.required]
      });

      this.getSubSpecialities(data.specialityID);

      if (this.state == 'draftprofile') {
        this.stepsService.getSteps().subscribe(response => {
          for (let index = 0; index < response.length; index++) {
            response[index].isComplete = index > data.stepsCompleted ? false : true;
          }
        });
      }

    } else {
      this.basicInfoForm = this.fb.group({
        firstName: ['Dr.',[Validators.required]],
        lastName: ['', [Validators.required]],
        middleName: [''],
        gender: ['', Validators.required],
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        specialityID: ['', Validators.required],
        subSpecialityID: ['', Validators.required],
        expertType:['',Validators.required],
        assessmentTime:['',Validators.required]
      });
    }
  }

  getBasicInfo(id, profileSate?) {
    this.experUserSerice.getExpertProfileInfo("Expert",id, "", profileSate).subscribe(response => {
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

  getExpertTypes(){
    this.settingService.getAllExpertType(0).subscribe(response=>{
      this.expertType= response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  onNextStep() {
    this.submitted = true;
    if (this.basicInfoForm.valid) {
      if (!this.stepsService.isLastStep()) {

        if ((this.expertID && this.state == 'completedprofile') ||
          (this.expertID && this.state == 'draftprofile')) {
          this.update();
        }else if(localStorage.getItem('expertID')){
          this.expertID=localStorage.getItem('expertID');
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

  submit() {
    this.expertBasicInfo = Object.assign({}, this.basicInfoForm.value);

    this.expertBasicInfo.userID=+localStorage.getItem('userID');

    this.experUserSerice.createPersonalInfo(this.expertBasicInfo).subscribe(response => {
      let output = response.outputObject;
      localStorage.setItem("expertID", output.pop().id);
      this.toaserService.success('Personal information has been added!')
    }, error => {
      console.log(error);
    });
  }

  update() {
    this.expertBasicInfo = Object.assign({}, this.basicInfoForm.value);

    this.expertBasicInfo.id = +this.expertID;
    this.expertBasicInfo.userID=+localStorage.getItem('userID');

    this.experUserSerice.updateExpertPersonalInfo(this.expertBasicInfo).subscribe(response => {
      this.toaserService.success('Personal information has been updated!')
    }, error => {
      console.log(error);
    })
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }
}
