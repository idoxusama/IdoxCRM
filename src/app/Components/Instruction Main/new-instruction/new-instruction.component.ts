import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { ToastrService } from 'ngx-toastr';
import { CaseHandler } from 'src/app/Models/Instruction Main/CaseHandler';
import { CaseInfo } from 'src/app/Models/Instruction Main/CaseInfo';
import { MedcoRecord } from 'src/app/Models/Instruction Main/MedcoRecord';
import { NewInstruction } from 'src/app/Models/Instruction Main/NewInstruction';
import { IntructionSpecial } from 'src/app/Models/Instruction Main/Special';
import { Tranlator } from 'src/app/Models/Instruction Main/Translator';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { ReferrerService } from 'src/app/Services/Referrer/referrer.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
@Component({
  selector: 'app-new-instruction',
  templateUrl: './new-instruction.component.html',
  styleUrls: ['./new-instruction.component.scss']
})
export class NewInstructionComponent implements OnInit {
  /* #region  Fields */
  instructionID: number;
  instructionForm: FormGroup;
  instructionFromSubmit: boolean = false;

  public experts: Array<Select2OptionData>;
  public specialities: Array<Select2OptionData>;
  public medicalRequiredRecordList: Array<Select2OptionData>;
  public referrers: Array<Select2OptionData>;
  public occupancyTypes: Array<Select2OptionData>;
  public occupations: Array<Select2OptionData>;
  public incidentTypes: Array<Select2OptionData>;
  public expertTypes: Array<Select2OptionData>;

  newInstruction: NewInstruction = new NewInstruction();
  instructionSpecial: IntructionSpecial = new IntructionSpecial();
  caseHandler: CaseHandler = new CaseHandler();
  medicoRecord: MedcoRecord = new MedcoRecord();
  translator: Tranlator = new Tranlator();
  caseInfo: CaseInfo = new CaseInfo();

  requiredMedicalRecordUploadFiles = [];
  otherMedicalRecordUploadFiles = [];
  /* #endregion */

  constructor(private expertUserService: ExpertuserService,
    private fb: FormBuilder,
    private instructionService: InstructionService,
    private referrerService: ReferrerService,
    private settingService: SettingsService,
    private toasterService: ToastrService) { }

  ngOnInit() {
    this.createInstructionForm();
    this.getExperts();
    this.getSpecialities();
    this.getReferrers();
    this.getIncidentTypes();
    this.getOccupancyTypes();
    this.getOccupations();
    this.getExpertTypes();
  }

  /* #region  Initialize form */

