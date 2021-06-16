import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicoExpertClinicsService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getExpertClinicsData(Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetClinic?ExpertClinicTypeID="+Data.ExpertClinicTypeID;
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

  getSearchedExpertClinicsData(Data):Observable<any>{
    
    let FullUrl = this.baseUrl+"/api/Expert/GetClinic?ExpertClinicTypeID="+Data.ExpertClinicTypeID + "&ExpertID=" + Data.ExpertID +
                                                      "&StartClinicDate="+Data.StartClinicDate + "&EndClinicDate="+Data.EndClinicDate;
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

  getSearchedExpertTypeData(Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertForClinicList?ExpertTypeID="+Data.ExpertClinicTypeID;
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

  GetExpertClinicType():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertClinicType";
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

  getExpertForClinicsListData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertForClinicList?ExpertTypeID="+0;
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


  getMedcoExpertVenues():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetVenue";
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

  getSlotLength(Data:any):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/MedcoClinicSlot?SlotLength="+Data.slotLength+
                                                            "&StartTime="+Data.startTime+
                                                            "&EndTime="+Data.endTime+
                                                            "&LunchStartTime="+Data.lunchStartTime+
                                                            "&LunchEndTime="+Data.lunchEndTime;
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


  CreateMedicoExpertClinic(Data:any):Observable<any>{
    Data.createdBy = localStorage.getItem('userName');
    Data.clinicType = "0";
    Data.expertClinicTypeID = "1";
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/ADDClinic";
    return this._http.post(FullUrl,Data,requestOptions);
  }


  UpdateMedicoExpertClinic(Data:any):Observable<any>{
    Data.lastModifiedBy = localStorage.getItem('userName');
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/UpdateClinic";
    return this._http.post(FullUrl,Data,requestOptions);
    
  }



  DeleteMedicoExpertClinic(DataID:any):Observable<any>{
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
    let FullUrl = this.baseUrl+"/api/Expert/DeleteClinic";
    return this._http.post(FullUrl,Data,requestOptions);
    
  }




}

