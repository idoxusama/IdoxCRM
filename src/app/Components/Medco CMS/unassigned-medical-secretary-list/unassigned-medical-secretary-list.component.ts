import { Component, OnInit } from '@angular/core';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-unassigned-medical-secretary-list',
  templateUrl: './unassigned-medical-secretary-list.component.html',
  styleUrls: ['./unassigned-medical-secretary-list.component.scss']
})
export class UnassignedMedicalSecretaryListComponent implements OnInit {
  currentPage:number=1;
  unAssignedMedSecList:any[]=[];
  constructor(private instructoinService: InstructionService) { }

  ngOnInit() {
    this.getAllUnAssignedMedSec();
  }

  getAllUnAssignedMedSec(){
    this.instructoinService.getAllInstUnAssignMedSec().subscribe(response=>{
      this.unAssignedMedSecList = response.outputObject;
    },error=>{
      console.log(error);
    });
  }
}
