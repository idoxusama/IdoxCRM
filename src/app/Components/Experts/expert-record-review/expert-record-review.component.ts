import { Component, OnInit } from '@angular/core';
import { MedcoRecord } from 'src/app/Models/Instruction Main/MedcoRecord';
import { NewlyAssigned } from 'src/app/Models/Medical Secretary Model/newly-assigned';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-expert-record-review',
  templateUrl: './expert-record-review.component.html',
  styleUrls: ['./expert-record-review.component.scss']
})
export class ExpertRecordReviewComponent implements OnInit {

  currentPage:number=1;
  assignedMedSecList:NewlyAssigned[]=[];
  medcoRecord:MedcoRecord[]=[];
  fileUrl:string;

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
