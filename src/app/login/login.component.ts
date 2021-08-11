import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import {  Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: string;
  public Username: string;
  public Password: string;
  constructor(private accountService: AccountServiceService, private router: Router,private Toastr: ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem("access_token") != null){
      this.router.navigate(['/dashboard']);
    }
  }

  loginSubmit(){
    debugger
    this.errorMsg = null;
    this.Toastr.toastrConfig.progressBar = true;
    this.accountService.login(this.Username,this.Password).subscribe((resp)=>{
      debugger
        this.Toastr.success('Welcome ' + resp.outputObject[0].firstName + ' ' + resp.outputObject[0].lastName);
    // Store access token, UserId and Role in local storage
    localStorage.setItem('access_token',resp.outputObject[0].accessToken);
    localStorage.setItem('role',resp.outputObject[0].createdBy);
    localStorage.setItem('userName',resp.outputObject[0].userName);
    localStorage.setItem('userID',resp.outputObject[0].id);
    localStorage.setItem('userTypeID',resp.outputObject[0].typeID);

    this.router.navigate(['/dashboard']);
    },
    (err)=>{
      if(err.status == 400)
      this.Toastr.error('Invalid Email Address or Password'); 
    });
  }
}
