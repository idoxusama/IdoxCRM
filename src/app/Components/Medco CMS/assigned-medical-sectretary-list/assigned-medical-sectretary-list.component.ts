import { Component, OnInit } from '@angular/core';
import { AssignMedSec } from 'src/app/Models/Clinics Model/AssignMedicalSecretary';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-assigned-medical-sectretary-list',
  templateUrl: './assigned-medical-sectretary-list.component.html',
  styleUrls: ['./assigned-medical-sectretary-list.component.scss']
})
export class AssignedMedicalSectretaryListComponent implements OnInit {
  currentPage:number=1;
  assignedMedSecList:any[]=[];
  constructor(private instructoinService: InstructionService) { }

  ngOnInit() {
    this.getAllAssignedMedSec();
  }

  getAllAssignedMedSec(){
    this.instructoinService.getAllInstAssignMedSec().subscribe(response=>{
      this.assignedMedSecList = response.outputObject;
    },error=>{
      console.log(error);
    });
  }
}
