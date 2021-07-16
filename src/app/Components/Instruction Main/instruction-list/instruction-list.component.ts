import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InstructionSummaryList } from 'src/app/Models/Instruction Main/InstructionSummaryList';
import { NewInstruction } from 'src/app/Models/Instruction Main/NewInstruction';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.css']
})
export class InstructionListComponent implements OnInit {
  currentPage: number = 1;
  instructionId: number;
  instructionsList: InstructionSummaryList[] = [];

  summaryModel: any = {
    startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
    endDate: new Date(),
    instructionCode: '',
    medicoRefNo: '',
    expertID: 0,
    instructionID: 0,
    stateID: 0
  };

  model: any = {};
  experts: Array<Select2OptionData>;
  instructionStates: Array<Select2OptionData>;
  modalRef: BsModalRef;
  
  constructor(private instructionService: InstructionService,
    private expertUserService:ExpertuserService,
    private toasterService: ToastrService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getExperts();
    this.getInstructionsSummary();
  }

  getExperts() {
    this.expertUserService.getExpertProfileInfo("Expert", 0, "", "completedprofile").subscribe(response => {
      this.experts = [];
      let defualtOptiton = {
        id: '0',
        text: 'Select Option'
      };
      this.experts.push(defualtOptiton);
      response.outputObject.forEach(element => {
        let object = {
          id: element.id,
          text: element.firstName
        };
        this.experts.push(object);
      });
    }, error => {
      console.log(error);
    });
  }

  changeExpert(event: any) {
    this.summaryModel.expertID = event.value;
  }

  getInstructionsSummary() {
    this.instructionService.getInstructionsSummary(this.summaryModel).subscribe(response => {
      this.instructionsList = response.outputObject;
      if(this.instructionsList){
        this.instructionsList.map(e=>{
          e.isExpand=false;
        });
      }
    }, error => {
      console.log(error);
    });
  }


  /* #region  Delete Instruction */

  openConfirmBox(id, template) {
    this.instructionId = id;
    this.modalRef = this.modalService.show(template, { backdrop: 'static' });
  }


  deleteInstruction() {
    let model:any={
      instructionID:this.instructionId,
      instructionCode:'',
      medicoRefNo:'',
      expertID:0
    };
    this.instructionService.getCurrentInstructionState(model).subscribe(response => {
      let currentState = response.outputObject ? response.outputObject.pop() : null;

      if (currentState && currentState.instructionState !== 'Attended') {
        this.delete(this.instructionId, currentState.stateID);
      }
      else if(currentState===null){
        this.modalRef.hide();
        this.model.Reason = '';
        this.toasterService.warning('Already Deleted.');
      }
      else {
        this.modalRef.hide();
        this.model.Reason = '';
        this.toasterService.warning('Attended instruction cannot be deleted!');
      }
    });
  }

  delete(instructionId, stateId) {
    let model: any = {};
    model.InstructionID = instructionId;
    model.StateID = stateId;
    model.Event = 'IsDeleted';
    model.value = 1;
    model.Note = this.model.reason;
    model.UserID = localStorage.getItem('userID');
    model.Msg = '';
    this.instructionService.deleteOrInactiveInstruction(model).subscribe(response => {
      this.toasterService.success('Instruction deleted successfully.');
    }, error => {
      console.log(error);
    }, () => {
      this.modalRef.hide();
      this.model.Reason = '';
      this.getInstructionsSummary();
    });
  }
  /* #endregion */
}
