import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlaService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSLAServices(id):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/GetExpertServices?ExpertID=${id}`;
    
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

  createExpertServiceSLA(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/CreateExpertServiceSLA`;
    
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

  getExpertServicesSLA(id,expertID,expertServiceID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/GetExpertServicesSLA?id=${id}&expertID=${expertID}&expertServiceID=${expertServiceID}`;
    
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

  updateExpertServiceSLA(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/UpdateExpertServiceSLA`;
    
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

  getExpertSLATimeManagement(id,expertID,expertServiceID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/GetExpertSLATimeManagement?id=${id}&expertID=${expertID}&expertServiceID=${expertServiceID}`;
    
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

  createExpertSLATimeManagement(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/CreateExpertSLATimeManagement`;
    
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

  updateExpertSLATimeManagement(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/UpdateExpertSLATimeManagement`;
    
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
  updateExpertSLAStaus(data:any){
    let requestUrl = this.baseUrl+`/api/ExpertServices/ExpertServiceSLAStatusUpdate`;
    
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

  // Exepert Availability
  getExpertAvailability(id,expertId):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/GetExpertAvailibility?ID=${id}&ExpertID=${expertId}`;
    
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

  createExpertAvailability(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/CreateExpertAvailibility`;
    
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

  updateExpertAvailability(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/UpdateExpertAvailibility`;
    
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

  //Expert DNAS 

  getExpertDnas(id,expertID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/GetDNASlab?ID=${id}&ExpertID=${expertID}`;
    
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

  createExpertDNAS(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/CreateDNASlab`;
    
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

  updateExpertDNAS(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/UpdateDNASlab`;
    
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

  //Expert Appointment Cancellation

  getAppointmentCancellation(id,expertID,referrelID,expertClinicSlotPlanID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/GetAppointmentCancellation?ID=${id}&ExpertID=${expertID}&RefferelID=${referrelID}&ExpertClinicSlotPlanID=${expertClinicSlotPlanID}`;
    
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

  createAppointmentCancellation(data?:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/CreateAppointmentCancellation`;
    
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

  updateAppointmentCancellation(data?:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/UpdateAppointmentCancel`;
    
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
  
  //Expert Paid Allowances

  getExpertOTOP(id,expertID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/GetExpertOTOP?ID=${id}&ExpertID=${expertID}`;
    
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
  createExpertOTOP(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/CreateExpertOTOP`;
    
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
  updateExpertOTOP(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/ExpertServices/UpdateExpertOTOP`;
    
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
