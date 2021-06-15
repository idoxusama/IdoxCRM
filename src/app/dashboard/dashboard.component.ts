import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { DashboardServiceService } from '../Services/dashboard-service.service';
import { GenericServiceService } from '../Services/generic-service.service';
import {  Router} from '@angular/router';
import { DashboardData } from '../Model/DashboardModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData = new DashboardData();
  dashboardPatientsData : Array<DashboardData> = new Array();
  showPatient : boolean = false;
  showPatientDetails : boolean = false;
  selectedPatientType : string = "";
  @Output() headerTitle = new EventEmitter<string>();
  rcTargetModel : Array<any> = new Array();
  constructor(private dashboardService: DashboardServiceService, private genericService: GenericServiceService, private router: Router,public datepipe: DatePipe) { }

  
  public barChartOptions: any = {
      scaleShowVerticalLines: false,
      responsive: true
  };
 
  public barChartLabels: any[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  //{ data: [{265450,91327.6,74847.04},{73550.46,29650.12,73007.05},{10870.72,5951.47,16417.49},{0,0,5593.1}], label: 'Aging Comparison' }
  public barChartData: any[] = [
      { data: [8,4], label: 'Total Referred' },{data:[20,8],label:'TB Positive'}
  ];
  public lineChartData: any[] = [
      { data: [107092,307357,437317,436739,395619], label: 'Total Complains'},
      { data: [5620,47657,66304,85969,92179], label: 'Pending Complains'}
      
  ];


  public barChartReportData: any[] = [
      { data: [30-60,61840,13007,436739,74847], label: 'Charges'},
      { data: [5620,47657,66304,85969,92179], label: 'Payments'}
      
  ];

  
  public chartClicked(e: any): void {
      console.log(e);
  }

  public chartHovered(e: any): void {
      console.log(e);
  }

  public chartClickedBAR(e:any):void {
  console.log(e);
}

  public chartHoveredBAR(e: any): void {
      console.log(e);
  }

  public chartClickedPOLAR(e: any): void {
      console.log(e);
  }

  public chartHoveredPOLAR(e: any): void {
      console.log(e);
  }
  public chartColors: Array<any> = [
      { // first color
        backgroundColor: '#fff',
        borderColor: 'rgba(69, 173, 241,0.2)',
        pointBackgroundColor: 'rgba(69, 173, 241,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
      },
      { // second color
        backgroundColor: '#fff',
        borderColor: 'rgba(255, 255, 255,0.2)',
        pointBackgroundColor: 'rgba(255, 255, 255,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 255, 255,0.2)'
      }];


      public lineChartColors:any[] = [
          { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgb(66, 132, 244,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          },
          { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgb(244, 67, 54)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
          }];

 
  
    public showChart:boolean=false;
    isAdmin : boolean = false;
  ngOnInit() {
    // Get District
  }

}
