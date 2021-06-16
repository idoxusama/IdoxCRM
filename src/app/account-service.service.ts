import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { map ,catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  baseUrl:string=environment.apiUrl;
  constructor(private _http:HttpClient,private router:Router) { }

   /* Login Method */
   login(Username:string,Password:string):Observable<any>{
    debugger
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    let FullUrl = this.baseUrl+"/api/User/Authenticate";
    return this._http.post(FullUrl,"UserName="+Username+"&Password="+Password,requestOptions);

  //  .pipe(
  //   catchError(error=> this.HttpErrHandler(error)
  //   )
  // );
    // const httpOptions = {
    //   headers : new HttpHeaders({"Content-Type":"application/x-www-form-urlencoded"})
    // };
    // httpOptions.headers.append('No-Auth','True');

    // Default credentials for admin
    // UserName = "Admin"
    // Password = Password_123"

    //const httpheaders = new HttpHeaders({"Content-Type":"application/x-www-form-urlencoded"});
    

   // return this._http.post("http://tbdt-api.asd.org.pk/token",data,{headers:httpheaders}).pipe(map((resp:any)=>resp));
    
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

//   HttpErrHandler(res){
//     debugger
//     let errMsg;
//     if(res.status === 404){
//       // do NotFound stuff here
//       errMsg='NotFound Http Error ';}
//     else if(res.status === 401){
//       // do Unauthorized stuff here
//       errMsg='Unauthorized user .. please login to continue ';}
//     else{ errMsg= res.status+' unknown Http Error';}
//   return observableThrowError(errMsg);
// }



    /* Logout Method */
  
    Logout() {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    }
}
