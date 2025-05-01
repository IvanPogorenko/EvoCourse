import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRegister} from "../../interfaces/IRegister";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public registerUser(user: IRegister): Observable<void>{
    return this._httpClient.post<void>('/users/registration', user)
  }

}
