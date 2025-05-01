export interface IFooterMsgModel{
  isShowing: boolean
}

export class MsgUpdate{
  static readonly type = '[Footer Msg]: Updated'
  constructor(public payload: IFooterMsgModel) {}
}
