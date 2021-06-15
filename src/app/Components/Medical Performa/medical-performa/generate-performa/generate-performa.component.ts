import { Component, EventEmitter, OnInit, Output, Input, SimpleChange, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debug } from 'console';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
import { ClientQuesitons, DraftAnswersForClient, PerformaAnswersOFClient } from 'src/app/Models/Medical Performa/MedicalPerformaQuestionsForClient';
import { DraftAnswersForExpert, ExpertQuestions, PerformaAnswersOFExpert } from 'src/app/Models/Medical Performa/MedicalPerformaQuestionsForExpert';
import { MedicalPerformaService } from 'src/app/Services/Medical Performa Service/medical-performa.service';
import { ConfirmModalDialogComponent } from '../../confirmModalDialog/confirmModalDialog.component';

@Component({
  selector: 'app-generate-performa',
  templateUrl: './generate-performa.component.html',
  styleUrls: ['./generate-performa.component.css']
})
export class GeneratePerformaComponent implements OnInit,OnChanges {

  /* #region  Fields */

  @Output() headerTitle = new EventEmitter<string>();
  @Input() change: string;
  @Input() draftCode: string;
  timeSpent:Date;
  performaForm: FormGroup;
  formSumitted: boolean = false;
  formGroup = [];
  modalRef: BsModalRef;

  expertTypeId: string;
  expertId: string;
  performaDraftCode: string;
  referrerId: string = "4";
  caseRefNo: string;
  noOfDraftEntry: number = 0;

  clientQuestions: ClientQuesitons;
  expertQuestions: ExpertQuestions[];

  PerformaAnswerForClient: PerformaAnswersOFClient[];
  PerformaAnswerForExpert: PerformaAnswersOFExpert[];

  DraftAnswersForClient: DraftAnswersForClient = new DraftAnswersForClient();
  DraftAnswersForExpert: DraftAnswersForExpert = new DraftAnswersForExpert();

  /* #endregion */

  constructor(private medicalPerformaSerivce: MedicalPerformaService,
    private modalService: BsModalService,
    private toaster: ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
    this.headerTitle.emit("Medical Secretary Performa");
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    this.expertTypeId = this.medicalPerformaSerivce.expertType.value;
    this.expertId = this.medicalPerformaSerivce.expert.value;

    let change: SimpleChange = changes['change'];
    let draftCode: SimpleChange = changes['draftCode'];

    if (change) {
      if (change.currentValue) {
        this.getClientQuestions(change.currentValue);
        this.getExpertQuestions(change.currentValue);
      }
    }

    if (draftCode) {
      if (draftCode.currentValue) {
        this.performaDraftCode = draftCode.currentValue;
        this.mapQuestionsWithAnsers(draftCode.currentValue);
      }
    }
  }

  checkIsOptionalExist(arr: any) {
    return arr.find(e => e.isOptional) ? true : false;
  }

