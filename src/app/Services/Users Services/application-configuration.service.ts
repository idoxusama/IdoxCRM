import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationConfigurationService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getApplicationConfigurationData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/User/ApplicationConfiguration";
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


  UpdateApplicationConfiguration(ApplicationConfigurationData: any):Observable<any>{
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let FullUrl = this.baseUrl+"/api/User/UpdateApplicationConfiguration";
    return this._http.post(FullUrl,
      "ID="+ ApplicationConfigurationData.id
    +"&Title="+ApplicationConfigurationData.title
    +"&ConfigKey="+ApplicationConfigurationData.configKey
    +"&KeyValue="+ApplicationConfigurationData.keyValue
    +"&Status="+ApplicationConfigurationData.status
    +"&LastModifiedBy="+localStorage.getItem("userName"),requestOptions);
  }
}
