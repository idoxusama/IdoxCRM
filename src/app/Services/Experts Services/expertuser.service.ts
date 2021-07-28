import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams, HttpEvent, HttpRequest } from '@angular/common/http'
import { BehaviorSubject, Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { _getTestBedRender3 } from '@angular/core/testing/src/r3_test_bed';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ExpertuserService {
  baseUrl:string=environment.apiUrl;
  expertProfileId:BehaviorSubject<string>= new BehaviorSubject<string>(null);
  
  constructor(private http:HttpClient,private router:Router) { }

  getExpertUsersData ():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/ExpertUsers";
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get(FullUrl,requestOptions );
  }

  getExperts(id):Observable<any>{
    let requestUrl = this.baseUrl+"/api/Expert/GetExpert?ExpertID=0";
    
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

  specialities():Observable<any>{
    let requestUrl = this.baseUrl+"/api/Expert/GetExpertSpeciality";
    
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
  subSpecialities(id:number):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/GetExpertSubSpeciality?expertSubSpecialityID=${id}`;
    
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

  companies():Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/GetExpertCompany`;
    
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


  // Expert Personal Info
  getExpertProfileInfo(expertFilterName,expertFilterID,expertCode?,profileState?):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/GetExpertProfile?expertFilterName=${expertFilterName}&expertFilterID=${expertFilterID}&expertCode=${expertCode}&profileState=${profileState}`;    
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

  createPersonalInfo(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/CreateExpertPersonalInfo`;
    
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

  updateExpertPersonalInfo(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/UpdateExpertProfile`;
    
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


  // Expert Contact Info
  createExpertContactInfo(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/CreateExpertContactInfo`;
    
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


  //Expert Fee Charages
  createExpertFeeCharges(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/CreateExpertFeeCharges`;
    
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


  // Expert Banks Detial

  getExpertBankDetailInfo(id):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/GetExpertBankDetail?expertID=${id}`;
    
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
  createExpertBankDetailInfo(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/CreateExpertBankDetail`;
    
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

  updateExpertBankDetail(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/UpdateExpertBankDetail`;
    
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


  // Expert Documents
  getExpertPersonalDocuments(id):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Expert/GetExpertPersonalDocument?expertID=${id}`;
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl,requestOptions);
  }

  uploadPersonalDocuments(data:any):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/CreateExpertPersonalDocument`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }


  //Update Expert Profile Status

  updateProfileStatus(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/ExpertStatusUpdate`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  //Expert ExpertMedicalRequiredRecord
  getExpertMedicalRequiredRecord(id,expertId):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/GetMedicalRequiredRecord?ID=${id}&ExpertID=${expertId}`;
    
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

  createExpertMedicalRequiredRecord(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/CreateMedicalRequiredRecord`;
    
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

  updateExpertMedicalRequiredRecord(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Expert/UpdateExpertMedicalRequiredRecord`;
    
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

  downloadMedicalRecord(fileUrl):any{
    return this.http.get(`${this.baseUrl}/api/Expert/Download/download?fileUrl=${fileUrl}`, {responseType: 'blob'});
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
