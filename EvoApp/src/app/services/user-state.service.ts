import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {UserState} from "../../store/user.state";
import {IUser, UserUpdate} from "../../store/model/auth.model";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor(
    private _store: Store
  ) { }

  public observeUser$ = this._store.select(UserState.getState)

  public getUser(){
    return this._store.selectSnapshot(UserState.getState)
  }

  public getUserRole(){
    return this._store.selectSnapshot(UserState.getRole)
  }

  public dispatchUser(user: IUser){
    this._store.dispatch(new UserUpdate(user))
  }

  public resetUserState(){
    localStorage.removeItem('UserState')
    this._store.reset(UserState)
  }

}
