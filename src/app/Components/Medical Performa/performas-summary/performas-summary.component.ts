import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PerformaSummary } from 'src/app/Models/Medical Performa/PerformaSummary';
import { MedicalPerformaService } from 'src/app/Services/Medical Performa Service/medical-performa.service';

@Component({
  selector: 'app-performas-summary',
  templateUrl: './performas-summary.component.html',
  styleUrls: ['./performas-summary.component.css']
})
export class PerformasSummaryComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  summary:PerformaSummary[]=[];
  currentPage:number=1;
  constructor(private medicalPerformaService:MedicalPerformaService) { }

  ngOnInit() {
    this.headerTitle.emit("Draft List");
    this.performasSummary();
  }

  performasSummary(){
    this.medicalPerformaService.getPerformasSummary('MedicalSecretary',localStorage.getItem('userID'),'Draft').subscribe((response)=>{
      this.summary = response.outputObject;
    },error=>{
      console.log(error);
    })
  }
}