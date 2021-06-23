import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicPlansService {
  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getExpertClinicPlan(id,expertID,locationAddressID):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/GetExpertClinicPlan?ID=${id}&ExpertID=${expertID}&LocationAddressID=${locationAddressID}`;
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

  createExpertClinicPlan(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/CreateExpertClinicPlan`;
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

  updateExpertClinicPlan(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/UpdateExpertClinicPlan`;
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

  updateExpertClinicPlanStatus(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/ClinicPlanStatusUpdate`;
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
