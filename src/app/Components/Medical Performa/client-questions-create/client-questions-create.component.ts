import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ClientQuestion } from 'src/app/Models/Medical Performa/ClientQuestions';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { MedicalPerformaService } from 'src/app/Services/Medical Performa Service/medical-performa.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';

@Component({
  selector: 'app-client-questions-create',
  templateUrl: './client-questions-create.component.html',
  styleUrls: ['./client-questions-create.component.css']
})
export class ClientQuestionsCreateComponent implements OnInit {
  @ViewChild('confirmBox') confirmBox: ElementRef;

  public clientQuestionForm: FormGroup;
  public clientQuestionFormSubmit: Boolean;
  public clientQuestions: ClientQuestion[] = [];
  public newClientQuestion: ClientQuestion[] = [];
  public expertTypes: Array<Select2OptionData>;
  public experts: Array<Select2OptionData>;
  public sectionNames: Array<Select2OptionData>;
  public questionTypes: Array<Select2OptionData>;
  public modalRef: BsModalRef;
  public sectionModal: any = {};
  public isActiveAll: boolean;
  public isUpdate: boolean = false;
  public expertTypeId: number;
  public expertID: number;

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
    this.createClientQuestionForm();
  }

  createClientQuestionForm(data?: any) {
    if (data) {
      this.clientQuestionForm = this.fb.group({
        id: [data.id ? data.id : ''],
        srNo: [data.srNo ? data.srNo : '', Validators.required],
        sectionName: [data.sectionName ? data.sectionName : '', Validators.required],
        expertTypeID: [data.expertTypeID ? data.expertTypeID : '', Validators.required],
        expertID: [data.expertID ? data.expertID : '', Validators.required],
        questionName: [data.questionName ? data.questionName : '', Validators.required],
        questionType: [data.questionType ? data.questionType : '', Validators.required],
        isRequired: [data.isRequired ? data.isRequired : false],
        isActive: [data.isActive ? data.isActive : false],
      });
    }
    else {
      this.clientQuestionForm = this.fb.group({
        srNo: ['', Validators.required],
        sectionName: ['', Validators.required],
        expertTypeID: ['', Validators.required],
        expertID: ['', Validators.required],
        questionName: ['', Validators.required],
        questionType: ['', Validators.required],
        isRequired: [true],
        isActive: [true]
      });
    }

  }

  /* #region  Dropdowns */

  prepareDropDown(optionsArray: Array<Select2OptionData>, data?: any[], selectedValue?) {
    let arrayOfOptions = [];
    arrayOfOptions = optionsArray;
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
    this.clientQuestionForm.get(control).setValue(event.value);
  }

  async selectExpert(event) {
    if (!event) return;

    if (event.value == '0') {
      this.openConfirmBox();
      this.clientQuestionForm.get('expertID').setValue('0');

      this.expertTypeId = this.clientQuestionForm.get('expertTypeID').value;
      this.expertID = this.clientQuestionForm.get('expertID').value;

      await this.getClientQuestions();
    }
    else {
      this.clientQuestionForm.get('expertID').setValue(event.value);

      this.expertTypeId = this.clientQuestionForm.get('expertTypeID').value;
      this.expertID = this.clientQuestionForm.get('expertID').value;
      await this.getClientQuestions();
    }
  }

  async selectExpertType(event, control) {
    this.clientQuestionForm.get(control).setValue(event.value);
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
      Questionnaire: "client",
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
      Questionnaire: "client",
      FilterName: "inputType"
    };
    let result = await this.settingService.getPerformaQuestionniareValue(modal).toPromise();
    if (result.outputObject) {
      this.questionTypes = [];
      result.outputObject.map(e => { e.id = e.inputType, e.text = e.inputType });
      this.questionTypes = this.prepareDropDown(this.questionTypes, result.outputObject, selectedId);
    }
  }
  /* #endregion */

  openConfirmBox() {
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

  async getClientQuestions() {
    this.clientQuestions.length = 0;
    if (this.expertID && this.expertTypeId) {
      let result = await this.medicalPerformaService.getQuestionariesForClient(this.expertTypeId, this.expertID).toPromise();
      if (result.outputObject) {
        let questions = result.outputObject;
        questions.forEach(element => {
          element.questionList.forEach(e => {
            this.clientQuestions.push(e);
            this.isActiveAll = e.isActive === true ? true : false;
          });
        });
      }
    }
  }

  async activeOrInActive(event) {
    let value = event.target.checked;
    let updateItemsList = [];
    if (value) {

      //make status object list
      this.clientQuestions.forEach(x => {
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
      let res = await this.medicalPerformaService.performaQClientStatusUpdate(model).toPromise();
      this.toasterService.success('Questions are active.');
      await this.getClientQuestions();
    }
    else {
      //make status object list
      this.clientQuestions.forEach(x => {
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
      let res = await this.medicalPerformaService.performaQClientStatusUpdate(model).toPromise();
      this.toasterService.success('Questions are un active.');
      await this.getClientQuestions();
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
    await this.getClientQuestions();
    this.toasterService.success('Question delete successfully!');
  }

  async submitClientQuestions() {
    this.clientQuestionFormSubmit = true;
    if (this.clientQuestionForm.valid) {
      if (this.isUpdate) {
        let object = Object.assign(this.clientQuestionForm.value);
        object.userID = localStorage.getItem('userID');
        await this.medicalPerformaService.updatePerformaQuestionniareForClient(object).toPromise();
        this.toasterService.success('Question update successfully!');
        this.isUpdate = false;
        await this.getSectionNames();
        await this.getQuestionTypes();
        await this.getClientQuestions();
        this.createClientQuestionForm();

        this.clientQuestionForm.get('expertTypeID').setValue(object.expertTypeID);
        this.clientQuestionForm.get('expertID').setValue(object.expertID);
        
        this.clientQuestionFormSubmit = false;
      }
      else {
        let object = Object.assign(this.clientQuestionForm.value);
        if (!this.clientQuestions.some(e => e.srNo == object.srNo)) {
          this.clientQuestions.push(object);
          this.newClientQuestion.push(object);
        }
        else {
          this.toasterService.warning('This serial no already exist. Please enter different!.');
        }
      }
    }
  }

  async editQuestion(id) {
    this.isUpdate = true;
    let question = this.clientQuestions.find(e => e.id == id);
    if (!question) return;
    this.createClientQuestionForm(question);

    let expertTypeID = this.clientQuestionForm.get('expertTypeID').value;
    let expertID = this.clientQuestionForm.get('expertID').value;
    let sectionName = this.clientQuestionForm.get('sectionName').value;
    let questionType = this.clientQuestionForm.get('questionType').value;

    this.expertTypes = this.prepareDropDown(this.expertTypes, null, expertTypeID);
    this.experts = this.prepareDropDown(this.experts, null, expertID);
    await this.getSectionNames(sectionName);
    await this.getQuestionTypes(questionType);
  }

  async saveAll() {
    if (this.newClientQuestion) {
      this.newClientQuestion.forEach(e => {
        e.userID = +localStorage.getItem('userID');
      });

      let modal = {
        performaQuestionForClientList: this.newClientQuestion
      };

      await this.medicalPerformaService.createPerformaQuestionniareForClient(modal).toPromise();
      this.toasterService.success('Questions submit successfully!');
      await this.getClientQuestions();
    }
  }
}
