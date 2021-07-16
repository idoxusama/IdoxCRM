import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OutstandingAppointments } from 'src/app/Models/Medco CMS Model/OutstandingAppointment';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';

@Component({
  selector: 'app-medcocms-outstandingappointments',
  templateUrl: './medcocms-outstandingappointments.component.html',
  styleUrls: ['./medcocms-outstandingappointments.component.css']
})
export class MedcocmsOutstandingappointmentsComponent implements OnInit {
  currentPage:number=1;
  appointmentID:string;
  outstandingAppointments:OutstandingAppointments[]=[];
  constructor(private instructionService:InstructionService,
    private toasterService:ToastrService) { }

  ngOnInit() {
    this.getOutstandingAppointments();
  }

  getOutstandingAppointments(){
    this.instructionService.getOutstandingAppointments(0).subscribe(response=>{
      this.outstandingAppointments= response.outputObject?response.outputObject:null;
    },error=>{
      console.log(error);
    });
  }
}
