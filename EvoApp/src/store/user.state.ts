import {Action, Selector, State, StateContext} from "@ngxs/store";
import {IUser, UserUpdate} from "./model/auth.model";
import {Injectable} from "@angular/core";

@State<IUser>({
  name: 'UserState',
  defaults: {
    username: null,
    lastName: null,
    firstName: null,
    middleName: null,
    role: null,
    avatar: null
  }
})
@Injectable()
export class UserState {
  @Selector()
  static getState(state: IUser){
    return state
  }

  @Selector()
  static getRole(state: IUser){
    return state.role
  }

  @Action(UserUpdate)
  public updateUser(ctx: StateContext<IUser>, action: UserUpdate){
    ctx.patchState({
      username: action.payload.username,
      firstName: action.payload.firstName,
      middleName: action.payload.middleName,
      lastName: action.payload.lastName,
      role: action.payload.role,
      avatar: action.payload.avatar
    })
  }
}
