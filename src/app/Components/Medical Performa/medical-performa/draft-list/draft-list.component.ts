import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PerformaDraft } from 'src/app/Models/Medical Performa/DraftList';
import { MedicalPerformaService } from 'src/app/Services/Medical Performa Service/medical-performa.service';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.css']
})
export class DraftListComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  performaDraftsList :Array<PerformaDraft>=new Array();
  constructor(private medicalPerformaService: MedicalPerformaService,private toaster:ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Draft List");
    this.getDraftList();
  }

  getDraftList(){
    let userId = localStorage.getItem("userID");
    let userName= "MedicalSecretary";
    this.medicalPerformaService.getPerformasByFilter(userName,userId,'Draft').subscribe((response)=>{
      this.performaDraftsList=response.outputObject;
      this.toaster.success("Record loaded successfully.");
    },error =>{
      console.log(error);
    })
  }

}
