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
    private instructionService:InstructionService,private toasterService:ToastrService) { }

  ngOnInit() {
    this.getOutstandingAppointments();
  }

  getOutstandingAppointments(){
    this.instructionService.getInstructionPersonalInfo(0).subscribe(response=>{
      debugger
      this.outstandingAppointments= response.outputObject?response.outputObject:null;
      if(this.outstandingAppointments){
        this.outstandingAppointments.forEach(e=>{
          this.getSpecialInfo(e);
        });

        this.toasterService.success('Record loaded successfully.');
      }
    },error=>{
      console.log(error);
    });
  }

  getSpecialInfo(data){
    this.instructionService.getInstructionSpecial(0,data.id).subscribe(response=>{
      let instructionSpecial = response.outputObject?response.outputObject:null;
      if(instructionSpecial){
        this.outstandingAppointments.map(e=>{
          instructionSpecial.forEach(m => {
            if(e.id==m.instructionID){
              e.medicoRefNo= m.medicoRefNo;
              e.clientRefNo= m.clientRefNo;
              e.expertID= m.expertID;
              e.referrerID=m.referrerID;
              e.incidentTypeID=m.incidentTypeID;
              e.specialNote=m.specialNote;
              e.isSpecialRestrictionNeed = m.isSpecialRestrictionNeed;
            }
          });
        });
      }
    },error=>{
      console.log(error);
    });
  }
}
