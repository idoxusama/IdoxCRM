import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {
  baseUrl: string = environment.apiUrl;
  constructor(private http:HttpClient) { }

  trackUserSpentTimeOnComponent(startTime, endTime,url):Observable<any>{
    let requestUrl = this.baseUrl+'/api/UserActivity/CreateComponentActivityTime';
    let data:any={
      componentName:url,
      entranceTime:startTime,
      exitTime:endTime,
      createdBy:localStorage.getItem('userID')
    };
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
