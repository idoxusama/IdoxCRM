import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NewInstruction } from 'src/app/Models/Instruction Main/NewInstruction';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.scss']
})
export class InstructionListComponent implements OnInit {
  currentPage: number = 1;
  instructionId:number;
  instructions:NewInstruction[]=[];
  model:any={};

  modalRef:BsModalRef;
  constructor(private instructionService:InstructionService,
    private toasterService:ToastrService,
    private modalService:BsModalService) { }

  ngOnInit() {
    this.getInstructions();
  }

  getInstructions(){
    this.instructionService.getInstructionPersonalInfo(0).subscribe(response=>{
      this.instructions= response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  openConfirmBox(id,template){
    this.instructionId=id;
    this.modalRef = this.modalService.show(template,{backdrop:'static'});
  }


  deleteInstruction(){
    this.instructionService.getCurrentInstructionState(this.instructionId,"","",0).subscribe(response=>{
      let currentState = response.outputObject?response.outputObject.pop():null;

      if(currentState && currentState.instructionState!=='Attended'){
        this.delete(this.instructionId,currentState.stateID);
      }
      else{
        this.modalRef.hide();
        this.model.Reason='';
        this.toasterService.warning('Attended instruction cannot be deleted!');
      }
    });
  }

  delete(instructionId,stateId){
    let model: any={};
    model.InstructionID=instructionId;
    model.StateID=stateId;
    model.Event = 'IsDeleted';
    model.value=1;
    model.Note=this.model.reason;
    model.UserID=localStorage.getItem('userID');
    model.Msg='';
    this.instructionService.deleteOrInactiveInstruction(model).subscribe(response=>{
      this.toasterService.success('Instruction deleted successfully.');
    },error=>{
      console.log(error);
    },()=>{
      this.modalRef.hide();
      this.model.Reason='';
      this.getInstructions();
    });
  }
}