  /* #region  get questions */
  getClientQuestions(id) {
    this.medicalPerformaSerivce.getQuestionariesForClient(id).subscribe((response) => {
      this.clientQuestions = response.outputObject;
      this.formGroup.push(response.outputObject);
    }, error => {
      console.log(error);
    });
  }
  getExpertQuestions(id) {
    this.medicalPerformaSerivce.getQuestionariesForExpert(id).subscribe((response) => {
      this.expertQuestions = response.outputObject;
      this.formGroup.push(response.outputObject);
    }, error => {
      console.log(error);
    }, () => {
      this.performaForm = this.medicalPerformaSerivce.toFormBuilder(this.formGroup);
    });
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
  /* #endregion */

  /* #region Mapping draft answers */

  async mapQuestionsWithAnsers(code) {
    //get answers
    let clientAnswers = await this.medicalPerformaSerivce.getAllAnswersForClient(code).toPromise();
    let expertAnswers = await this.medicalPerformaSerivce.getAllAnswersForExpert(code).toPromise();
    this.PerformaAnswerForClient = clientAnswers.outputObject;
    this.PerformaAnswerForExpert = expertAnswers.outputObject;

    if (this.PerformaAnswerForClient) {
      //reset the expertId and expertTypeId for resuse.
      this.medicalPerformaSerivce.expert.next(this.PerformaAnswerForClient.map(function (a) { return a.expertID }).pop().toString());
      this.expertId = this.medicalPerformaSerivce.expert.value;
      this.medicalPerformaSerivce.expertType.next(this.PerformaAnswerForClient.map(function (a) { return a.expertTypeID }).pop().toString());
      this.expertTypeId = this.medicalPerformaSerivce.expertType.value;
      this.caseRefNo = this.PerformaAnswerForClient.map(function (a) { return a.caseRefNo }).pop().toString();
      this.noOfDraftEntry = Math.max.apply(Math, this.PerformaAnswerForClient.map(function (o) { return o.noOfState; }));

      //get questions
      let questions = await this.medicalPerformaSerivce.getQuestionariesForClient(this.expertTypeId).toPromise();
      let data = questions.outputObject;
      this.clientQuestions = data.forEach(element => {
        element.questionList.map(m => {
          const draftitem = this.PerformaAnswerForClient.find(e => e.clientQuestionID == m.id);
          m.answer = draftitem ? draftitem.answers : "";
          return m;
        })
      });
      this.clientQuestions = data;
      this.formGroup.push(data);
    }
    if (this.PerformaAnswerForExpert) {

      //reset the expertId and expertTypeId for resuse.
      this.medicalPerformaSerivce.expert.next(this.PerformaAnswerForExpert.map(function (a) { return a.expertID }).pop().toString());
      this.expertId = this.medicalPerformaSerivce.expert.value;
      this.medicalPerformaSerivce.expertType.next(this.PerformaAnswerForExpert.map(function (a) { return a.expertTypeID }).pop().toString());
      this.expertTypeId = this.medicalPerformaSerivce.expertType.value;
      this.caseRefNo = this.PerformaAnswerForExpert.map(function (a) { return a.caseRefNo }).pop().toString();
      this.noOfDraftEntry = Math.max.apply(Math, this.PerformaAnswerForExpert.map(function (o) { return o.noOfState; }));
      //get questions
      let questions = await this.medicalPerformaSerivce.getQuestionariesForExpert(this.expertTypeId).toPromise();
      let data1 = questions.outputObject;
      if (data1) {
        this.expertQuestions = data1.forEach(element => {
          element.questionList.map(m => {
            if (m.options) {
              for (let i = 0; i < m.options.length; i++) {
                const draftOptionItem = this.PerformaAnswerForExpert.find(o => o.performaQuestionnaireOptionsForExpertID == m.options[i].id);
                if (m.options[i].optionType == "CheckBox") {
                  m.options[i].answer = draftOptionItem ? draftOptionItem.performaQuestionnaireOptionsForExpertID : '';
                }
                else {
                  if (m.selectedOption) {
                    break;
                  }
                  else {
                    m.selectedOption = draftOptionItem ? draftOptionItem.performaQuestionnaireOptionsForExpertID : '';
                  }
                }
              }
            }
            const draftitem = this.PerformaAnswerForExpert.find(e => e.performaQuestionnaireForExpertID == m.id);
            m.answer = draftitem ? draftitem.answer : "";
            if (m.answer) {
              m.isOptional = false;
            }
            return m;
          })
        });
      }
      this.expertQuestions = data1;
      this.formGroup.push(data1);
    }
    else {
      let questions = await this.medicalPerformaSerivce.getQuestionariesForExpert(this.expertTypeId).toPromise();
      this.expertQuestions = questions.outputObject;
      this.formGroup.push(questions.outputObject);
    }

    //Build FormGroup
    if (this.formGroup.length > 0) {
      this.performaForm = this.medicalPerformaSerivce.toFormBuilder(this.formGroup);
    }
  }

  /* #endregion */

  /* #region  fill ans save draft array */

  saveDraft() {
    this.modalRef = this.modalService.show(ConfirmModalDialogComponent);
    this.modalRef.content.onClose.subscribe(async result => {
      if (result) {
        debugger
        this.noOfDraftEntry += 1;

        //Save Draft For Client
        if (this.DraftAnswersForClient.performaAnswersOFClient.length > 0) {
          this.fillClientAnswerObject(result);
          this.saveClientDraft(result);
        }

        //Save Draft For Expert
        if (this.DraftAnswersForClient.performaAnswersOFClient.length == 0 &&
          this.DraftAnswersForExpert.performaAnswersOFExpert.length > 0) {
          this.fillExpertAnswerObject(result);
          this.saveExpertDraft(this.performaDraftCode);
        }

      }
    })
  }

  draftFillAnswersForClient(value, id, questionName) {
    if (questionName == "Case Ref No") {
      this.caseRefNo = value;
    }

    let draftQuestion = new PerformaAnswersOFClient();
    draftQuestion.clientQuestionID = id;
    draftQuestion.answers = value;
    draftQuestion.userID = +localStorage.getItem("userID");
    draftQuestion.expertTypeID = +this.expertTypeId;
    draftQuestion.medSecretaryID = +localStorage.getItem("userID");
    draftQuestion.state = "Draft";
    draftQuestion.instructionID = 0;
    draftQuestion.expertID = +this.expertId;
    draftQuestion.referrerID = +this.referrerId;

    //push the draft object in draft answer array.
    this.DraftAnswersForClient.performaAnswersOFClient.push(draftQuestion);
  }

  fillClientAnswerObject(result) {
    this.DraftAnswersForClient.referrerID = +this.referrerId;
    this.DraftAnswersForClient.caseRefNo = this.caseRefNo;
    this.DraftAnswersForClient.expertID = +this.expertId;
    this.DraftAnswersForClient.expertTypeID = +this.expertTypeId;
    this.DraftAnswersForClient.caseRefNo = this.caseRefNo;
    this.DraftAnswersForClient.medSecretaryID = +localStorage.getItem("userID");

    this.DraftAnswersForClient.performaAnswersOFClient.forEach(element => {
      element.reason = result;
      element.referrerID = +this.referrerId;
      element.caseRefNo = this.caseRefNo;
      element.performaQuestionnaireCode = this.performaDraftCode;
      element.performaQuestionnaireCodeOut = this.performaDraftCode;
      element.noOfState = this.noOfDraftEntry;
    });
  }

  draftFillAnswersForExpert(value, id, questionName, isOptional) {
    if (questionName == "Case Ref No") {
      this.caseRefNo = value;
    }

    let draftQuestion = new PerformaAnswersOFExpert();
    draftQuestion.performaQuestionnaireForExpertID = id;
    draftQuestion.performaQuestionnaireOptionsForExpertID = isNaN(+value) == false ? +value : 0;
    draftQuestion.answer = value;
    draftQuestion.expertID = +this.expertId;
    draftQuestion.expertTypeID = +this.expertTypeId;
    draftQuestion.instructionID = 0;
    draftQuestion.medicalSecretaryID = +localStorage.getItem("userID");
    draftQuestion.referrerID = +this.referrerId;
    draftQuestion.state = "Draft";
    draftQuestion.isText = isNaN(+value) == true ? true : false;
    //draftQuestion.isOptional=isOptional==true?false:true;

    //push the draft object in draft answer array
    this.DraftAnswersForExpert.performaAnswersOFExpert.push(draftQuestion);
  }

  fillExpertAnswerObject(result) {
    this.DraftAnswersForExpert.instructionID = 0
    this.DraftAnswersForExpert.expertID = +this.expertId;
    this.DraftAnswersForExpert.referrerID = +this.referrerId;
    this.DraftAnswersForExpert.expertTypeID = +this.expertTypeId;
    this.DraftAnswersForExpert.caseRefNo = this.caseRefNo;
    this.DraftAnswersForExpert.medicalSecretaryID = +localStorage.getItem("userID");
    this.DraftAnswersForExpert.performaAnswersOFExpert.forEach(element => {
      element.reason = result;
      element.referrerID = +this.referrerId;
      element.caseRefNo = this.caseRefNo;
      element.performaQuestionnaireCode = this.performaDraftCode;
      element.performaQuestionnaireCodeOut = this.performaDraftCode;
      element.noOfState = this.noOfDraftEntry;
    })
  }

  saveClientDraft(reason?: any) {
    this.medicalPerformaSerivce.saveDraftAnswersForClient(this.DraftAnswersForClient).subscribe((response) => {
      debugger
      const code = response.outputObject.map(function (a) { return a.code });
      if (this.PerformaAnswerForExpert && this.PerformaAnswerForExpert.length > 0) {
        this.fillExpertAnswerObject(reason);
        this.saveExpertDraft(code);
      }
      this.toaster.success("Client changes draft successfully.");
      this.DraftAnswersForClient = null;
    }, error => {
      this.DraftAnswersForClient = null;
      console.log(error)
    });
  }

  saveExpertDraft(code?: any) {
    if (code) {
      this.DraftAnswersForExpert.performaAnswersOFExpert.forEach(x => {
        x.performaQuestionnaireCode = code;
      });
      this.medicalPerformaSerivce.saveDraftAnswersForExpert(this.DraftAnswersForExpert).subscribe((response) => {
        const data = response.outputObject;
        this.toaster.success("Expert changes draft successfully.");
        this.DraftAnswersForExpert = null;
      }, error => {
        this.DraftAnswersForExpert = null;
        console.log(error)
      });
    }
  }

  /* #endregion */

  /* #region Add More Questions  */

  addMoreQuestion(sectionName) {
    this.expertQuestions.filter(s => s.sectionName == sectionName).pop().questionList.filter(e => e.isOptional).map(m => m.isOptional = false);
  }

  /* #endregion */

  onSubmit() {
    this.formSumitted=true;
    //execute this code for find invalid controls

    // var controls = this.performaForm.controls;
    // const invalid = [];
    // for (const name in controls) {
    //   if (controls[name].invalid) {
    //     invalid.push(name);
    //   }
    // }
    
    if (!this.performaForm.valid) { return; }
    else {
      if (this.DraftAnswersForClient) {
        this.fillClientAnswerObject("N/A");
        this.DraftAnswersForExpert.performaAnswersOFExpert.forEach(e => { e.state = "Submit" });
        this.medicalPerformaSerivce.saveAnswerForClient(this.DraftAnswersForClient).subscribe(response => {
        }, error => {
          console.log(error);
        }, () => {
          this.toaster.success("Client Performa Sumitted successfully.")
          if (this.DraftAnswersForExpert) {
            this.fillExpertAnswerObject("N/A");
            this.DraftAnswersForExpert.performaAnswersOFExpert.forEach(e => { e.state = "Submit" });
            this.medicalPerformaSerivce.saveAnswerForExpert(this.DraftAnswersForExpert).subscribe(response => {
            }, error => {
              console.log(error);
            }, () => {
              this.toaster.success("Ëxpert Performa Sumitted successfully.");
            });
          }
        });
      }
    }
  }
}
