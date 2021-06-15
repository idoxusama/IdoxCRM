import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticexpertclinicsService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getDiagnosticProviderData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetDiagnostic";
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

  getDiagnosticExpertClinicData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetDiagnosticClinic";
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

  CreateDiagnosticExpertClinic(Data:any):Observable<any>{
    Data.CreatedBy = localStorage.getItem('userName');
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/AddDiagnosticClinic";
    return this._http.post(FullUrl,Data,requestOptions);
  }

  UpdateDiagnosticExpertClinics(Data:any):Observable<any>{
    Data.LastModifiedBy = localStorage.getItem('userName');
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/UpdateDiagnosticClinic";
    return this._http.post(FullUrl,Data,requestOptions);
  }


  DeleteDiagnosticExpertClinics(DataID:any):Observable<any>{
    let Data  = {ID:DataID,LastModifiedBy:localStorage.getItem('userName')}
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/DeleteDiagnosticClinic";
    return this._http.post(FullUrl,Data,requestOptions);
    
  }
}
