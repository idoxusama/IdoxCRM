import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InstructionModel, SettingInstructionModel } from 'src/app/Models/Settings Model/instruction-model.model';
import { InstructionSettingService } from 'src/app/Services/Instruction Services/instruction-setting.service';
import { NewExpertService } from 'src/app/Services/Settings Services/new-expert.service';

@Component({
  selector: 'app-new-instruction-setting',
  templateUrl: './new-instruction-setting.component.html',
  styleUrls: ['./new-instruction-setting.component.css']
})
export class NewInstructionSettingComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  NewExpertTypeData: Array<InstructionModel> = new Array();
  InstructionFieldRecord: any;
  ExpertsTypeList: any;
  InstructionSettings: SettingInstructionModel = new SettingInstructionModel();

  constructor(private instructionsettingservice: InstructionSettingService, private router: Router, public datepipe: DatePipe, private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Instruction Form Setting");
    this.instructionsettingservice.getAllExpertsTypesData().subscribe(data => {
      if (data.outputObject !== null) {
        this.ExpertsTypeList = data.outputObject;
      }
      else {
        this.NewExpertTypeData = [];
      }

    },
      error => {
        console.log(error);
      });
    this.instructionsettingservice.getInstructionFieldsName().subscribe(data => {
      this.InstructionFieldRecord = data.outputObject;
    },
      error => {
        console.log(error);
      });
  }

  SelectedExpertType(event){
    this.InstructionSettings.ExpertTypeID = event;
  }
  
  addinstructionsetting() {
    this.InstructionSettings.formSetting = JSON.stringify(this.InstructionFieldRecord);
    this.InstructionSettings.CreatedBy = localStorage.getItem('userID');
    this.instructionsettingservice.addInstructionFieldsSetting(this.InstructionSettings).subscribe(data => {
      this.Toastr.success("Instruction Form Setting Added Successfully !");
      this.ngOnInit();
    },
      error => {
        console.log(error);
      });
  }
}