import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodayClinicService {
  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getAllTodayAppointments(expertID):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Instruction/GetAllTodayAppointment?expertID=${expertID}`;
    
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
  
  getInstAssignMedSec(id,expertClinicSlotPlanID,medSecID):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Instruction/GetAllTodayAppointment?ID=${id}&expertClinicSlotPlanID=${expertClinicSlotPlanID}&medSecID=${medSecID}`;
    
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

  createInstAssignMedSec(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Clinic/CreateInstAssignMedSec`;
    
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
  updateInstAssignMedSec(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Clinic/UpdateInstAssignMedSec`;
    
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
  getAllInstAssignMedSec():Observable<any>{
    let requestUrl=this.baseUrl+`/api/Clinic/GetAllInstAssignMedSec`;
    
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

  getAllInstUnAssignMedSec():Observable<any>{
    let requestUrl=this.baseUrl+`/api/Clinic/GetAllInstUnAssignMedSec`;
    
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
}
