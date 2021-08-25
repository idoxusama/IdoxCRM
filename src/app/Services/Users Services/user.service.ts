import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string=environment.apiUrl;
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

  getUsers(data):Observable<any>{
    let FullUrl = this.baseUrl+"/api/User/GetUser";
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(FullUrl,data,requestOptions );
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

  checkUserExist(userName):Observable<any>{
    let modal={
      userName:userName
    };
    let FullUrl = this.baseUrl+"/api/User/CheckUserName";
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(FullUrl,modal,requestOptions );
  }

  createUserPermissionPlusUserRole(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/User/CreateUserPermissionPlusUserRole';
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(requestUrl,data,requestOptions);
  }


  updateUserRole(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api​/User​/UpdateUserRole';
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(requestUrl,data,requestOptions);
  }

  getUserRole(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/User/GetUserRole';
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(requestUrl,data,requestOptions);
  }

  getUserRolePermission(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/User/GetUserRolePermission';

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(requestUrl,data,requestOptions);
  }

  updateUserPermissionPlusUserRole(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/User/UpdateUserPermissionPlusUserRole';
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(requestUrl,data,requestOptions);
  }

  updatePermissionStatus(data){
    let requestUrl = this.baseUrl+'/api/User/MenuStatusUpdate';
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(requestUrl,data,requestOptions);
  }

  getUserType(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/User/GetUserType';
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.post(requestUrl,data,requestOptions);
  }

}


