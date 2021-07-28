import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MedicalRequiredRecordList } from 'src/app/Models/Experts Model/User';
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
  selector: 'app-instruction-detail',
  templateUrl: './instruction-detail.component.html',
  styleUrls: ['./instruction-detail.component.scss']
})
export class InstructionDetailComponent implements OnInit {
  instructionId: string;

  instPersonalInfo: NewInstruction = new NewInstruction();
  instSpecialInfo: IntructionSpecial = new IntructionSpecial();
  instCaseHandler: CaseHandler = new CaseHandler();
  instMedicoRecord: MedcoRecord[] = [];
  instTranslator: Tranlator = new Tranlator();
  instCaseInfo: CaseInfo = new CaseInfo();


  instPersonalInfoForm: FormGroup;
  instPersonalInfoFormSubmit: boolean = false;
  instSpecialInfoForm: FormGroup;
  instSpecialInfoFormSubmit: boolean = false;
  instCaseHandlerForm: FormGroup;
  instCaseHandlerFormSubmit: boolean = false;
  instTranslatorFrom: FormGroup;
  instTranslatorFromSubmit: boolean = false;
  instCaseInfoForm: FormGroup;
  instCaseInfoFormSubmit: boolean = false;

  instMedicoRecordForm: FormGroup;
  instMedicoRecordFormSubmit: boolean = false;
  expertMedicalRecords:MedicalRequiredRecordList[]=[];
  filesToUpload = [];

  public occupancyTypes: Array<Select2OptionData>;
  public occupations: Array<Select2OptionData>;
  public experts: Array<Select2OptionData>;
  public specialities: Array<Select2OptionData>;
  public medicalRequiredRecordList: Array<Select2OptionData>;
  public referrers: Array<Select2OptionData>;
  public incidentTypes: Array<Select2OptionData>;
  public expertTypes: Array<Select2OptionData>;


  modalRef: BsModalRef;
  maxDate = new Date();

