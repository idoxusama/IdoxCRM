import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams, HttpErrorResponse } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class MedicalsecretaryService {
  baseUrl:string="https://localhost:44311";
  constructor(private _http:HttpClient,private router:Router) { }

  getMedicalSecretaryData ():Observable<any>{

    let FullUrl = this.baseUrl+"/api/MedicalSecretary/GetAllMedicalSecretary?id=0";
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
    Data.createdBy = localStorage.getItem('userName');
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
    let FullUrl = this.baseUrl+"/api/MedicalSecretary/AddMedicalSecretary";
    return this._http.post(FullUrl,Data,requestOptions);
  }

  UpdateMedicalSecretary(Data:any):Observable<any>{
    Data.lastModifiedBy = localStorage.getItem('userName');
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


  DeleteMedicalSecretary(DataID:any):Observable<any>{
    let Data  = {id:DataID,lastModifiedBy:localStorage.getItem('userName')}
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/MedicalSecretary/DeleteMedicalSecretary";
    return this._http.post(FullUrl,Data,requestOptions);
    
  }

}
