import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams, HttpErrorResponse } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Console } from 'console';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalsecretaryService {

  baseUrl=environment.apiUrl;
  constructor(private _http:HttpClient,private router:Router) { }

  getMedicalSecretaryData (id:any):Observable<any>{
    let FullUrl = this.baseUrl+"/api/MedicalSecretary/GetAllMedicalSecretary?id="+id;
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict)
    };

    return this._http.get(FullUrl,requestOptions);
  }

  CreateMedicalSecretary(Data:any):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/MedicalSecretary/AddMedicalSecretary";
    return this._http.post(FullUrl,Data,requestOptions);
  }

  UpdateMedicalSecretary(Data:any):Observable<any>{
    debugger
    Data.lastModifiedBy = localStorage.getItem('userID');
    Data.fullName = Data.namePrefix + ' ' + Data.firstName + ' ' + Data.lastName;
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/MedicalSecretary/updateMedicalSecretary";
    return this._http.post(FullUrl,Data,requestOptions);
  }


  DeleteMedicalSecretary(Data:any):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/MedicalSecretary/UpdateMedicalSecretaryStatus";
    return this._http.post(FullUrl,Data,requestOptions);
  }


  //Reprot writing services
  createRptConversationLog(data):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let requestUrl = this.baseUrl+"/api/ReportWriting/CreateRptConversationLog";
    return this._http.post(requestUrl,data,requestOptions);
  }
}
