import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InstructionService } from '../Instruction Main/instruction.service';

@Injectable({
  providedIn: 'root'
})
export class OutstandingAppointmentsService {
  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getOutstandingAppointments(id):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Instruction/GetOutStandingAppointment?instructionID=${id}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl, requestOptions);
  }
  getExpertClinicPlan(id?,expertID?,LocationAddressID?):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/GetExpertClinicPlan?ID=${id}&ExpertID=${expertID}&LocationAddressID=${LocationAddressID}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl, requestOptions);
  }

  getExpertNearestClinicPlan(clinicLattitude,clinicLongitude):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/GetNearestClinicPlan?clinicLatitude=${clinicLattitude}&clinicLongitude=${clinicLongitude}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl, requestOptions);
  }

  getExpertClinicSlotPlan(id,expertID,instructionID,expertClinicPlanID){
    let requestUrl=this.baseUrl+`/api/Expert/GetExpertClinicSlotPlan?ID=${id}&ExpertID=${expertID}&InstructionID=${instructionID}&ExpertClinicPlanID=${expertClinicPlanID}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl, requestOptions);
  }

  createExpertClinicSlotPlan(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/CreateExpertClinicSlotPlan`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data, requestOptions);
  }

  updateExpertClinicSlotPlan(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/UpdateExpertClinicSlotPlan`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data, requestOptions);
  }

  isAppointmentReserve(params):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/IsAppointmentReserve`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,params,requestOptions);
  }

}
