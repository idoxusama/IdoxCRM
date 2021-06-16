import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferrerService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getReferrerPersonalInfo(id):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/GetReferrerPersonalInfo?ID=${id}`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.get(requestUrl,requestOptions);
  }

  createReferrerPersonalInfo(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/CreateReferrerPersonalInfo`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.post(requestUrl,data,requestOptions);
  }

  updateReferrerPersonalInfo(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/UpdateReferrerPersonalInfo`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.post(requestUrl,data,requestOptions);
  }


  getReferrerDocuments(id,referrerID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/GetReferrerDocument?ID=${id}&ReferrerID=${referrerID}`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.get(requestUrl,requestOptions);
  }

  createReferrerDocuments(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/CreateReferrerDocument`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.post(requestUrl,data,requestOptions);
  }

  getReferrerBankDetail(id,referrerID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/GetReferrerBankDetail?ID=${id}&ReferrerID=${referrerID}`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.get(requestUrl,requestOptions);
  }

  createReferrerBankDetail(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/CreateBankDetail`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.post(requestUrl,data,requestOptions);
  }

  updateReferrerBankDetail(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/UpdateReferrerBankDetail`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.post(requestUrl,data,requestOptions);
  }

  updateReferrerStatus(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Referrer/UpdateReferrerStatus`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.post(requestUrl,data,requestOptions);
  }

}
