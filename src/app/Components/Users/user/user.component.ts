import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/Users Model/UsersModel';
import { Group,SelectedGroupData } from 'src/app/Models/Users Model/group';
import { ApplicationScreenObject } from 'src/app/Models/Users Model/Application Screen Object';
import { UserService } from 'src/app/Services/Users Services/user.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  UserData: Array<User>= new Array();
  GroupData: Array<Group>= new Array();
  SelectedGroupData: Array<SelectedGroupData>= new Array();
  ApplicationScreenObjectData: Array<ApplicationScreenObject>= new Array();
  isAdmin : boolean = false;
  ShowSelectedGroupData: boolean = false;
  CreateUser : User = new User();
  selectedUser : User = new User();
  private SelectedGroupName: string;
  private SearchIsgoPrivate: boolean = false;
  private SearchGroupId: string;
  SecurityQuestionData: any;
  ConfirmPassword:string;
  EditPreSelectedGroupNameID:number;
  currentPage:number=1;

  constructor(private UserService: UserService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("User");
    this.CreateUser.Status = "A";
    this.UserService.getUserData().subscribe(data=>{
    this.UserData = data.outputObject;
    },
    error=>{ 
      console.log(error);
    });

    this.UserService.getGroupData().subscribe(data=>{
      this.GroupData = data.outputObject;
    },
    error=>{ 
      console.log(error);
    });

    this.UserService.getSecurityQuestionData().subscribe(data=>{
      this.SecurityQuestionData = data.outputObject;
    },
    error=>{ 
      console.log(error);
    });


  }

  selectedUserDetail (event : any){
    this.selectedUser = event;
    this.selectedUser.Password = "";
    this.ConfirmPassword = "";
    this.UserService.getGroupIDData(this.selectedUser.GroupID, this.selectedUser.IsGoPrivateUser).subscribe(data=>{
      this.SelectedGroupData = data.outputObject;
      this.SelectedGroupName = data.groupName;
      if(this.SelectedGroupName !== null)
      {      
        this.ShowSelectedGroupData = true;
      }
      else{this.ShowSelectedGroupData = false;}

    if(data.groupName == 'Expert' && 'Medical Expert'){
        this.EditPreSelectedGroupNameID = this.selectedUser.ExpertID
    }
    else if (data.groupName == 'Client'){
      this.EditPreSelectedGroupNameID = this.selectedUser.InstructionID
    }
    else if (data.groupName == 'Referrer'){
      this.EditPreSelectedGroupNameID = this.selectedUser.ReferrerID
    }
    else if(data.groupName == 'Medical Secretary'){
      this.EditPreSelectedGroupNameID = this.selectedUser.MedicalSecretaryID
    }
    else if(data.groupName == 'Sleeping Referrer'){
      this.EditPreSelectedGroupNameID = this.selectedUser.SleepingReferrerID
    }
    else{
      this.EditPreSelectedGroupNameID = this.selectedUser.SolicitorID
    }

    },
    error=>{ 
      console.log(error);
    });

  }


  selectedGroupData(event:any){
    this.CreateUser.GroupID = event;
    this.UserService.getGroupIDData(event, this.CreateUser.IsGoPrivateUser).subscribe(data=>{
      this.SelectedGroupData = data.outputObject;
      this.SelectedGroupName = data.groupName;
      if(this.SelectedGroupName !== null)
      {      
        this.ShowSelectedGroupData = true;
      }
      else{this.ShowSelectedGroupData = false;}

    },
    error=>{ 
      console.log(error);
    });

  }

  selectedUpdateGroupData(event:any){
    this.selectedUser.GroupID = event;
    this.UserService.getGroupIDData(event, this.selectedUser.IsGoPrivateUser).subscribe(data=>{
      this.SelectedGroupData = data.outputObject;
      this.SelectedGroupName = data.groupName;
      if(this.SelectedGroupName !== null)
      {      
        this.ShowSelectedGroupData = true;
      }
      else{this.ShowSelectedGroupData = false;}

    },
    error=>{ 
      console.log(error);
    });

  }

  selectedGroupNameData(event){
    if(this.SelectedGroupName == 'Expert' && 'Medical Expert'){
      this.CreateUser.ExpertID = event;
      this.CreateUser.InstructionID = 0;
      this.CreateUser.ReferrerID= 0;
      this.CreateUser.SolicitorID= 0;
      this.CreateUser.MedicalSecretaryID= 0;
      this.CreateUser.SleepingReferrerID= 0;
    }
    else if (this.SelectedGroupName == 'Client'){
      this.CreateUser.ExpertID = 0;
      this.CreateUser.InstructionID = event;
      this.CreateUser.ReferrerID= 0;
      this.CreateUser.SolicitorID= 0;
      this.CreateUser.MedicalSecretaryID= 0;
      this.CreateUser.SleepingReferrerID= 0;
    }
    else if (this.SelectedGroupName == 'Referrer'){
      this.CreateUser.ExpertID = 0;
      this.CreateUser.InstructionID = 0;
      this.CreateUser.ReferrerID= event;
      this.CreateUser.SolicitorID= 0;
      this.CreateUser.MedicalSecretaryID= 0;
      this.CreateUser.SleepingReferrerID= 0;
    }
    else if(this.SelectedGroupName == 'Medical Secretary'){
      this.CreateUser.ExpertID = 0;
      this.CreateUser.InstructionID = 0;
      this.CreateUser.ReferrerID= 0;
      this.CreateUser.SolicitorID= 0;
      this.CreateUser.MedicalSecretaryID= event;
      this.CreateUser.SleepingReferrerID= 0;
    }
    else if(this.SelectedGroupName == 'Sleeping Referrer'){
      this.CreateUser.ExpertID = 0;
      this.CreateUser.InstructionID = 0;
      this.CreateUser.ReferrerID= 0;
      this.CreateUser.SolicitorID= 0;
      this.CreateUser.MedicalSecretaryID= 0;
      this.CreateUser.SleepingReferrerID= event;
    }
    else{
      this.CreateUser.ExpertID = 0;
      this.CreateUser.InstructionID = 0;
      this.CreateUser.ReferrerID= 0;
      this.CreateUser.SolicitorID= event;
      this.CreateUser.MedicalSecretaryID= 0;
      this.CreateUser.SleepingReferrerID= 0;
    }

  }


  selectedUpdateGroupNameData(event){
    if(this.SelectedGroupName == 'Expert' && 'Medical Expert'){
      this.selectedUser.ExpertID = event;
      this.selectedUser.InstructionID = 0;
      this.selectedUser.ReferrerID= 0;
      this.selectedUser.SolicitorID= 0;
      this.selectedUser.MedicalSecretaryID= 0;
      this.selectedUser.SleepingReferrerID= 0;
    }
    else if (this.SelectedGroupName == 'Client'){
      this.selectedUser.ExpertID = 0;
      this.selectedUser.InstructionID = event;
      this.selectedUser.ReferrerID= 0;
      this.selectedUser.SolicitorID= 0;
      this.selectedUser.MedicalSecretaryID= 0;
      this.selectedUser.SleepingReferrerID= 0;
    }
    else if (this.SelectedGroupName == 'Referrer'){
      this.selectedUser.ExpertID = 0;
      this.selectedUser.InstructionID = 0;
      this.selectedUser.ReferrerID= event;
      this.selectedUser.SolicitorID= 0;
      this.selectedUser.MedicalSecretaryID= 0;
      this.selectedUser.SleepingReferrerID= 0;
    }
    else if(this.SelectedGroupName == 'Medical Secretary'){
      this.selectedUser.ExpertID = 0;
      this.selectedUser.InstructionID = 0;
      this.selectedUser.ReferrerID= 0;
      this.selectedUser.SolicitorID= 0;
      this.selectedUser.MedicalSecretaryID= event;
      this.selectedUser.SleepingReferrerID= 0;
    }
    else if(this.SelectedGroupName == 'Sleeping Referrer'){
      this.selectedUser.ExpertID = 0;
      this.selectedUser.InstructionID = 0;
      this.selectedUser.ReferrerID= 0;
      this.selectedUser.SolicitorID= 0;
      this.selectedUser.MedicalSecretaryID= 0;
      this.selectedUser.SleepingReferrerID= event;
    }
    else{
      this.selectedUser.ExpertID = 0;
      this.selectedUser.InstructionID = 0;
      this.selectedUser.ReferrerID= 0;
      this.selectedUser.SolicitorID= event;
      this.selectedUser.MedicalSecretaryID= 0;
      this.selectedUser.SleepingReferrerID= 0;
    }

  }


  selectedSecurityQuestionData(event){
    this.CreateUser.SecurityQuestionID = event;
  }
  selectedUpdateSecurityQuestionData(event){
    this.selectedUser.SecurityQuestionID = event;
  }

  selectedGroupforSearchingUsers(event){
    this.SearchGroupId = event;
  }

  selectedStatus(event){
    this.CreateUser.Status = event;
  }
  selectedUpdateStatus(event){
    this.selectedUser.Status = event;
  }


  SearchUsers(){

     this.UserService.getSearchedUserData(this.SearchGroupId,this.SearchIsgoPrivate).subscribe(data=>{
      this.UserData = data.outputObject;
    },
    error=>{ 
      console.log(error);
    });
  }

  createUser(){
if(this.ConfirmPassword == this.CreateUser.Password){
  this.UserService.CreateNewUser(this.CreateUser).subscribe((resp)=>{

    this.Toastr.success('User Created Successfully ');
    $("#CreateUserModal").modal("hide");
    this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    });
}
else{this.Toastr.error('Your Passwords do not match !!!');}
    
  } //To create a new User

  UpdateUser(){

    if(this.ConfirmPassword == this.selectedUser.Password){
      this.UserService.UpdateUser(this.selectedUser).subscribe((resp)=>{
    
        this.Toastr.success('User Updated Successfully ');
        $("#EditUserModal").modal("hide");
        this.ngOnInit();
        },
        (err)=>{
          console.log(err);
        });
    }
    else{this.Toastr.error('Your Passwords do not match !!!');}
        
}


  DeleteUser(data:any){

    this.UserService.DeleteUser(data.ID).subscribe(resp=>{
      this.Toastr.success('User Deleted Successfully ');
      this.ngOnInit();
      $("#DeleteUserModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

}


