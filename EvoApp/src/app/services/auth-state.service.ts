import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {AuthState} from "../../store/auth.state";
import {AuthenticationUpdate, IAuthentication} from "../../store/model/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(
    private _store: Store
  ) { }

  public observeAuth$ = this._store.select(AuthState.getState)

  public getAuth(){
    return this._store.selectSnapshot(AuthState.getState)
  }

  public dispatchAuthInfo(auth: IAuthentication){
    this._store.dispatch(new AuthenticationUpdate(auth))
  }

  public resetAuthState(){
    localStorage.removeItem('AuthState')
    this._store.reset(AuthState)
  }

}
