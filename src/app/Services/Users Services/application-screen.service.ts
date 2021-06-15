import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationScreenService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getApplicationScreenData ():Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/GetAppScreen";
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


  CreateNewApplicationScreen(Data:any):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/AppScreenInsert";
    return this._http.post(FullUrl,
      "ID="+Data.id
      +"&Status="+Data.Status
     +"&Description="+Data.description
     +"&CreatedBy="+localStorage.getItem("userName"),requestOptions);
  }

  DeleteApplicationScreen(DataID:number):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/DeleteAppScreen";
    return this._http.post(FullUrl,
      "ID="+DataID
      +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }
  

  UpdateApplicationScreen(Data: any):Observable<any>{
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let FullUrl = this.baseUrl+"/api/User/UpdateAppScreen";
    return this._http.post(FullUrl,
      "ID="+ Data.id
    +"&Status="+Data.Status
    +"&Description="+Data.description
    +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }
}

