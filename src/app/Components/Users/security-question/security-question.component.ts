import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SecurityQuestion } from 'src/app/Models/Users Model/Security Question';
import { SecurityQuestionService } from 'src/app/Services/Users Services/security-question.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.css']
})
export class SecurityQuestionComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  SecurityQuestionData: Array<SecurityQuestion>= new Array();
  isAdmin : boolean = false;
  showselectedSecurityQuestion: boolean = false;
  CreateSecurityQuestion : SecurityQuestion = new SecurityQuestion();
  selectedSecurityQuestion : SecurityQuestion = new SecurityQuestion();

  constructor(private SecurityQuestionService: SecurityQuestionService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Security Question");
    this.CreateSecurityQuestion.Status = "A";
    this.SecurityQuestionService.getSecurityQuestionData().subscribe(data=>{
      this.SecurityQuestionData = data.outputObject;
    },
    error=>{
      console.log(error);
    });
  }

  selectedSecurityQuestionDetail (event : any){
    this.selectedSecurityQuestion = event;
    this.showselectedSecurityQuestion = true;
  }

  selectedStatus(event){
    this.CreateSecurityQuestion.Status = event;
  }

  selectedUpdateStatus(event){
    this.selectedSecurityQuestion.Status = event;
  }

  createSecurityQuestion(){

    this.SecurityQuestionService.CreateNewSecurityQuestion(this.CreateSecurityQuestion).subscribe((resp)=>{

      this.Toastr.success('Security Question Created Successfully ');
      this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      });
  }

  EditSecurityQuestion(){

    this.SecurityQuestionService.UpdateSecurityQuestion(this.selectedSecurityQuestion).subscribe(resp=>{
      this.Toastr.success('Security Question Updated Successfully ');
      this.ngOnInit();
      $("#editGroupModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

  DeleteSecurityQuestion(ID:any){

    this.SecurityQuestionService.DeleteSecurityQuestion(ID).subscribe(resp=>{
      this.Toastr.success('Security Question Deleted Successfully ');
      this.ngOnInit();
      $("#editGroupModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

}
