import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  aDDINGNewExpertTypeAndCreateFormSetting(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Setting/ADDINGNewExpertTypeAndCreateFormSetting`;
    
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

  getExpertFieldName():Observable<any>{
    let requestUrl = this.baseUrl+`/api/Setting/GetExpertFieldName`;
    
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
  
  getAllExpertType(id):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Setting/GetAllExpertType?ExpertTypeId=${id}`;
    
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

  getReferrerTypes(id):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Setting/GetReferrerType?ID=${id}`;
    
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

  getCountries(id):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Setting/GetCountries?ID=${id}`;
    
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

  getMultiDiamensionalStuffValues(stuffName,stuffSubCategory):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Setting/GetMultidimensionalStuffValues?stuffName=${stuffName}&stuffSubCategory=${stuffSubCategory}`;
    
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

  getPerformaQuestionniareValue(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/GetPerformaQuestionniareValue';
    
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

  getMenuWithSubMenu(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/GetMenuWithSubMenu';
    
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

  getSubMenu(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/GetSubMenu';
    
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
  getMenu(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/GetMenu';
    
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

  idoxMenuStatusUpdate(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/IdoxMenuStatusUpdate';
    
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

  idoxSubMenuStatusUpdate(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/IdoxSubMenuStatusUpdate';
    
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

  getMenuSubMenuSettings(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/GetMenuSubMenuSetting';
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

  updateMenuSetting(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/Setting/UpdateMenuSetting';
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
