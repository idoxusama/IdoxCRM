import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OutstandingClinicListService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getUnsentOutstandingClinicsData (Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Clinic/GetOutStandingClinicList?ExpertID="+Data.ExpertID+"&ExpertTypeID="+Data.ExpertTypeID +
                                                                      "&StartDate="+Data.StartDate+"&EndDate="+Data.EndDate;
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


  getSentOutstandingClinicsData(Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Clinic/GetOutStandingClinicListSentRecord?ExpertID="+Data.ExpertID+"&ExpertTypeID="+Data.ExpertTypeID +
                                                                      "&StartDate="+Data.StartDate+"&EndDate="+Data.EndDate;
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

  getExpertTypes():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertClinicType";
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

  getExperts(Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertForClinicList?ExpertTypeID="+ Data.ExpertTypeID;
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

  ChangeToSentClinic(Id):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Clinic/OutStandingClinicListSentDataUpdate";
    return this._http.post(FullUrl, "ClinicID="+ Id,requestOptions);
  }

  ChangeToUnsentClinic(Id):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Clinic/OutStandingClinicListUnSentDataUpdate";
    return this._http.post(FullUrl, "ClinicID="+ Id,requestOptions);
  }


}
