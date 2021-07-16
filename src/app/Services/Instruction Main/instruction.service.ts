import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient,
    private route:ActivatedRoute) { }

  /* #region  Instruction Services */

  getInstructionPersonalInfo(id): Observable<any> {
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

  createInstructionPersonalInfo(data): Observable<any> {
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

  updateInstructionPersonalInfo(data): Observable<any> {
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

  getInstructionSpecial(id, instructionId): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionSpecial?ID=${id}&InstructionID=${instructionId}`;
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

  createInstructionSpecial(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionSpecial`;
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

  updateInstructionSpecial(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateInstructionSpecial`;
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

  getInstructionCaseHandler(id, instructionId): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionCaseHandler?ID=${id}&InstructionID=${instructionId}`;
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

  createInstructionCaseHandler(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionCaseHandler`;
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

  updateInstructionCaseHandler(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateInstructionCaseHandler`;
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

  getInstructionTranslator(id, instructionId): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionTranslator?ID=${id}&InstructionID=${instructionId}`;
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

  createInstructionTranslator(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionTranslator`;
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

  updateInstructionTranslator(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateInstructionTranslator`;
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

  getInstructionMedicalRecord(id, instructionId): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionMedicalRecord?ID=${id}&InstructionID=${instructionId}`;
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

  createInstructionMedicalRecord(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionMedicalRecord`;
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

  getInstructionCaseInfo(id, instructionId): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetInstructionCaseInfo?ID=${id}&InstructionID=${instructionId}`;
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

  createInstructionCaseInfo(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstructionCaseInfo`;
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

  updateInstructionCaseInfo(data): Observable<any> {
    let requestUrl = this.baseUrl + '/api/Instruction/UpdateInstructionCaseInfo';
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

  deleteOrInactiveInstruction(data): Observable<any> {
    let requestUrl = this.baseUrl + '/api/Instruction/DeleteOrInactiveInstruction';
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

  updateInstructionStatus(data): Observable<any> {
    let requestUrl = this.baseUrl+'api/Instruction/UpdateInstructionStatus';
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

  getInstructionsSummary(data):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Instruction/GetInstructionSummary`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(requestUrl,data, requestOptions);
  }
  /* #endregion */

  /* #region  Instruction State */

  getCurrentInstructionState(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetCurrentInstructionState`;
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
  /* #endregion */

  /* #region Update clinic state  */

  updateClinicState(appSchedualID, state): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateClinicState?appScheduleID=${appSchedualID}&stateName=${state}`;

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
  /* #endregion */

  /* #region Instruction Services that are use in today clinics*/
  getOutstandingAppointments(id):Observable<any>{
    let requestUrl=this.baseUrl+`/api/Instruction/GetOutStandingAppointment?instructionID=${id}`;
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
  
  getAllTodayAppointments(expertID): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetAllTodayAppointment?expertID=${expertID}`;

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

  getInstAssignMedSec(id, expertClinicSlotPlanID, medSecID): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetAllTodayAppointment?ID=${id}&expertClinicSlotPlanID=${expertClinicSlotPlanID}&medSecID=${medSecID}`;

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

  createInstAssignMedSec(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/CreateInstAssignMedSec`;

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
  updateInstAssignMedSec(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateInstAssignMedSec`;

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
  getAllInstAssignMedSec(userTypeID,userID): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetAllInstAssignMedSec?userTypeID=${userTypeID}&userID=${userID}`;

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

  getAllInstUnAssignMedSec(): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetAllInstUnAssignMedSec`;

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


  /* #endregion */

  /* #region  Appointment Attended */
  getAppointmentAttended(id, expertClinicSlotPlanID): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetAppointmentAttended?ID=${id}&expertClinicSlotPlanID=${expertClinicSlotPlanID}`;

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
  createAppointmentAttended(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/CreateAppointmentAttended`;

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
  updateAppointmentAttended(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/UpdateAppointmentAttended`;

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
  /* #endregion */
  
  /* #region  Get Appointments Scheduled */

  getAppointmentsScheduled(data): Observable<any> {
    let requestUrl = this.baseUrl + `/api/Instruction/GetAppointmentSchedule`;

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

  /* #endregion */
}
