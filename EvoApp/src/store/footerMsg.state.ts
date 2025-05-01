import {Action, Selector, State, StateContext} from "@ngxs/store";
import {IFooterMsgModel, MsgUpdate} from "./model/footerMsg.model";
import {Injectable} from "@angular/core";

@State<IFooterMsgModel>({
  name: "FooterMsgState",
  defaults: {
    isShowing: true
  }
})

@Injectable()
export class FooterMsgState{

  @Selector()
  static getState(state: IFooterMsgModel){
    return state
  }

  @Action(MsgUpdate)
  public updateState(ctx: StateContext<IFooterMsgModel>, action: MsgUpdate){
    ctx.patchState({
      isShowing: action.payload.isShowing
    })
  }

}
