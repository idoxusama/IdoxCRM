import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  baseUrl: string = environment.apiUrl;
  constructor(private http:HttpClient) { }

  //get Occupancy dropdown
  getOccupanyTypeList(){
    
  }

  //Instruction Personal Info
  
  getInstructionPersonalInfo(id):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionPersonalInfo?ID=${id}`;
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

  createInstructionPersonalInfo(data):Observable<any>{
    let requestUrl = this.baseUrl + "/api/Instruction/CreateInstructionPersonalInfo";
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl, data, requestOptions);
  }

  updateInstructionPersonalInfo(data):Observable<any>{
    let requestUrl = this.baseUrl + "/api/Instruction/UpdateInstructionPersonalInfo";
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl, data, requestOptions);
  }

  // Instruction Special Info

  getInstructionSpecial(id,instructionId):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Instruction/GetInstructionSpecial?ID=${id}&InstructionID=${instructionId}`;
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

  createInstructionSpecial(data):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionSpecial`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  updateInstructionSpecial(data):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateInstructionSpecial`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  //Instruction Case Hanlder

  getInstructionCaseHandler(id,instructionId):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionCaseHandler?ID=${id}&InstructionID=${instructionId}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl,requestOptions);
  }

  createInstructionCaseHandler(data):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionCaseHandler`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  updateInstructionCaseHandler(data):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateInstructionCaseHandler`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  //Instruction Translator

  getInstructionTranslator(id,instructionId):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionTranslator?ID=${id}&InstructionID=${instructionId}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl,requestOptions);
  }
  
  createInstructionTranslator(data):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionTranslator`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }
  
  updateInstructionTranslator(data):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateInstructionTranslator`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }


  // Instruction Medical Record

  getInstructionMedicalRecord(id,instructionId):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionMedicalRecord?ID=${id}&InstructionID=${instructionId}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl,requestOptions);
  }

  createInstructionMedicalRecord(data):Observable<any>{
    debugger
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionMedicalRecord`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }


  // Instruction Case Info
  getInstructionCaseInfo(id,instructionId):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionCaseInfo?ID=${id}&InstructionID=${instructionId}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,requestOptions);
  }

  createInstructionCaseInfo(data):Observable<any>{
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionCaseInfo`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  updateInstructionCaseInfo(data):Observable<any>{
    let requestUrl = this.baseUrl + `​/api​/Instruction​/UpdateInstructionCaseInfo`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  

  // Update Instruction Status
  updateInstructionStatus(data):Observable<any>{
    let requestUrl = this.baseUrl + `​/api/Instruction/UpdateInstructionStatus`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data,requestOptions);
  }

  //Get Current Instruction State

  getCurrentInstructionState(instructionCode,medicoRefNo,expertID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Instruction/GetCurrentInstructionState?instructionCode=${instructionCode}&medicoRefNo=${medicoRefNo}&expertID=${expertID}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl,requestOptions);
  }

  createAppointmentCancellation(appScheduleID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Instruction/CreateAppointmentCancellation?appScheduleID=${appScheduleID}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl,requestOptions);
  }

  createDNAS(appScheduleID):Observable<any>{
    let requestUrl = this.baseUrl+`/api/Instruction/CreateDNAS?appScheduleID=${appScheduleID}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(requestUrl,requestOptions);
  }
}
