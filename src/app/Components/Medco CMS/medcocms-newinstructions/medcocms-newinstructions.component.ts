import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { error } from 'protractor';

@Component({
  selector: 'app-medcocms-newinstructions',
  templateUrl: './medcocms-newinstructions.component.html',
  styleUrls: ['./medcocms-newinstructions.component.css']
})
export class MedcocmsNewinstructionsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ExpertsTypeList: any;
  dvPhsyco: boolean = false;
  isHiddendvComm: boolean = false;
  dvMPORDE: boolean = false;
  dvPODE: boolean = false;
  dvPO: boolean = false;
  dvDocument: boolean = false;
  dvReqSelection: boolean = true;
  dvRC:boolean=false;

  constructor(private MedcoexpertService: MedcoexpertService, private router: Router, public datepipe: DatePipe, private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Medco CMS New Instructions");
    this.MedcoexpertService.getExpertTypesList().subscribe(data => {
      this.ExpertsTypeList = data.outputObject;
    },
      error => {
        console.log(error);
      });
  }

  SelectedExpertType(event: any) {
    try {
      let selectedExTyp: string = event;
      this.DivsSelection(selectedExTyp);
    } catch (error) {
      console.error(error);
    }
  }

  // Methods
  DivsSelection(selectedDiv) {
    switch (selectedDiv) {
      case '1':
        this.dvReqSelection = false;
        this.isHiddendvComm = true;
        this.dvDocument = true;
        this.dvMPORDE = true;
        this.dvPhsyco = false;
        this.dvPO = false;
        this.dvPODE = false;
        this.dvRC = false;

        break;

      case '2':
        this.dvReqSelection = false;
        this.isHiddendvComm = true;
        this.dvDocument = true;
        this.dvMPORDE = true;
        this.dvPhsyco = true;
        this.dvPO = true;
        this.dvPODE = true;
        this.dvRC = false;

        break;

      case '3':
        this.dvReqSelection = false;
        this.isHiddendvComm = true;
        this.dvDocument = true;
        this.dvMPORDE = true;
        this.dvPhsyco = false;
        this.dvPO = true;
        this.dvPODE = true;
        this.dvRC = false;

        break;

      case '4':
        this.dvReqSelection = false;
        this.isHiddendvComm = true;
        this.dvDocument = true;
        this.dvMPORDE = true;
        this.dvPhsyco = false;
        this.dvPO = false;
        this.dvPODE = false;
        this.dvRC = false;

        break;

      case '5':
        this.dvReqSelection = false;
        this.isHiddendvComm = true;
        this.dvDocument = true;
        this.dvMPORDE = true;
        this.dvPhsyco = false;
        this.dvPO = false;
        this.dvPODE = false;
        this.dvRC = true;

        break;

      case '6':
        this.dvReqSelection = false;
        this.isHiddendvComm = true;
        this.dvDocument = true;
        this.dvMPORDE = true;
        this.dvPhsyco = false;
        this.dvPO = false;
        this.dvPODE = true;
        this.dvRC = false;

        break;

      case '7':
        this.dvReqSelection = false;
        this.isHiddendvComm = true;
        this.dvDocument = true;
        this.dvMPORDE = false;
        this.dvPhsyco = true;
        this.dvPO = false;
        this.dvPODE = false;
        this.dvRC = true;

        break;

      default:
        this.dvReqSelection = true;
        this.isHiddendvComm = false;
        this.dvDocument = false;
        this.dvPhsyco = false;
        this.dvMPORDE = false;
        this.dvPO = false;
        this.dvPODE = false;
        this.dvRC = false;

        break;
    }
  }

}
