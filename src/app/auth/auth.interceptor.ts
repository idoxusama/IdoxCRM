import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from 'rxjs/internal/operators'
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (req.headers.get('No-Auth') == "True")
    //     return next.handle(req.clone());
    debugger
    if (req.headers.get('Authorization') == null) {
      //Code to add Authorization header
      //return next.handle(requestWithAuthHeader)
    } else {
      return next.handle(req);
    }
    if (localStorage.getItem('access_token') != null) {
      const clonedreq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('access_token'))
      });
      return next.handle(clonedreq).pipe(tap(
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
            console.log('req url :: ' + req.url);
            if (err.status === 401) {
              this.router.navigateByUrl('/login');
            }
          }
        }
      ));
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
}