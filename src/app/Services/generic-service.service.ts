import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable,throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {
  baseUrl:string="http://patientrefferals-api-dev.asd.org.pk";
  constructor(private _http:HttpClient,private router:Router) { }

  getAdminRegionData():Observable<any>{
    
    let FullUrl = this.baseUrl+"/api/Admin/GetRegionsDistricts";
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
  
  getDistrictData():Observable<any>{

    let FullUrl = this.baseUrl +"/api/RegionalCoordinator/GetAllDistricts";
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

  getAdminDistrictData():Observable<any>{

    let FullUrl = this.baseUrl +"/api/Admin/GettAllDistricts";
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

  getAllDistrictData():Observable<any>{

    let FullUrl = this.baseUrl +"/api/Admin/GetAllDistricts";
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

  getAllTehsilData():Observable<any>{

    let FullUrl = this.baseUrl+"/api/Admin/GetAllTehsils";
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

  getTehsilData(DistrictId:any):Observable<any>{

    let FullUrl = this.baseUrl +"/api/RegionalCoordinator/GetAllTehsils/"+DistrictId;
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

  Logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
