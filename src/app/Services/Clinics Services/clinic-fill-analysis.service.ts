import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClinicFillAnalysisService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getClinicFillAnalysisList(Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Clinic/GetClinicAnalysisFull?ExpertID="+Data.ExpertID+"&ExpertTypeID="+Data.ExpertTypeID +
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
}
