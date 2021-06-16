import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

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


  CreateNewSecurityQuestion(Data:any):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/InsertSecurityQuestion";
    return this._http.post(FullUrl,
      "Status="+Data.Status
     +"&Description="+Data.description
     +"&CreatedBy="+localStorage.getItem("userName"),requestOptions);
  }

  DeleteSecurityQuestion(DataID:number):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/DeleteSecurityQuestion";
    return this._http.post(FullUrl,
      "ID="+DataID
      +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }
  

  UpdateSecurityQuestion(Data: any):Observable<any>{
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let FullUrl = this.baseUrl+"/api/User/UpdateSecurityQuestion";
    return this._http.post(FullUrl,
      "ID="+ Data.id
    +"&Status="+Data.Status
    +"&Description="+Data.description
    +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }
}
