import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OutstandingAppointments } from 'src/app/Models/Medco CMS Model/OutstandingAppointment';
import { InstructionService } from 'src/app/Services/Instruction Main/instruction.service';
import { OutstandingAppointmentsService } from 'src/app/Services/Medco CMS Services/outstanding-appointments.service';

@Component({
  selector: 'app-medcocms-outstandingappointments',
  templateUrl: './medcocms-outstandingappointments.component.html',
  styleUrls: ['./medcocms-outstandingappointments.component.css']
})
export class MedcocmsOutstandingappointmentsComponent implements OnInit {
  currentPage:number=1;
  appointmentID:string;
  outstandingAppointments:OutstandingAppointments[]=[];
  constructor(private outstandingAppoinmentService:OutstandingAppointmentsService,
    private toasterService:ToastrService) { }

  ngOnInit() {
    this.getOutstandingAppointments();
  }

  getOutstandingAppointments(){
    this.outstandingAppoinmentService.getOutstandingAppointments(0).subscribe(response=>{
      debugger
      this.outstandingAppointments= response.outputObject?response.outputObject:null;
      this.toasterService.success('Record loaded successfully.');
    },error=>{
      console.log(error);
    });
  }
}
