import { Component, OnInit } from '@angular/core';
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
  constructor(private instructionService:InstructionService) { }

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
}
