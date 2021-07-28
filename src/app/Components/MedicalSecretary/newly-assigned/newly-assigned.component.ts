import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MedicalRequiredRecordList } from 'src/app/Models/Experts Model/User';
import { MedcoRecord } from 'src/app/Models/Instruction Main/MedcoRecord';
import { NewlyAssigned } from 'src/app/Models/Medical Secretary Model/newly-assigned';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-newly-assigned',
  templateUrl: './newly-assigned.component.html',
  styleUrls: ['./newly-assigned.component.scss']
})
export class NewlyAssignedComponent implements OnInit {
  currentPage:number=1;
  assignedMedSecList:NewlyAssigned[]=[];
  medcoRecord:MedcoRecord[]=[];
  fileUrl:string;

  modalRef:BsModalRef;

  constructor(private instructoinService: InstructionService,
    private modalService:BsModalService,
    private expertUserService:ExpertuserService) { }

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

  openReviewRecordModal(template,instructionID){
    this.instructoinService.getInstructionMedicalRecord(0,instructionID).subscribe(res=>{
      this.medcoRecord = res.outputObject?res.outputObject:[];
      this.modalRef = this.modalService.show(template,{class:'modal-lg'});
    },error=>{
      console.log(error);
    });
  }
}