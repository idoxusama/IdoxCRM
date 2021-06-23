import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VenuelocationService {
  baseUrl: string = environment.apiUrl;

  constructor(private http:HttpClient) { }
  
  //Location address
  getLocationAddress(id,countryID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/GetLocationAddress?ID=${id}&CountryID=${countryID}`;
    
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

  createLocationAddress(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/CreateLocationAddress`;
    
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

  updateLocationAddress(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/UpdateLocationAddress`;
    
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

  // Location Site Info

  getLocationSiteInfo(id,locationAddressID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/GetLocationSiteInfo?ID=${id}&LocationAddressID=${locationAddressID}`;
    
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

  createLocationSiteInfo(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/CreateLocationSiteInfo`;
    
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
  updateLocationSiteInfo(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/UpdateLocationSiteInfo`;
    
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

  //Location Images

  getLocationImages(id,locationAddressID):Observable<any>{
    let requrestUrl = this.baseUrl+`/api/VenueLocation/GetLocationImages?ID=${id}&LocationAddressID=${locationAddressID}`;
    //let requrestUrl = this.baseUrl+`/api/VenueLocation/GetProfilePicture?key=locationimg%2Froom%2Froom3.jpg`;
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.get(requrestUrl,requestOptions);
  }

  createLocationImages(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/CreateLocationImages`;
    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.post(requestUrl,data,requestOptions);
  }
  updateLocationImages(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/UpdateLocationImages`;
    
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

  // Location Rooms
  getLocationRooms(id,locationAddressID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/GetLocationRooms?ID=${id}&LocationAddressID=${locationAddressID}`;
    
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

  createLocationRooms(data):Observable<any>{
    debugger
    let requestUrl = this.baseUrl+`/api/VenueLocation/CreateLocationRooms`;
    
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

  updateLocationRooms(data):Observable<any>{
    let requestUrl = this.baseUrl+`/api/VenueLocation/UpdateLocationRooms`;
    
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


  // Update Location Status
  updateLocationStatus(data){
    let requestUrl = this.baseUrl+`/api/VenueLocation/UpdateLocationStatus`;
    
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

  //get nearest location
  getNearestLocations(mapLatitude,mapLongitude):Observable<any>{
    let requestUrl= this.baseUrl+`/api/GoogleLocation/GetNearestLocation??locationLatitude=${mapLatitude}&locationLongitude=${mapLongitude}`;
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
}
