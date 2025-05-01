import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "../../interfaces/ILogin";
import {map, Observable} from "rxjs";
import {IAuthentication, IUser} from "../../../store/model/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public loginUser(user: ILogin): Observable<{ user: IUser, auth: IAuthentication }>{
    return this._httpClient.post<any>('/users/sign', user).pipe(
      map(response => {
        const user: IUser = {
          firstName: response.firstName,
          lastName: response.lastName,
          middleName: response.middleName,
          username: response.username,
          avatar: response.avatar,
          role: response.role,
        };

        const auth: IAuthentication = {
          token: response.jwtToken,
          expiresIn: response.expiresIn,
          isAuth: true,
        };

        return { user, auth };
      })
    )
  }
}