  createInstructionForm() {
    this.instructionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      county: ['', Validators.required],
      town: ['', Validators.required],
      postCode: ['', Validators.required],
      cO: [''],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      occupancyTypeID: ['', Validators.required],
      occupationID: ['', Validators.required],
      clientRefNo: ['', Validators.required],
      medicoRefNo: ['', Validators.required],
      expertID: ['', Validators.required],
      referrerID: ['', Validators.required],
      specialityID: ['', Validators.required],
      incidentTypeID: ['', Validators.required],
      specialNote: [''],
      isSpecialRestrictionNeed: [false],
      specialRestrictionNeed: ['', Validators.required],
      instructionState:['1'],
      isApproved:[true],
      state:['Instruction'],
      caseHandlerName: ['', Validators.required],
      caseHandlerEmail: ['', [Validators.required, Validators.email]],
      caseHandlerPhone: ['', Validators.required],
      caseHandlerFax: [''],
      translatorLanguages: [''],
      translatorName: [''],
      translatorEmail: ['', Validators.email],
      translatorPhone: [''],
      translatorCO: [''],
      recordName: [''],
      recordPath: [''],
      isReceived: [false],
      isRequiredByExpert: [false],
      accidentCircumstances: ['', Validators.required],
      assignmentDate: ['', Validators.required],
      priority: ['', Validators.required],
      startTime: [''],
      instructionType: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      clinicType: ['', Validators.required],
      isInitialAssessment: [false],
      noOfSessions: ['', Validators.required],
      isCourtCase: [false],
      courtDate: ['', Validators.required],
      isTranslatorRequired: [false],
      instructionDeadLineDate: [''],
      requiredMedicalRecordFormArray: this.fb.array([]),
      otherMedicalRecordFormArray: this.fb.array([])
    });
  }

  /* #endregion */

  /* #region  Dropdowns */

  getExperts() {
    this.expertUserService.getExpertProfileInfo("Expert",0, "", "completedprofile").subscribe(response => {
      this.experts=[];
      let defualtOptiton={
        id:'',
        text:'Select Option'
      };
      this.experts.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object =  {
          id: element.id,
          text: element.firstName
        };
        this.experts.push(object);
      });
    }, error => {
      console.log(error);
    });
  }
  getSpecialities() {
    this.expertUserService.specialities().subscribe((response) => {
      this.specialities = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.specialities.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.description
        };
        this.specialities.push(object);
      });
    }, error => {
      console.log(error);
    })
  }
  getReferrers() {
    this.referrerService.getReferrerPersonalInfo(0).subscribe(response => {
      this.referrers = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.referrers.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.description
        };
        this.referrers.push(object);
      });
    }, error => {
      console.log(error);
    });
  }
  getOccupancyTypes() {
    this.settingService.getMultiDiamensionalStuffValues("Occupancy", "OccupancyType").subscribe(response => {
      this.occupancyTypes = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.occupancyTypes.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.stuffValue
        };
        this.occupancyTypes.push(object);
      });
    }, error => {
      console.log(error);
    });
  }

  getOccupations() {
    this.settingService.getMultiDiamensionalStuffValues("Occupation", "OccupationType").subscribe(response => {
      this.occupations = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.occupations.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.stuffValue
        };
        this.occupations.push(object);
      });
    }, error => {
      console.log(error);
    });
  }

  getIncidentTypes() {
    this.settingService.getMultiDiamensionalStuffValues("Incident", "IncidentType").subscribe(response => {
      this.incidentTypes = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.incidentTypes.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.stuffValue
        };
        this.incidentTypes.push(object);
      });;
    }, error => {
      console.log(error);
    });
  }
  getExpertTypes() {
    this.settingService.getAllExpertType(0).subscribe(response => {
      this.expertTypes = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.expertTypes.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.expertTypeID,
          text: element.expertCategories
        };
        this.expertTypes.push(object);
      });;
    }, error => {
      console.log(error);
    });
  }


  onSelectOption(e:any, control){
    this.instructionForm.controls[control].setValue(e.value);
  }

  /* #endregion */

  /* #region  Medical Required Record */
  getRequiredMedicalRecord(e: any) {
    this.instructionForm.get('expertID').setValue(e.value)
    this.requiredMedicalRecordFormArray.controls.length = 0;
    if(e.value!=0){
      this.expertUserService.getExpertMedicalRequiredRecord(0, e.value).subscribe(response => {
        this.medicalRequiredRecordList = response.outputObject ? response.outputObject : null;
        if (this.medicalRequiredRecordList) {
          this.medicalRequiredRecordList.forEach(a => {
            this.addRequiredMedicalReqcord(a);
          });
        }
      }, error => {
        console.log(error);
      });
    }
  }

  get requiredMedicalRecordFormArray() {
    return this.instructionForm.get('requiredMedicalRecordFormArray') as FormArray;
  }

  addRequiredMedicalReqcord(data?: any) {
    this.requiredMedicalRecordFormArray.push(this.addRequiredMedicalFormGroup(data))
  }

  addRequiredMedicalFormGroup(data?: any) {
    debugger
    if (data) {
      return this.fb.group({
        recordName: [data.medicalRecordName ? data.medicalRecordName : ''],
        files: [null, Validators.required]
      });
    }
  }

  onSelectFile(files, recordName) {
    if (files.length == 0) {
      return;
    }
    else {
      let object = {
        recordName: recordName,
        file: files
      };
    }
  }


  /* #endregion */

  /* #region  Other Medical Record */

  get otherMedicalRecordFormArray() {
    return this.instructionForm.get('otherMedicalRecordFormArray') as FormArray;
  }

  addOtherMedicalRecord() {
    this.otherMedicalRecordFormArray.push(this.addOtherMedicalRecordFormGroup());
  }

  addOtherMedicalRecordFormGroup() {
    return this.fb.group({
      recordName: ['', Validators.required],
      files: [null, Validators.required]
    });
  }

  removeOtherMedicalRecordRow(index) {
    this.otherMedicalRecordFormArray.removeAt(index);
  }

  onSelectOtherMedicalRecord(files, recordName) {
    debugger
    if (files.length == 0) {
      return;
    }
    else {
      let object = {
        recordName: recordName,
        file: files
      };
      this.otherMedicalRecordUploadFiles.push(object);
    }

  }

  /* #endregion */

  /* #region  Form Submission */

  async saveInstructionForm() {
    debugger
    this.instructionFromSubmit = true;
    if (this.instructionForm.valid) {

      this.newInstruction = Object.assign({}, this.instructionForm.value);
      this.newInstruction.userID = +localStorage.getItem('userID');
      try {

        let instructionPersonalInfoResponse = await this.instructionService.createInstructionPersonalInfo(this.newInstruction).toPromise();
        if (instructionPersonalInfoResponse.outputObject) {
          this.instructionID = instructionPersonalInfoResponse.outputObject.pop().id;

          //create instruction special
          this.createInstructionSpecial();

          //create case hanlder
          await this.createCaseHandler();

          //create translator if have
          await this.createTranslator();

          //create medico record if have
          await this.uploadMedicalRecord();

          //create case info
          await this.createCaseInfo();

          this.toasterService.success('Instruction created successfully.');
          this.ngOnInit();
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  async createInstructionSpecial() {
    this.instructionSpecial = Object.assign({}, this.instructionForm.value);
    this.instructionSpecial.userID = +localStorage.getItem('userID');
    this.instructionSpecial.instructionID = this.instructionID;
    await this.instructionService.createInstructionSpecial(this.instructionSpecial).toPromise();
  }

  async createCaseHandler() {
    this.caseHandler = Object.assign({}, this.instructionForm.value);
    this.caseHandler.instructionID = this.instructionID;
    this.caseHandler.userID = +localStorage.getItem('userID');
    await this.instructionService.createInstructionCaseHandler(this.caseHandler).toPromise();
  }

  async createTranslator() {
    this.translator = Object.assign({}, this.instructionForm.value);
    if (this.translator.translatorName) {
      this.translator.userID = +localStorage.getItem('userID');
      this.translator.instructionID = this.instructionID;
      await this.instructionService.createInstructionTranslator(this.translator).toPromise();
    }
  }

  async uploadMedicalRecord() {
    if (this.requiredMedicalRecordUploadFiles) {
      this.requiredMedicalRecordUploadFiles.forEach(async element => {
        let formData = new FormData();
        formData.append("RecordName", element.recordName);
        formData.append("InstructionID", '' + this.instructionID);
        formData.append("IsReceived", 'true');
        formData.append("IsRequiredByExpert", 'true');
        formData.append("UserID", '' + localStorage.getItem('userID'));
        element.file.forEach((f) => formData.append("files", f));
        await this.instructionService.createInstructionMedicalRecord(formData).toPromise();
      });
    }

    if (this.otherMedicalRecordUploadFiles) {
      this.otherMedicalRecordUploadFiles.forEach(async element => {
        let formData = new FormData();
        formData.append("RecordName", element.recordName);
        formData.append("InstructionID", '' + this.instructionID);
        formData.append("IsReceived", 'true');
        formData.append("IsRequiredByExpert", 'false');
        formData.append("UserID", '' + localStorage.getItem('userID'));
        element.fiel.array.forEach((f) => formData.append("files", f))
        await this.instructionService.createInstructionMedicalRecord(formData).toPromise();
      });
    }
  }

  async createCaseInfo() {
    debugger
    this.caseInfo = Object.assign({}, this.instructionForm.value);
    this.caseInfo.userID = +localStorage.getItem('userID');
    this.caseInfo.instructionID = this.instructionID;
    await this.instructionService.createInstructionCaseInfo(this.caseInfo).toPromise();
  }
  /* #endregion */
}