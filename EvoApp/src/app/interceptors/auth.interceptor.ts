import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthStateService} from "../services/auth-state.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private _authStateService: AuthStateService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.has("requiresAuth")){
      const token = this._authStateService.getAuth().token
      if (token){
        const headers = request.headers.delete("requiresAuth")
        const authRequest = request.clone({
          headers: headers.set("Authorization", `Bearer ${token}`),
        })
        return next.handle(authRequest)
      }
    }
    return next.handle(request);
  }
}
