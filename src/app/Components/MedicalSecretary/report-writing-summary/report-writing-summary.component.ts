import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportSummary } from 'src/app/Models/Report Writing/ReportSummary';
import { ReportWritingService } from 'src/app/Services/Report Writing Services/report-writing.service';

@Component({
  selector: 'app-report-writing-summary',
  templateUrl: './report-writing-summary.component.html',
  styleUrls: ['./report-writing-summary.component.scss']
})
export class ReportWritingSummaryComponent implements OnInit {
  public reportSummary:ReportSummary[];
  public instructionID:string;

  constructor(private reportWritingService:ReportWritingService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.instructionID=params['id'];
    })

    if(this.instructionID)
      this.getReportSummary();
  }

  getReportSummary(){
    this.reportWritingService.getRecordReviewRptLog(this.instructionID).subscribe(res=>{
      this.reportSummary = res.outputObject;
    },error=>{
      console.log(error);
    });
  }

}
