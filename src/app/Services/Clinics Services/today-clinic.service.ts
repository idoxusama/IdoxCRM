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

  updateClinicState(appSchedualID, state):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Instruction/UpdateClinicState?appScheduleID=${appSchedualID}&stateName=${state}`;
    
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
