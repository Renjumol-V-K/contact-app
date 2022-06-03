import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {HttpErrorResponse,HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { OauthService } from './app/oauth.service';
import { TokenService } from './app/token.service';
import { ContactService } from './contact.service';

@Injectable()
export class ContactInterInterceptor implements HttpInterceptor {
 
  constructor(private router: Router,
    private tokenService: TokenService,
    private authService: OauthService,
    private contactService:ContactService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): any {

      const token = this.tokenService.getToken();
      const refreshToken = this.tokenService.getRefreshToken();
  
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token
          }
        });
      }
  
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          setHeaders: {
            'content-type': 'application/json'
          }
        });
      }
  
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json')
      });
  
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error.error.error);
          if (error.status === 401) {
            if (error.error.error === 'invalid_token') {
              this.authService.refreshToken({refresh_token: refreshToken})
                .subscribe(() => {
                  location.reload();
                });
            } else {
              this.router.navigate(['login']).then(_ => console.log('redirect to login'));
            }
          }
          return throwError(error);
        }));
      }
}
