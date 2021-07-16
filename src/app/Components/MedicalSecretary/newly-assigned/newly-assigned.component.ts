import { Component, OnInit } from '@angular/core';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-newly-assigned',
  templateUrl: './newly-assigned.component.html',
  styleUrls: ['./newly-assigned.component.scss']
})
export class NewlyAssignedComponent implements OnInit {

  currentPage:number=1;
  assignedMedSecList:any[]=[];
  constructor(private instructoinService: InstructionService) { }

  ngOnInit() {
    this.getAllAssignedMedSec();
  }

  getAllAssignedMedSec(){
    let userID = +localStorage.getItem('userID');
    this.instructoinService.getAllInstAssignMedSec(0,userID).subscribe(response=>{
      this.assignedMedSecList = response.outputObject;
    },error=>{
      console.log(error);
    });
  }

}
