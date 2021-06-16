import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  baseUrl:string="http://localhost:5002";
  constructor(private _http:HttpClient,private router:Router) { }

  getAllVenueData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertVenue?ExpertClinicTypeID="+0;
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

  getSelectedVenueData(Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertVenue?ExpertClinicTypeID="+ Data.ExpertClinicTypeID + "&ExpertID=" + Data.ExpertID;
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

  getSelectedExpertsData(data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertForClinicList?ExpertTypeID="+data.ExpertClinicTypeID;
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

  getCreationSelectedExpertsData(data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertForClinicList?ExpertTypeID="+data.ExpertVenueTypeID;
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

  getExpertTypesList ():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertType";
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


  CreateExpertVenue(Data:FormData):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      //'Content-Type':'multipart/form-data',
      //'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/AddExpertVenue";
    return this._http.post(FullUrl, Data ,requestOptions);
  }

  UpdateExpertVenue(Data:FormData):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      //'Content-Type':'multipart/form-data',
      //'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/UpdateExpertVenue";
    return this._http.post(FullUrl, Data ,requestOptions);
  }


  DeleteMedcoExpert(Id):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/DeleteMedcoExpert";
    return this._http.post(FullUrl, "ID="+ Id + "&LastModifiedBY=" + localStorage.getItem("userName") ,requestOptions);
  }

}
