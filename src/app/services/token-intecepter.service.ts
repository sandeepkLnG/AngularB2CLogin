import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenIntecepterService implements HttpInterceptor {
  constructor() {

  }

  intercept(req: any, next: any): any {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authrization: `Bearer ${localStorage.getItem('token')} `,
      },
    });

    return next.handle(tokenizedReq);
  }
}
