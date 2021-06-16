import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http'
import { Observable, throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InstructionSettingService {
  baseUrl: string = "http://localhost:5001";
  constructor(private _http: HttpClient, private router: Router) { }

  getAllExpertsTypesData(): Observable<any> {

    let FullUrl = this.baseUrl + "/api/Expert/GetExpertType";
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this._http.get(FullUrl, requestOptions);
  }

  getInstructionFieldsName(): Observable<any> {

    let FullUrl = this.baseUrl + "/api/Setting/GetInstructionFieldName?ExpertTypeID=" + 0;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this._http.get(FullUrl, requestOptions);
  }
  addInstructionFieldsSetting(InstructionData): Observable<any> {

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let FullUrl = this.baseUrl + "/api/Setting/AddInstructionCustomFieldsByExpertType";
    return this._http.post(FullUrl, InstructionData, requestOptions);
  }
}
