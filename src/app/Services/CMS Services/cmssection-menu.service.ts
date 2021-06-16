import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CMSSectionMenuService {
  baseUrl: string = "http://localhost:5001";

  constructor(private _http: HttpClient, private router: Router) { }

  getCMS():Observable<any>{
    let sectionUrl = this.baseUrl + "/api/CMS/GetCMSSection?ID=" + 0;
    const ReaderDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(ReaderDict),
    };
    return this._http.get(sectionUrl, requestOptions);
  }

  getCMSMenu(ID):Observable<any>{
    let sectionUrl = this.baseUrl + "/api/CMS/GetCMSSectionMenu?ID=" + ID;
    const ReaderDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(ReaderDict),
    };
    return this._http.get(sectionUrl, requestOptions);
  }
}