  constructor(private instructionService: InstructionService,
    private expertUserService: ExpertuserService,
    private settingService: SettingsService,
    private referrerService: ReferrerService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private toasterService: ToastrService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      this.instructionId = p['id'];
    });

    if (this.instructionId) {
      this.personalInfo();
      this.caseHandler();
      this.specialInfo();
      this.translator();
      this.caseInfo();
      this.medicalRecord();
    }
  }

  /* #region  Get Instruction Detail */

  personalInfo() {
    this.instructionService.getInstructionPersonalInfo(this.instructionId).subscribe(res => {
      this.instPersonalInfo = res.outputObject ? res.outputObject.pop() : null;
    }, error => {
      console.log(error);
    });
  }

  specialInfo() {
    this.instructionService.getInstructionSpecial(0, this.instructionId).subscribe(res => {
      this.instSpecialInfo = res.outputObject ? res.outputObject.pop() : null;
    }, error => {
      console.log(error);
    });
  }

  caseHandler() {
    this.instructionService.getInstructionCaseHandler(0, this.instructionId).subscribe(res => {
      this.instCaseHandler = res.outputObject ? res.outputObject.pop() : null;
    }, error => {
      console.log(error);
    });
  }

  translator() {
    this.instructionService.getInstructionTranslator(0, this.instructionId).subscribe(res => {
      this.instTranslator = res.outputObject ? res.outputObject.pop() : null;
    }, error => {
      console.log(error);
    });
  }

  caseInfo() {
    this.instructionService.getInstructionCaseInfo(0, this.instructionId).subscribe(res => {
      this.instCaseInfo = res.outputObject ? res.outputObject.pop() : null;
    }, error => {
      console.log(error);
    });
  }
  medicalRecord() {
    this.instructionService.getInstructionMedicalRecord(0, this.instructionId).subscribe(res => {
      this.instMedicoRecord = res.outputObject;
    }, error => {
      console.log(error);
    });
  }
  /* #endregion */

  /* #region  Dropdowns */
  prepareDropDown(optionsArray: Array<Select2OptionData>, data: any[], selectedValue) {
    let defualtOption = {
      id: '',
      text: 'Select Option'
    };
    optionsArray.push(defualtOption);
    data.forEach(element => {
      let object = {
        id: element.id,
        text: element.text
      };
      optionsArray.push(object);
    });
    if (selectedValue) {
      let options = optionsArray;
      optionsArray.forEach(function (item, i) {
        if (item.id == selectedValue) {
          options.splice(i, 1);
          options.unshift(item);
        }
      });
      optionsArray = options;
    }

    return optionsArray;
  }

  getExperts(selectedId?) {
    this.expertUserService.getExpertProfileInfo("Expert", 0, "", "completedprofile").subscribe(response => {
      response.outputObject.map(e => { e.text = e.firstName; });
      this.experts = [];
      this.experts = this.prepareDropDown(this.experts, response.outputObject, selectedId);
    }, error => {
      console.log(error);
    });
  }
  getSpecialities(selectedId?) {
    this.expertUserService.specialities().subscribe((response) => {
      response.outputObject.map(e => { e.text = e.description; });
      this.specialities = [];
      this.specialities = this.prepareDropDown(this.specialities, response.outputObject, selectedId);
    }, error => {
      console.log(error);
    })
  }
  getReferrers(selectedId?) {
    this.referrerService.getReferrerPersonalInfo(0).subscribe(response => {
      response.outputObject.map(e => { e.text = e.description; });
      this.referrers = [];
      this.referrers = this.prepareDropDown(this.referrers, response.outputObject, selectedId);
    }, error => {
      console.log(error);
    });
  }
  getOccupancyTypes(selectedId?) {
    this.settingService.getMultiDiamensionalStuffValues("Occupancy", "OccupancyType").subscribe(response => {
      response.outputObject.map(e => { e.text = e.stuffValue; });
      this.occupancyTypes = [];
      this.occupancyTypes = this.prepareDropDown(this.occupancyTypes, response.outputObject, selectedId);
    }, error => {
      console.log(error);
    });
  }

  getOccupations(selectedId?) {
    this.settingService.getMultiDiamensionalStuffValues("Occupation", "OccupationType").subscribe(response => {
      response.outputObject.map(e => { e.text = e.stuffValue; });
      this.occupations = [];
      this.occupations = this.prepareDropDown(this.occupations, response.outputObject, selectedId);
    }, error => {
      console.log(error);
    });
  }

  getIncidentTypes(selectedId) {
    this.settingService.getMultiDiamensionalStuffValues("Incident", "IncidentType").subscribe(response => {
      response.outputObject.map(e => { e.text = e.stuffValue; });
      this.incidentTypes = [];
      this.incidentTypes = this.prepareDropDown(this.incidentTypes, response.outputObject, selectedId);
    }, error => {
      console.log(error);
    });
  }
  getExpertTypes(selectedId?) {
    this.settingService.getAllExpertType(0).subscribe(response => {
      response.outputObject.map(e => { e.text = e.expertCategories; e.id=e.expertTypeID; });
      this.expertTypes = [];
      this.expertTypes = this.prepareDropDown(this.expertTypes, response.outputObject, selectedId)
    }, error => {
      console.log(error);
    });
  }

  getExpertRequiredMedicalRecord(expertID){
    this.expertUserService.getExpertMedicalRequiredRecord(0,expertID).subscribe(res=>{
      this.expertMedicalRecords = res.outputObject;
      this.createExpertRequiredRecordForm();
    },error=>{
      console.log(error);
    });
  }
  onSelectOption($event, formName, control) {
    formName.get(control).setValue($event.value);
    if(control==='expertID'){
      this.getExpertRequiredMedicalRecord($event.value);
    }
  }

  /* #endregion */

  /* #region  Create Forms */
  createPersonalInfoForm() {
    let info = this.instPersonalInfo;
    this.instPersonalInfoForm = this.fb.group({
      id: [info.id ? info.id : ''],
      firstName: [info.firstName ? info.firstName : '', Validators.required],
      lastName: [info.lastName ? info.lastName : '', Validators.required],
      middleName: [info.middleName ? info.middleName : ''],
      gender: [info.gender ? info.gender : '', Validators.required],
      dob: [info.dob ? info.dob : '', Validators.required],
      email: [info.email ? info.email : '', [Validators.required, Validators.email]],
      mobileNumber: [info.mobileNumber ? info.mobileNumber : '', Validators.required],
      county: [info.county ? info.county : '', Validators.required],
      town: [info.town ? info.town : '', Validators.required],
      postCode: [info.postCode ? info.postCode : '', Validators.required],
      cO: [info.co ? info.co : ''],
      addressLine1: [info.addressLine1 ? info.addressLine1 : '', Validators.required],
      addressLine2: [info.addressLine2 ? info.addressLine2 : ''],
      occupancyTypeID: [info.occupancyTypeID ? info.occupancyTypeID : '', Validators.required],
      occupationID: [info.occupationID ? info.occupationID : '', Validators.required],
      userID: [info.userID ? info.userID : localStorage.getItem('userID')],
      instructionCode: [info.instructionCode ? info.instructionCode : '']
    });
  }

  createCaseHandlerForm() {
    let handler = this.instCaseHandler
    this.instCaseHandlerForm = this.fb.group({
      id: [handler.id ? handler.id : ''],
      instructionID: [handler.instructionID ? handler.instructionID : this.instructionId],
      caseHandlerName: [handler.caseHandlerName ? handler.caseHandlerName : '', Validators.required],
      caseHandlerEmail: [handler.caseHandlerEmail ? handler.caseHandlerEmail : '', [Validators.required, Validators.email]],
      caseHandlerPhone: [handler.caseHandlerPhone ? handler.caseHandlerPhone : '', Validators.required],
      caseHandlerFax: [handler.caseHandlerFax ? handler.caseHandlerFax : ''],
      userID: [handler.userID ? handler.userID : localStorage.getItem('userID')]
    });
  }

  createTranslatorForm() {
    let translator = this.instTranslator;
    this.instTranslatorFrom = this.fb.group({
      id: [translator.id ? translator.id : ''],
      instructionID: [translator.instructionID ? translator.instructionID : this.instructionId],
      translatorLanguages: [translator.translatorLanguages ? translator.translatorLanguages : ''],
      translatorName: [translator.translatorName ? translator.translatorName : ''],
      translatorEmail: [translator.translatorEmail ? translator.translatorEmail : '', Validators.email],
      translatorPhone: [translator.translatorPhone ? translator.translatorPhone : ''],
      translatorCO: [translator.translatorCO ? translator.translatorCO : ''],
      userID: [translator.userID ? translator.userID : localStorage.getItem('userID')]
    });
  }

  createCaseInfoForm() {
    let caseInfo = this.instCaseInfo;
    this.instCaseInfoForm = this.fb.group({
      id: [caseInfo.id ? caseInfo.id : ''],
      instructionID: [caseInfo.instructionID ? caseInfo.instructionID : this.instructionId],
      accidentCircumstances: [caseInfo.accidentCircumstances ? caseInfo.accidentCircumstances : '', Validators.required],
      assignmentDate: [caseInfo.assignmentDate ? new Date(caseInfo.assignmentDate) : '', Validators.required],
      priority: [caseInfo.priority ? caseInfo.priority : ''],
      startTime: [caseInfo.startTime ? caseInfo.startTime : ''],
      instructionType: [caseInfo.instructionType ? caseInfo.instructionType : '', Validators.required],
      appointmentDate: [caseInfo.appointmentDate ? new Date(caseInfo.appointmentDate) : ''],
      clinicType: [caseInfo.clinicType ? caseInfo.clinicType : '', Validators.required],
      isInitialAssessment: [caseInfo.isInitialAssessment ? caseInfo.isInitialAssessment : false],
      noOfSessions: [caseInfo.noOfSessions ? caseInfo.noOfSessions : '', Validators.required],
      isCourtCase: [caseInfo.isCourtCase ? caseInfo.isCourtCase : false],
      courtDate: [caseInfo.courtDate ? new Date(caseInfo.courtDate) : ''],
      isTranslatorRequired: [caseInfo.isTranslatorRequired ? caseInfo.isTranslatorRequired : false],
      instructionDeadLineDate: [caseInfo.instructionDeadLineDate ? new Date(caseInfo.instructionDeadLineDate) : ''],
      userID: [caseInfo.userID ? caseInfo.userID : localStorage.getItem('userID')]
    });
  }

  createSpecialInfoForm() {
    let info = this.instSpecialInfo;
    this.instSpecialInfoForm = this.fb.group({
      id: [info.id ? info.id : ''],
      instructionID: [info.instructionID ? info.instructionID : this.instructionId],
      expertID: [info.expertID ? info.expertID : '', Validators.required],
      referrerID: [info.referrerID ? info.referrerID : '', Validators.required],
      specialityID: [info.specialityID ? info.specialityID : '', Validators.required],
      incidentTypeID: [info.incidentTypeID ? info.incidentTypeID : '', Validators.required],
      specialNote: [info.specialNote ? info.specialNote : ''],
      isSpecialRestrictionNeed: [info.isSpecialRestrictionNeed ? info.isSpecialRestrictionNeed : false],
      specialRestrictionNeed: [info.specialRestrictionNeed ? info.specialRestrictionNeed : ''],
      instructionState: [info.instructionState ? info.instructionState : '1'],
      isApproved: [info.isApproved ? info.isApproved : true],
      userID: [info.userID ? info.userID : localStorage.getItem('userID')],
      requiredMedicalRecordFormArray:this.fb.array([])
    });
  }

  get requiredMedicalRecordFormArray(){
    return this.instSpecialInfoForm.get('requiredMedicalRecordFormArray') as FormArray;
  }

  addFormGroup(data?:any){
    if (data) {
      return this.fb.group({
        recordName: [data.medicalRecordName ? data.medicalRecordName : ''],
        files: [null, Validators.required]
      });
    }
  }

  checkRecordExist(){
    let result=false;
    for (let i = 0; i < this.expertMedicalRecords.length; i++) {
      for (const iterator of this.instMedicoRecord) {
        result = iterator.recordName == this.expertMedicalRecords[i].medicalRecordName ? true : false;
      }
    }
    return result;
  }

  createExpertRequiredRecordForm(){
    if(this.instMedicoRecord && this.expertMedicalRecords){
      this.requiredMedicalRecordFormArray.controls.length=0;
      debugger
      let result = this.checkRecordExist();
      if(!result) {
        this.expertMedicalRecords.forEach(a => {
          this.requiredMedicalRecordFormArray.push(this.addFormGroup(a));
        });
      }
    }
  }

  createInstMedicalForm() {
    this.instMedicoRecordForm = this.fb.group({
      recordName: ['', Validators.required],
      files: [null, Validators.required]
    });
  }

  /* #endregion */

  /* #region  Open Modals */
  openPersonalInfoModal(template) {
    this.createPersonalInfoForm();

    let occupancyTypeID = this.instPersonalInfoForm.get('occupancyTypeID').value;
    let occupationID = this.instPersonalInfoForm.get('occupationID').value;

    this.getOccupancyTypes(occupancyTypeID);
    this.getOccupations(occupationID);

    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  openCaseHandlerModal(template) {
    this.createCaseHandlerForm();
    this.modalRef = this.modalService.show(template);
  }

  openTranslatorModal(template) {
    this.createTranslatorForm();
    this.modalRef = this.modalService.show(template);
  }

  openCaseInfoModal(template) {
    this.createCaseInfoForm();
    let expertTypeID = this.instCaseInfoForm.get('clinicType').value;
    let incidentTypeID = this.instCaseInfoForm.get('instructionType').value;

    this.getExpertTypes(expertTypeID);
    this.getIncidentTypes(incidentTypeID);

    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  openSpecialModal(template) {
    this.createSpecialInfoForm();

    let expertId = this.instSpecialInfoForm.get('expertID').value;
    let incidentTypeID = this.instSpecialInfoForm.get('incidentTypeID').value;
    let referrerID = this.instSpecialInfoForm.get('referrerID').value;
    let specialityID = this.instSpecialInfoForm.get('specialityID').value;

    this.getExperts(expertId);
    this.getIncidentTypes(incidentTypeID);
    this.getReferrers(referrerID);
    this.getSpecialities(specialityID);

    this.modalRef = this.modalService.show(template);
  }

  openUploadRecordModal(template) {
    this.createInstMedicalForm();
    this.modalRef = this.modalService.show(template);
  }

  /* #endregion */

  /* #region  Submit Actions */
  submitPersonalInfo() {
    this.instPersonalInfoFormSubmit = true;
    if (this.instPersonalInfoForm.valid) {
      this.instPersonalInfo = Object.assign({}, this.instPersonalInfoForm.value);
      this.instructionService.updateInstructionPersonalInfo(this.instPersonalInfo).subscribe(res => {
        this.toasterService.success('Personal Info has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.personalInfo();
      });
    }
  }

  submitCaseHandler() {
    this.instCaseHandlerFormSubmit = true;
    if (this.instCaseHandlerForm.valid) {
      this.instCaseHandler = Object.assign({}, this.instCaseHandlerForm.value);
      this.instructionService.updateInstructionCaseHandler(this.instCaseHandler).subscribe(res => {
        this.toasterService.success('Case Handler has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.caseHandler();
      });
    }
  }

  submitTranslator() {
    this.instTranslatorFromSubmit = true;
    if (this.instTranslatorFrom.valid) {
      this.instTranslator = Object.assign({}, this.instTranslatorFrom.value);
      this.instructionService.updateInstructionTranslator(this.instTranslator).subscribe(res => {
        this.toasterService.success('Translator has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.translator();
      });
    }
  }

  submitCaseInfo() {
    this.instCaseInfoFormSubmit = true;
    if (this.instCaseInfoForm.valid) {
      this.instCaseInfo = Object.assign({}, this.instCaseInfoForm.value);
      this.instructionService.updateInstructionCaseInfo(this.instCaseInfo).subscribe(res => {
        this.toasterService.success('Case info has been updated.');
        this.modalRef.hide();
      }, error => {
        console.log(error);
      }, () => {
        this.caseInfo();
      });
    }
  }

  submitSpecialInfo() {
    this.instSpecialInfoFormSubmit = true;
    if (this.instSpecialInfoForm.valid) {
      this.instSpecialInfo = Object.assign({}, this.instSpecialInfoForm.value);
      this.instructionService.updateInstructionSpecial(this.instSpecialInfo).subscribe(res => {
        this.toasterService.success('Special Info Updated Sucessfully.');
      }, error => {
        console.log(error);
      }, () => {
        this.specialInfo();
        this.requiredMedicalRecordFormArray.controls.forEach(e=>{
          this.uploadMedicalRecord(e.get('recordName').value);
        });
      });
    }
  }

  onSelectFiles(files,recordName) {
    if (files.length === 0) return;
    for (let index = 0; index < files.length; index++) {
      this.filesToUpload.push(files[index]);
    }
  }

  submitMedicalRecord() {
    this.instMedicoRecordFormSubmit = true;
    if (this.instMedicoRecordForm.valid) {
      this.uploadMedicalRecord(this.instMedicoRecordForm.get('recordName').value);
    }
  }

  uploadMedicalRecord(recordName){
    let formData = new FormData();

    formData.append("InstructionID", this.instructionId);
    formData.append("RecordName", recordName);
    formData.append("IsReceived", "true");
    formData.append("IsRequiredByExpert", "false");
    formData.append("UserID", localStorage.getItem('userID'));
    this.filesToUpload.forEach((f) => formData.append("Files", f));

    this.instructionService.createInstructionMedicalRecord(formData).subscribe(res => {
      this.toasterService.success('Medical Record uploaded successfully.');
      this.modalRef.hide();
    }, error => {
      console.log(error);
    }, () => {
      this.medicalRecord();
    });
  }
  /* #endregion */

  /* #region  Delete Medical Record */
  deleteMedicalRecord(id) {
    let modal:any={
      id:id,
      event:'IsDeleted',
      value:1,
      functionName:'InstructionMedicalRecord',
      userID:localStorage.getItem('userID')
    };

    this.instructionService.updateInstructionStatus(modal).subscribe(res=>{
      this.toasterService.success('Medical Record deleted successfully');
    },error=>{
      console.log(error);
    },()=>{
      this.medicalRecord();
    });
  }
  /* #endregion */
}
