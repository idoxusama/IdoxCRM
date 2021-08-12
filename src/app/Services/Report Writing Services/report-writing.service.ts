import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportWritingService {
  private baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


  createRptConversationLog(data): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + "/api/ReportWriting/CreateRptConversationLog";
    return this.http.post(requestUrl, data, requestOptions);
  }

  createRptLogReferenceImg(data): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + "/api/ReportWriting/CreateRptLogReferenceImg";
    return this.http.post(requestUrl, data, requestOptions);
  }

  getExpertRptLog(instructionId): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + `/api/ReportWriting/GetExpertRptLog?instructionID=${instructionId}`;
    return this.http.get(requestUrl, requestOptions);
  }

  getMedSecRptLog(instructionId): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + `/api/ReportWriting/GetMedSecRptLog?instructionID=${instructionId}`;
    return this.http.get(requestUrl, requestOptions);
  }

  createRptLogResponse(data): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + "/api/ReportWriting/CreateRptLogResponse";
    return this.http.post(requestUrl, data, requestOptions);
  }

  createRptLogRefImgResponse(data): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl+"/api/ReportWriting/CreateRptLogRefImgResponse";
    return this.http.post(requestUrl, data, requestOptions);
  }

  expertRptLogStatusUpdate(data): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + "/api/ReportWriting/ExpertRptLogStatusUpdate";
    return this.http.post(requestUrl, data, requestOptions);
  }

  medSecRptLogStatusUpdate(data): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + "/api/ReportWriting/MedSecRptLogStatusUpdate";
    return this.http.post(requestUrl, data, requestOptions);
  }

  getExpertRptLogResponse(expertRptLogID): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + `/api/ReportWriting/GetExpertRptLogResponse?expertRptLogID=${expertRptLogID}`;
    return this.http.get(requestUrl, requestOptions);
  }

  getMedSecRptLogResponse(medSecRptLogID): Observable<any> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + `/api/ReportWriting/GetMedSecRptLogResponse?medSecRptLogID=${medSecRptLogID}`;
    return this.http.get(requestUrl, requestOptions);
  }

  async getImage(imageUrl):Promise<any>{
    let modal={
      ImgUrl:imageUrl
    };
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + '/api/ReportWriting/GetRptReviewImgByUrl';
    return await this.http.post(requestUrl,modal, requestOptions).toPromise();
  }

  getConversationRptLog(model):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + '/api/ReportWriting/GetConversationRptLog';
    return this.http.post(requestUrl,model, requestOptions);
  }

  getRecordReviewRptLog(id):Observable<any>{
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let requestUrl = this.baseUrl + `/api/ReportWriting/GetRecordReviewRptLog?instructionID=${id}`;
    return this.http.get(requestUrl, requestOptions);
  }
}
