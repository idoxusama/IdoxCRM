import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedcoexpertService {
  baseUrl:string=environment.apiUrl;
  constructor(private _http:HttpClient,private router:Router) { }

  getAllExpertsData():Observable<any>{

    let FullUrl = this.baseUrl+`/api/Setting/GetAllExpertType?ExpertTypeID=${0}`;
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

    let FullUrl = this.baseUrl+"/api/Expert/GetExpert?ExpertTypeID="+data;
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

  getReportSpecialitiesData ():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetSpecialities";
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

  getExpertsFurtherSpecialitiesData (Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertFurtherSpeciality?ExpertID="+Data;
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

  getExpertsQualitiesData (Data):Observable<any>{

    let FullUrl = this.baseUrl+"/api/Expert/GetExpertQualification?ExpertID="+Data;
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


  CreateMedcoExpert(Data:FormData):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      //'Content-Type':'multipart/form-data',
      //'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/AddExpert";
    return this._http.post(FullUrl, Data ,requestOptions);
  }

  UpdateMedcoExpert(Data:FormData):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      //'Content-Type':'multipart/form-data',
      //'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = this.baseUrl+"/api/Expert/UpdateExpert";
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
