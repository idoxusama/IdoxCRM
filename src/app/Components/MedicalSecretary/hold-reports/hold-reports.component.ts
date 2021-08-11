import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/app/Models/Report Writing/Converstions';
import { ReportWritingService } from 'src/app/Services/Report Writing Services/report-writing.service';

@Component({
  selector: 'app-hold-reports',
  templateUrl: './hold-reports.component.html',
  styleUrls: ['./hold-reports.component.scss']
})
export class HoldReportsComponent implements OnInit {
  public conversations:Conversation[];
  constructor(private reportWrtingService:ReportWritingService) { }

  ngOnInit() {
    this.getConversations();
  }

  getConversations(){
    let model = {
      InstructionID: 0,
      UserID: localStorage.getItem('userID'),
      CaseClosed: true,
      StartDate: new Date(new Date().setDate(new Date().getDate() - 30)),
      EndDate: new Date()
    };

    this.reportWrtingService.getConversationRptLog(model).subscribe(res=>{
      this.conversations = res.outputObject;
    },error=>{
      console.log(error);
    });
  }
}
