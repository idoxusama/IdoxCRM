import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ExpertQuestion, Options } from 'src/app/Models/Medical Performa/ExpertQuestions';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { MedicalPerformaService } from 'src/app/Services/Medical Performa Service/medical-performa.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';

@Component({
  selector: 'app-expert-questions-create',
  templateUrl: './expert-questions-create.component.html',
  styleUrls: ['./expert-questions-create.component.css']
})
export class ExpertQuestionsCreateComponent implements OnInit {
  @ViewChild('confirmBox') confirmBox: ElementRef;

  public expertQuestionForm: FormGroup;
  public expertQuestionFormSubmit: Boolean;
  public expertQuestions: ExpertQuestion[] = [];
  public newExpertQuestion: ExpertQuestion[] = [];
  public questionOptions: Options[];
  public expertTypes: Array<Select2OptionData>;
  public experts: Array<Select2OptionData>;
  public sectionNames: Array<Select2OptionData>;
  public questionTypes: Array<Select2OptionData>;
  public optionTypes:Array<Select2OptionData>;
  public modalRef: BsModalRef;
  public sectionModal: any = {};
  public expertTypeId: number;
  public expertID: number;
  public isActiveAll:boolean;
  public isUpdate:boolean=false;

  constructor(private fb: FormBuilder,
    private settingService: SettingsService,
    private expertUserService: ExpertuserService,
    private medicalPerformaService: MedicalPerformaService,
    private toasterService: ToastrService,
    private modalService: BsModalService) { }

  async ngOnInit() {
    await this.getExpertTypes();
    await this.getSectionNames();
    await this.getQuestionTypes();
    this.createExpertQuestionForm();
  }

  /* #region  Prepare form */

  createExpertQuestionForm(data?: any) {
    if (data) {
      this.expertQuestionForm = this.fb.group({
        id: [data.id ? data.id : ''],
        srNo: [data.srNo ? data.srNo : '', Validators.required],
        sectionName: [data.sectionName ? data.sectionName : '', Validators.required],
        expertTypeID: [data.expertTypeID ? data.expertTypeID : '', Validators.required],
        expertID: [data.expertID ? data.expertID : '', Validators.required],
        questionName: [data.questionName ? data.questionName : '', Validators.required],
        qType: [data.qType ? data.qType : '', Validators.required],
        isRequired: [data.isRequired ? data.isRequired : false],
        isActive: [data.isActive ? data.isActive : false],
        isOptional: [data.isOptional ? data.isOptional : false],
        optionsFormArray: this.fb.array([])
      });
    }
    else {
      this.expertQuestionForm = this.fb.group({
        srNo: ['', Validators.required],
        sectionName: ['', Validators.required],
        expertTypeID: ['', Validators.required],
        expertID: ['', Validators.required],
        questionName: ['', Validators.required],
        qType: ['', Validators.required],
        isRequired: [true],
        isActive: [true],
        isOptional: [false],
        optionsFormArray: this.fb.array([])
      });
    }
  }

  get optionsFormArray() {
    return this.expertQuestionForm.get('optionsFormArray') as FormArray;
  }

  optionFormGroup(data?) {
    if(data){
      return this.fb.group({
        id:[data.id?data.id:''],
        optionName: [data.optionName?data.optionName:'', Validators.required],
        optionType: [data.optionType?data.optionType:'', Validators.required],
        isActive: [data.isActive?data.isActive:false, Validators.required]
      });
    }
    else{
      return this.fb.group({
        optionName: ['', Validators.required],
        optionType: ['', Validators.required],
        isActive: [true, Validators.required]
      });
    }
  }

  addOptionFormGroup() {
    this.optionsFormArray.push(this.optionFormGroup());
  }

  setOptionType(event,control,i){
    this.optionsFormArray.controls[i].get(control).setValue(event.value);
  }

  deleteOption(index){
    this.optionsFormArray.removeAt(index);
  }

  getQuestionOptions(id, template){
    this.questionOptions = this.expertQuestions.find(e=>e.id==id).options;
    this.modalRef = this.modalService.show(template);
  }
  /* #endregion */

  /* #region  Dropdowns */

