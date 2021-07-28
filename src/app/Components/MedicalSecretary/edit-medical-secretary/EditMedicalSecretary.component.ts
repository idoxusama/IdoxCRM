import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { ActivatedRoute, Router} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ThemeService } from 'ng2-charts';
import { MedicalsecretaryService } from 'src/app/Services/Medical Secretary Services/medicalsecretary.service';
import { MedicalSecretary } from 'src/app/Models/Medical Secretary Model/Secretary';
declare var $: any;

@Component({
  selector: 'app-EditMedicalSecretary',
  templateUrl: './EditMedicalSecretary.component.html',
  styleUrls: ['./EditMedicalSecretary.component.css']
})
export class EditMedicalSecretaryComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  SelectedMedicalSecretary: MedicalSecretary = new MedicalSecretary();
  IsInhouse:boolean=false;

  constructor(private medicalsecretaryService: MedicalsecretaryService,
              private MedcoexpertService: MedcoexpertService, 
              private router: Router,
              public datepipe: DatePipe,
              private Toastr: ToastrService,
              private route: ActivatedRoute){}
 
  ngOnInit() {
    this.headerTitle.emit("Medical Secretary");
    this.IsInhouse=false;
    let id = this.route.snapshot.paramMap.get('id');
    this.medicalsecretaryService.getMedicalSecretaryData(id).subscribe(data=>{
      debugger
      this.SelectedMedicalSecretary = data.outputObject[0];
      },
      error=>{ 
        console.log(error);
      }); 
  }

  
 EditselectedTitle(event){this.SelectedMedicalSecretary.namePrefix = event;}
 EditselectedContract(event){this.SelectedMedicalSecretary.medicalSecretaryContractType = event;}
 EditselectedStatus(event){
   this.SelectedMedicalSecretary.status = event;
  }
 
 Update(){
   debugger
  this.medicalsecretaryService.UpdateMedicalSecretary(this.SelectedMedicalSecretary).subscribe((resp)=>{
    this.Toastr.success('Medical Secretary Updated Successfully ');
    $("#EditMedicalSecretaryModal").modal("hide");
    this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    },()=>{
      this.router.navigate(['/MedicalSecretary/List']);
    });
}
}
