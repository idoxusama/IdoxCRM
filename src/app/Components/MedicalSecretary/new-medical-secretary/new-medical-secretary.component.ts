import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModelSecretary } from 'src/app/Models/Experts Model/MedicalSecretary';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';

@Component({
  selector: 'app-new-medical-secretary',
  templateUrl: './new-medical-secretary.component.html',
  styleUrls: ['./new-medical-secretary.component.scss']
})
export class NewMedicalSecretaryComponent implements OnInit {

  @Output() headerTitle = new EventEmitter<string>();
  MedicalSecretaryData: Array<ModelSecretary> = new Array();
  CreateMedicalSecretary: ModelSecretary = new ModelSecretary();
  SelectedMedicalSecretary: ModelSecretary = new ModelSecretary();
  IsInhouse: boolean = false;
  constructor(private medicalsecretaryService: MedicalsecretaryService, 
     private router: Router, 
     public datepipe: DatePipe, 
     private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Add New Medical Secretary");
  }

  selectedTitle(event) { this.CreateMedicalSecretary.namePrefix = event; }
  selectedContract(event) { this.CreateMedicalSecretary.medicalSecretaryContractType = event; }
  selectedStatus(event) { this.CreateMedicalSecretary.status = event; }
  selectedMedicalSecretary(event) {
    this.CreateMedicalSecretary.medicalSecretaryTypeID = event;
    this.IsInhouse = event == 1 ? true : false;
  }


  Create() {
    debugger

    if (this.CreateMedicalSecretary.medicalSecretaryTypeID == 1) {
      this.CreateMedicalSecretary.companyAddress = '0';
      this.CreateMedicalSecretary.companyName = '0';
      this.CreateMedicalSecretary.companyPhoneNumber = '0';
      this.CreateMedicalSecretary.email = '0';
    }

    if (this.CreateMedicalSecretary.isHourlyOrPerReportFee == "1") {
      this.CreateMedicalSecretary.isHourlyFee = true;
    }
    else if (this.CreateMedicalSecretary.isHourlyOrPerReportFee == "2") {
      this.CreateMedicalSecretary.isPerRptFee = true;
    }
    this.medicalsecretaryService.CreateMedicalSecretary(this.CreateMedicalSecretary).subscribe((resp) => {
      this.Toastr.success('Medical Secretary Created Successfully ');
      this.ngOnInit();
    },
      (err) => {
        console.log(err);
      }, () => {
        this.router.navigate(['/MedicalSecretary/List']);
      });
  }

}
