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
  public newClientQuestion:ClientQuestion[]=[];
  public expertTypes: Array<Select2OptionData>;
  public experts: Array<Select2OptionData>;
  public sectionNames: Array<Select2OptionData>;
  public questionTypes: Array<Select2OptionData>;
  public modalRef: BsModalRef;
  public sectionModal:any={};
  public isActiveAll:boolean;

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

  createClientQuestionForm(data?:any) {
    if(data){
      this.clientQuestionForm = this.fb.group({
        id:[data.id?data.id:''],
        srNo: [data.srNo?data.srNo:'', Validators.required],
        sectionName: [data.sectionName?data.sectionName:'', Validators.required],
        expertTypeID: [data.expertTypeID?data.expertTypeID:'', Validators.required],
        expertID: [data.expertID?data.expertID:'', Validators.required],
        questionName: [data.questionName?data.questionName:'', Validators.required],
        questionType: [data.questionType?data.questionType:'', Validators.required],
        isRequired: [data.isRequired?data.isRequired:true, Validators.required],
        isActive: [data.isActive?data.isActive:true, Validators.required]
      });
    }
    else{
      this.clientQuestionForm = this.fb.group({
        srNo: ['', Validators.required],
        sectionName: ['', Validators.required],
        expertTypeID: ['', Validators.required],
        expertID: ['', Validators.required],
        questionName: ['', Validators.required],
        questionType: ['', Validators.required],
        isRequired: [true, Validators.required],
        isActive: [true, Validators.required]
      });
    }
   
  }

  /* #region  Dropdowns */

  onSelectOption(event, control) {
    this.clientQuestionForm.get(control).setValue(event.value);
  }

  async selectExpert(event) {
    if (!event) return;

    if (event.value == '0') {
      this.openConfirmBox();
      this.clientQuestionForm.get('expertID').setValue('0');
    }
    else {
      this.clientQuestionForm.get('expertID').setValue(event.value);
      await this.getClientQuestions();
    }
  }

  async selectExpertType(event, control) {
    this.clientQuestionForm.get(control).setValue(event.value);
    await this.getExperts(event.value);
  }

  async getExpertTypes() {
    let result = await this.settingService.getAllExpertType(0).toPromise();
    if (result) {
      this.expertTypes = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.expertTypes.push(defualtOptiton);
      result.outputObject.forEach(element => {
        let object = {
          id: element.expertTypeID,
          text: element.expertCategories
        };
        this.expertTypes.push(object);
      });
    }
  }

  async getExperts(id) {
    let result = await this.expertUserService.getExpertProfileInfo("ExpertType", id, "", "completedprofile").toPromise();
    if (result.outputObject) {
      this.experts = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.experts.push(defualtOptiton);

      //add general option
      let generalOptions = {
        id: '0',
        text: 'General Option'
      };
      this.experts.push(generalOptions);

      result.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.firstName
        };
        this.experts.push(object);
      });
    }
  }

  async getSectionNames() {
    let modal = {
      Questionnaire: "client",
      FilterName: "sectiontype"
    };
    let result = await this.settingService.getPerformaQuestionniareValue(modal).toPromise();
    if (result.outputObject) {
      this.sectionNames = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.sectionNames.push(defualtOptiton);
      result.outputObject.forEach(element => {
        let object = {
          id: element.sectionType,
          text: element.sectionType
        };
        this.sectionNames.push(object);
      });
    }
  }

  async getQuestionTypes() {
    let modal = {
      Questionnaire: "client",
      FilterName: "inputType"
    };
    let result = await this.settingService.getPerformaQuestionniareValue(modal).toPromise();
    if (result.outputObject) {
      this.questionTypes = [];
      let defualtOptiton = {
        id: '',
        text: 'Select Option'
      };
      this.questionTypes.push(defualtOptiton);
      result.outputObject.forEach(element => {
        let object = {
          id: element.inputType,
          text: element.inputType
        };
        this.questionTypes.push(object);
      });
    }
  }
  /* #endregion */

  async getClientQuestions() {
    this.clientQuestions.length=0;
    let expertTypeId = this.clientQuestionForm.get('expertTypeID').value;
    let expertId = this.clientQuestionForm.get('expertID').value;

    if(expertTypeId=='' || expertId=='') return;

    let result = await this.medicalPerformaService.getQuestionariesForClient(expertTypeId, expertId).toPromise();
    if (result.outputObject) {
      let questions = result.outputObject;
      questions.forEach(element => {
        element.questionList.forEach(e => {
          this.clientQuestions.push(e);
          this.isActiveAll = e.isActive===1?true:false;
        });
      });
    }
  }

  activeOrInActive(event){
    let value = event.target.checked;
    if(value){

    }
    else{

    }
  }
  
  openConfirmBox() {
    this.modalRef = this.modalService.show(this.confirmBox);
  }

  openSectionModal(template){
    this.modalRef= this.modalService.show(template);
  }

  addNewSection(){
    this.sectionNames = this.sectionNames.slice();
    let sectionName= this.sectionModal.sectionName;
    if(!this.sectionNames.some(e=>e.text==sectionName)){
      let object = {
        id:sectionName,
        text:sectionName
      };
      this.sectionNames.push(object);
      this.modalRef.hide();
    }
    else{
      this.toasterService.warning('Section Name already exist!');
    }
  }

  submitClientQuestions() {
    this.clientQuestionFormSubmit = true;
    if (this.clientQuestionForm.valid) {
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

  editQuestion(id){
    let question = this.clientQuestions.find(e => e.id == id);
    this.createClientQuestionForm(question);
  }

  async saveAll(){
    if(this.newClientQuestion){
      this.newClientQuestion.forEach(e=>{
        e.userID = +localStorage.getItem('userID');
      });

      let modal = {
        performaQuestionForClientList:this.newClientQuestion
      };

      let result = await this.medicalPerformaService.createPerformaQuestionniareForClient(modal).toPromise();
      this.toasterService.success('Questions submit successfully!');
      await this.ngOnInit();
    }
  }
}
