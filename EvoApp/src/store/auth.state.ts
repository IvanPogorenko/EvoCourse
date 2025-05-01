import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AuthenticationUpdate, IAuthentication} from "./model/auth.model";
import {Injectable} from "@angular/core";

@State<IAuthentication>({
  name: 'AuthState',
  defaults: {
    isAuth: false,
    token: null,
    expiresIn: null
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static getState(state: IAuthentication){
    return state
  }

  @Action(AuthenticationUpdate)
  public updateAuthentication(ctx: StateContext<IAuthentication>, action: AuthenticationUpdate){
    ctx.patchState({
      token: action.payload.token,
      expiresIn: action.payload.expiresIn,
      isAuth: action.payload.isAuth
    })
  }

}
