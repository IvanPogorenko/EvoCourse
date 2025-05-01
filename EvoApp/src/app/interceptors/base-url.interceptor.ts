import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {}

  private baseUrl = 'https://evo-academy.wckz.dev/api/cooking-blog'

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const targetRequest = `${this.baseUrl}${request.url}`
    request = request.clone({url: targetRequest})
    return next.handle(request);
  }
}
