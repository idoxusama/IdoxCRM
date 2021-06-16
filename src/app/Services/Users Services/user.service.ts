import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getUserData ():Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/GetUsers?userid="+0+"&isgoprivate="+false;
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.get(FullUrl,requestOptions );
  }

  getSearchedUserData(GroupID,isgoprivate):Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/GetUsers?userid="+GroupID+"&isgoprivate="+isgoprivate;
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.get(FullUrl,requestOptions );
  }


  CreateNewUser(Data:any):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/RegisterCustomer";
    return this._http.post(FullUrl,
      "GroupID="+Data.GroupID
      +"&ExpertID="+Data.ExpertID
      +"&ReferrerID="+Data.ReferrerID
      +"&SolicitorID="+Data.SolicitorID
      +"&InstructionID="+Data.InstructionID
      +"&MedicalSecretaryID="+Data.MedicalSecretaryID
      +"&SleepingReferrerID="+Data.SleepingReferrerID
      +"&SecurityQuestionID="+Data.SecurityQuestionID
      +"&SecurityQuestionAnswer="+Data.SecurityQuestionAnswer
      +"&UserName="+Data.UserName
      +"&Password="+Data.Password
      +"&LastName="+Data.LastName
      +"&FirstName="+Data.FirstName
      +"&HomePhoneNo="+Data.HomePhoneNo
      +"&WorkPhoneNo="+Data.WorkPhoneNo
      +"&FaxNo="+Data.FaxNo
      +"&CellNo="+Data.CellNo
      +"&Email="+Data.Email
      +"&IsGoPrivateUser="+Data.IsGoPrivateUser
      +"&Status="+Data.Status
     +"&CreatedBy="+localStorage.getItem("userName"),requestOptions);
  }

  DeleteUser(DataID:number):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/DeleteUser";
    return this._http.post(FullUrl,
      "ID="+DataID
      +"&DeletedBy="+localStorage.getItem("userName"),requestOptions);
  }
  

  UpdateUser(Data: any):Observable<any>{
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let FullUrl = this.baseUrl+"/api/User/UpdateCustomer";
    return this._http.post(FullUrl,
      "ID="+ Data.ID
      +"&GroupID="+Data.GroupID
      +"&ExpertID="+Data.ExpertID
      +"&ReferrerID="+Data.ReferrerID
      +"&SolicitorID="+Data.SolicitorID
      +"&InstructionID="+Data.InstructionID
      +"&MedicalSecretaryID="+Data.MedicalSecretaryID
      +"&SleepingReferrerID="+Data.SleepingReferrerID
      +"&SecurityQuestionID="+Data.SecurityQuestionID
      +"&SecurityQuestionAnswer="+Data.SecurityQuestionAnswer
      +"&UserName="+Data.UserName
      +"&Password="+Data.Password
      +"&LastName="+Data.LastName
      +"&FirstName="+Data.FirstName
      +"&HomePhoneNo="+Data.HomePhoneNo
      +"&WorkPhoneNo="+Data.WorkPhoneNo
      +"&FaxNo="+Data.FaxNo
      +"&CellNo="+Data.CellNo
      +"&Email="+Data.Email
      +"&IsGoPrivateUser="+Data.IsGoPrivateUser
      +"&Status="+Data.Status
     +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }

  getGroupData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/GetGroup";
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.get(FullUrl,requestOptions );
  }

  getGroupIDData(GroupID , IsgoUserPrivate):Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/GetSelectedGroupData?group=" + GroupID + "&IsgoUserPrivate=" + IsgoUserPrivate  ;
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.get(FullUrl,requestOptions );
  }

  getSecurityQuestionData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/GetSecurityQuestion";
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.get(FullUrl,requestOptions );
  }


}


