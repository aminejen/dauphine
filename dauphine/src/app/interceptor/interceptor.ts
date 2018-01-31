import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {AuthService} from '../service/auth.service'

import {Observable} from 'rxjs/Observable';

@Injectable()
export class Interceptor implements HttpInterceptor {

constructor(private auth:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = this.auth.authorizationToken;
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    return next.handle(authReq);
  }
}
