import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {FooterMsgState} from "../../store/footerMsg.state";
import {AuthState} from "../../store/auth.state";
import {MsgUpdate} from "../../store/model/footerMsg.model";

@Injectable({
  providedIn: 'root'
})
export class FooterMsgStateService {

  constructor(
    private _store: Store
  ) { }

  public observeMsg$ = this._store.select(FooterMsgState.getState)

  public getState(){
    return this._store.selectSnapshot(FooterMsgState.getState)
  }

  public updateState(){
    return this._store.dispatch(new MsgUpdate({isShowing: false}))
  }
}
