import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public user: any;

    constructor(public router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData') || "{}")) {
            this.user = JSON.parse(localStorage.getItem('userData') || "{}")
        }

        req = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + (localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '') || "{}")
        });

        return next.handle(req).catch(err => {
            // console.log(err);
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    localStorage.clear();
                    this.router.navigateByUrl('/login');
                }
            }
            // return Observable.throw(err);
            return throwError(Error);
        }) as any;
    }
}