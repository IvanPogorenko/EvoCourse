import {Component, Input} from '@angular/core';
import {IUser} from "../../../../store/model/auth.model";
import {appRotes} from "../../../routing.service";
import {Router} from "@angular/router";
import {UserStateService} from "../../../services/user-state.service";
import {AuthStateService} from "../../../services/auth-state.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() user!: IUser

  constructor(
    private _router: Router,
    private _userState: UserStateService,
    private _authState: AuthStateService
  ) {
  }

  public onExit(){
    this._userState.resetUserState()
    this._authState.resetAuthState()
    this._router.navigate(appRotes.index)
  }

  protected readonly appRotes = appRotes;
}
