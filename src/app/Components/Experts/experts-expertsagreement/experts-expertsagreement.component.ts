import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExpertsagreementService } from 'src/app/Services/Experts Services/expertsagreement.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-experts-expertsagreement',
  templateUrl: './experts-expertsagreement.component.html',
  styleUrls: ['./experts-expertsagreement.component.css']
})
export class ExpertsExpertsagreementComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ExpertagreementData:any;

  constructor(private ExpertsagreementService: ExpertsagreementService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Experts Agreement");
    this.ExpertsagreementService.getExpertAgreementData().subscribe(data=>{
      this.ExpertagreementData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });


  }

}
