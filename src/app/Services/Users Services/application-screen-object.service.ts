import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationScreenObjectService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getApplicationScreenObjectData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/GetAppScreenObject";
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


  CreateNewApplicationObjectScreen(Data:any):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/AppScreenObjectInsert";
    return this._http.post(FullUrl,
      "ID="+Data.id
     +"&AppScreenID= "+Data.AppScreen
     +"&Status="+Data.Status
     +"&Description="+Data.description
     +"&CreatedBy="+localStorage.getItem("userName"),requestOptions);
  }

  DeleteApplicationObjectScreen(DataID:number):Observable<any>{

    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/User/DeleteAppScreenObject";
    return this._http.post(FullUrl,
      "ID="+DataID
      +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }
  

  UpdateApplicationObjectScreen(Data: any):Observable<any>{
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let FullUrl = this.baseUrl+"/api/User/AppScreenObjectUpdate";
    return this._http.post(FullUrl,
      "ID="+ Data.id
    +"&AppScreenID= "+Data.appScreenID
    +"&Status="+Data.Status
    +"&Description="+Data.description
    +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }
}


