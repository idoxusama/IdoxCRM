import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { ExpertBasicInfo } from 'src/app/Models/Experts Model/User';
import { CurrentInstructionState } from 'src/app/Models/Instruction Main/InstructionState';
import { NewInstruction } from 'src/app/Models/Instruction Main/NewInstruction';
import { InstructionModel } from 'src/app/Models/Settings Model/instruction-model.model';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-instruction-state',
  templateUrl: './instruction-state.component.html',
  styleUrls: ['./instruction-state.component.css']
})
export class InstructionStateComponent implements OnInit {
  currentPage:number=1;
  instructions:NewInstruction[]=[];
  currentInstructionState:CurrentInstructionState;
  public experts: Array<Select2OptionData>;

  instructionCode:string="";
  medicoRefNo:string="";
  expertID:number=0;

  constructor(private instructionService: InstructionService,
    private expertUserService: ExpertuserService) { }

  ngOnInit() {
    this.getExperts();
  }

  getExperts(){
    this.expertUserService.getExpertProfileInfo("Expert",0,"","completedProfile").subscribe(response=>{
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
    },error=>{
      console.log(error);
    });
  }

  changeInput(event:any,control){
    if(control=="InstructionCode"){
      this.instructionCode=event?event:"";
    }
    else if(control=="MedicoRefNo"){
      this.medicoRefNo=event?event:"";
    } 
    else if(control=="expertID"){
      this.expertID=event.value?+event.value:0;
    }
  }
  getInstructionState(){
    debugger
    // this.instructionService.getCurrentInstructionState(this.instructionCode,this.medicoRefNo,this.expertID,).subscribe(response=>{
    //   this.currentInstructionState = response.outputObject?response.outputObject.pop().instructionState:"";
    // },error=>{
    //   console.log(error);
    // });
  }

}