  prepareDropDown(optionsArray: Array<Select2OptionData>, data?: any[], selectedValue?) {
    if (data) {
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
    }

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

  onSelectOption(event, control) {
    this.expertQuestionForm.get(control).setValue(event.value);
  }

  async selectExpert(event) {
    if (!event) return;

    if (event.value == '0') {
      this.openConfirmBox();
      this.expertQuestionForm.get('expertID').setValue('0');

      this.expertTypeId = this.expertQuestionForm.get('expertTypeID').value;
      this.expertID = this.expertQuestionForm.get('expertID').value;

      await this.getExpertQuestions();
    }
    else {
      this.expertQuestionForm.get('expertID').setValue(event.value);

      this.expertTypeId = this.expertQuestionForm.get('expertTypeID').value;
      this.expertID = this.expertQuestionForm.get('expertID').value;
      await this.getExpertQuestions();
    }
  }

  async selectExpertType(event, control) {
    this.expertQuestionForm.get(control).setValue(event.value);
    await this.getExperts(event.value);
  }

  async getExpertTypes(selectedId?) {
    let result = await this.settingService.getAllExpertType(0).toPromise();
    if (result) {
      this.expertTypes = [];
      result.outputObject.map(e => { e.id = e.expertTypeID; e.text = e.expertCategories });
      this.expertTypes = this.prepareDropDown(this.expertTypes, result.outputObject, selectedId);
    }
  }

  async getExperts(id, selectedId?) {
    let result = await this.expertUserService.getExpertProfileInfo("ExpertType", id, "", "completedprofile").toPromise();
    if (result.outputObject) {
      this.experts = [];
      result.outputObject.map(e => { e.text = e.firstName; });
      this.experts = this.prepareDropDown(this.experts, result.outputObject, selectedId);

      //add general option
      let generalOptions = {
        id: '0',
        text: 'General Option'
      };
      this.experts.push(generalOptions);
    }
  }

  async getSectionNames(selectedId?) {
    let modal = {
      Questionnaire: "expert",
      FilterName: "sectiontype"
    };
    let result = await this.settingService.getPerformaQuestionniareValue(modal).toPromise();
    if (result.outputObject) {
      this.sectionNames = [];
      result.outputObject.map(e => { e.id = e.sectionType, e.text = e.sectionType });
      this.sectionNames = this.prepareDropDown(this.sectionNames, result.outputObject, selectedId);
    }
  }

  async getQuestionTypes(selectedId?) {
    let modal = {
      Questionnaire: "expert",
      FilterName: "inputType"
    };
    let result = await this.settingService.getPerformaQuestionniareValue(modal).toPromise();
    if (result.outputObject) {
      this.questionTypes = [];
      result.outputObject.map(e => { e.id = e.inputType, e.text = e.inputType });
      this.questionTypes = this.prepareDropDown(this.questionTypes, result.outputObject, selectedId);
    }
  }

  onQuestionTypeChange(event,control){
    if(!event) return;
    this.expertQuestionForm.get(control).setValue(event.value);
    this.getOptionTypes(event.value);
  }
  getOptionTypes(optionType) {
    let options =[];
    options.push(this.questionTypes.find(e=>e.id==optionType));
    this.optionTypes=[];
    this.optionTypes = optionType?this.prepareDropDown(this.optionTypes,options,optionType):this.questionTypes;
  }
  /* #endregion */

  async getExpertQuestions(){
    this.expertQuestions.length = 0;
    if (this.expertID && this.expertTypeId) {
      let result = await this.medicalPerformaService.getQuestionariesForExpert(this.expertTypeId,this.expertID).toPromise();
      debugger
      if (result.outputObject) {
        let questions = result.outputObject;
        questions.forEach(element => {
          element.questionList.forEach(e => {
            this.expertQuestions.push(e);
            this.isActiveAll = e.isActive === true ? true : false;
          });
        });
      }
    }
  }

  openConfirmBox(){
    this.modalRef = this.modalService.show(this.confirmBox);
  }

  
  openSectionModal(template) {
    this.modalRef = this.modalService.show(template);
  }

  getButtonLable() {
    return !this.isUpdate ? 'Add Question' : 'Save';
  }

  addNewSection() {
    this.sectionNames = this.sectionNames.slice();
    let sectionName = this.sectionModal.sectionName;
    if (!this.sectionNames.some(e => e.text == sectionName)) {
      let object = {
        id: sectionName,
        text: sectionName
      };
      this.sectionNames.push(object);
      this.modalRef.hide();
    }
    else {
      this.toasterService.warning('Section Name already exist!');
    }
  }

  async activeOrInActive(event) {
    let value = event.target.checked;
    let updateItemsList = [];
    if (value) {

      //make status object list
      this.expertQuestions.forEach(x => {
        let object = {
          ID: x.id,
          Event: 'IsActive',
          Value: 1,
          UserID: localStorage.getItem('userID')
        };
        updateItemsList.push(object);
      });

      //submit to api for update status
      let model = {
        PerformaQuesStatusList: updateItemsList
      };
      let res = await this.medicalPerformaService.performaQExpertStatusUpdate(model).toPromise();
      this.toasterService.success('Questions are active.');
      await this.getExpertQuestions();
    }
    else {
      //make status object list
      this.expertQuestions.forEach(x => {
        let object = {
          ID: x.id,
          Event: 'IsActive',
          Value: 0,
          UserID: localStorage.getItem('userID')
        };
        updateItemsList.push(object);
      });

      //submit to api for update status
      let model = {
        PerformaQuesStatusList: updateItemsList
      };
      let res = await this.medicalPerformaService.performaQExpertStatusUpdate(model).toPromise();
      this.toasterService.success('Questions are un active.');
      await this.getExpertQuestions();
    }
  }

  async deleteQuestion(id){
    let deleteItemList=[];
    let object = {
      ID: id,
      Event: 'IsDeleted',
      Value: 1,
      UserID: localStorage.getItem('userID')
    };
    deleteItemList.push(object);

    let modal ={
      PerformaQuesStatusList:deleteItemList
    };

    await this.medicalPerformaService.performaQClientStatusUpdate(modal).toPromise();
    await this.getExpertQuestions();
    this.toasterService.success('Question delete successfully!');
  }

  async submitExpertQuestions() {
    this.expertQuestionFormSubmit = true;
    if (this.expertQuestionForm.valid) {
      if (this.isUpdate) {
        let question = new ExpertQuestion();
        question = Object.assign(question,this.expertQuestionForm.value);
        question.userID = +localStorage.getItem('userID');
        this.optionsFormArray.controls.forEach(x=>{
          question.options.push(x.value);
        });        
        question.options.forEach(e => { e.userID = +localStorage.getItem('userID') });

        await this.medicalPerformaService.updatePerformaQuestionniareForExpert(question).toPromise();
        this.toasterService.success('Question update successfully!');
        this.isUpdate = false;
        await this.getSectionNames();
        await this.getQuestionTypes();
        this.createExpertQuestionForm();
        
        this.expertQuestionForm.get('expertTypeID').setValue(question.expertTypeID);
        this.expertQuestionForm.get('expertID').setValue(question.expertID);
        
        await this.getExpertQuestions();
        this.expertQuestionFormSubmit = false;
      }
      else {
        let question = new ExpertQuestion();
        question = Object.assign(question, this.expertQuestionForm.value);
        question.userID = +localStorage.getItem('userID');
        this.optionsFormArray.controls.forEach(x => {
          question.options.push(x.value);
        });
        question.options.forEach(e => { e.userID = +localStorage.getItem('userID') });

        if (!this.expertQuestions.some(e => e.srNo == question.srNo)) {
          this.expertQuestions.push(question);
          this.newExpertQuestion.push(question);
          this.expertQuestionFormSubmit=false;
          this.ngOnInit();
        }
        else {
          this.toasterService.warning('This serial no already exist. Please enter different!.');
        }
      }
    }
  }

  async editQuestion(id) {
    this.isUpdate = true;
    let question = this.expertQuestions.find(e => e.id == id);
    if (!question) return;
    this.createExpertQuestionForm(question);

    let options = this.expertQuestions.find(e=>e.id==id).options;
    options.forEach(x=>{
      this.optionsFormArray.push(this.optionFormGroup(x));
    });
  }

  async saveAll() {
    if (this.newExpertQuestion) {
      let modal = {
        PerformaQuestionExpertList: this.newExpertQuestion
      };

      await this.medicalPerformaService.createPerformaQuestionniareForExpert(modal).toPromise();
      this.toasterService.success('Questions submit successfully!');
      await this.getExpertQuestions();
      this.newExpertQuestion.length=0;
    }
  }
}
