import { Component, OnInit } from '@angular/core';
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
  instructions:NewInstruction[]=[];
  constructor(private instructionService:InstructionService,
    private toasterService:ToastrService) { }

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

  updateInstructionStatus(id){
    let model: any={};
    model.id=id;
    model.event='IsDeleted';
    model.value=1;
    model.functionName='';
    model.userID=localStorage.getItem('userID');
    this.instructionService.updateInstructionStatus(model).subscribe(response=>{
      this.toasterService.success('Instruction status has been updated.');
    },error=>{
      console.log(error);
    },()=>{
      this.ngOnInit();
    });
  }
}
