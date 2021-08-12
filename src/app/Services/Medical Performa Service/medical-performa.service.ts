import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalPerformaService {
  baseUrl: any = environment.apiUrl;
  expert = new BehaviorSubject<string>(null);
  expertType = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }


  toFormBuilder(sectionsGroup: any[]) {
    let control: any = {};
    sectionsGroup.forEach(sections => {
      sections.forEach(qs => {
        qs.questionList.forEach(element => {
          if (element.options) {
            if (element.options.length > 0) {
              element.options.forEach(el => {
                switch (el.optionType) {
                  case 'DropDown':
                    control[element.questionName+element.id] = element.isRequired===true ? new FormControl(element.selectedOption||'', Validators.required) : new FormControl(element.selectedOption || '');
                    break;
                  case 'radio':
                    let rValue = element.selectedOption == el.id ? element.selectedOption : '';
                    control[element.questionName] = new FormControl(rValue);
                    break;
                  case 'CheckBox':
                    let cValue = el.answer == el.id ? el.answer : '';
                    control[element.questionName] = new FormControl(cValue);
                    break;
                  case 'TextBox':
                    let tValue = el.answer == el.id ? el.answer : '';
                    control[element.questionName] = new FormControl(tValue);
                    break;
                  case 'Textarea':
                    let taValue = el.answer == el.id ? el.answer : '';
                    control[element.questionName] = new FormControl(taValue);
                    break;
                  default:
                    break;
                }
              });
            }
            else {
              control[element.questionName+element.id] = element.isRequired===true ? new FormControl(element.answer || '', Validators.required)
                : new FormControl(element.answer || '');
            }
          }
          else {
            control[element.questionName+element.id] = element.isRequired===true ? new FormControl(element.answer || '', Validators.required)
              : new FormControl(element.answer || '');
          }
        });
      });
    });
    return new FormGroup(control);
  }

  customValidatorForNotValueMatch(g: FormGroup) {
    debugger
    let val1= +g.get('The claimant developed'+'1').value;
    let val2=+g.get('The claimant developed52').value;
    return val1==val2
      ?  { match: true } :null;
  }

  getQuestionariesForClient(expertTypeID: any,expertID:any): Observable<any> {
    let requestUrl = this.baseUrl + `/api/MedicalSecretary/GetAllPerformaQuestionaireClient?ExpertTypeID=${expertTypeID}&ExpertID=${expertID}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<any>(requestUrl, requestOptions);
  }

  getQuestionariesForExpert(id: any): Observable<any> {
    let requestUrl = this.baseUrl + "/api/MedicalSecretary/GetAllPerformaExpertQuestionnaire?ExpertTypeID=" + id;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<any>(requestUrl, requestOptions);
  }

  saveAnswerForClient(Data: any): Observable<any> {
    let requestUrl = this.baseUrl + "/api/MedicalSecretary/SaveAnswersForClient";
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.post<any>(requestUrl, Data, requestOptions);
  }
  saveAnswerForExpert(Data: any): Observable<any> {
    let requestUrl = this.baseUrl + "/api/MedicalSecretary/SaveAnswersForExpert";
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.post<any>(requestUrl, Data, requestOptions);
  }
  saveDraftAnswersForClient(Data: any): Observable<any> {
    let requestUrl = this.baseUrl + "/api/MedicalSecretary/DraftAnswersForClient";
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.post<any>(requestUrl, Data, requestOptions);
  }

  saveDraftAnswersForExpert(Data: any): Observable<any> {
    let requestUrl = this.baseUrl + "/api/MedicalSecretary/DraftAnswersForExpert";
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.post<any>(requestUrl, Data, requestOptions);
  }
  getAllAnswersForClient(code: string) {
    let requestUrl = this.baseUrl + `/api/MedicalSecretary/GetAllAnswersForClient?PerformaQuestionnaireCode=${code}&State=Draft`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<any>(requestUrl, requestOptions);
  }

  getAllAnswersForExpert(code: string) {
    let requestUrl = this.baseUrl + `/api/MedicalSecretary/GetAllAnswersForExpert?PerformaQuestionnaireCode=${code}&State=Draft`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<any>(requestUrl, requestOptions);
  }

  getPerformasByFilter(name, userId, state): Observable<any> {
    let requestUrl = this.baseUrl + `/api/MedicalSecretary/GetAllPerformaByFilter?name=${name}&nameID=${userId}&state=${state}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<any>(requestUrl, requestOptions);
  }

  getPerformasSummary(filterName, filterID, state): Observable<any> {
    let requestUrl = this.baseUrl + `/api/MedicalSecretary/GetPerformasSummary?filterName=${filterName}&filterID=${filterID}&stateName=${state}`;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<any>(requestUrl, requestOptions);
  }

  createPerformaQuestionniareForClient(data):Observable<any>{
    let requestUrl = this.baseUrl+'/api/MedicalSecretary/CreatePerformaQuestionniareForClient';
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.post<any>(requestUrl,data, requestOptions);
  }

}
