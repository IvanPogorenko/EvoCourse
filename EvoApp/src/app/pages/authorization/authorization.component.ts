import {Component} from '@angular/core';
import {appRotes} from "../../routing.service";
import {ILogin} from "../../interfaces/ILogin";
import {AuthService} from "./auth.service";
import {UserStateService} from "../../services/user-state.service";
import {AuthStateService} from "../../services/auth-state.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {

  constructor(
    private _authService: AuthService,
    private _userState: UserStateService,
    private _authState: AuthStateService
  ) {
  }

  public userLogin: ILogin = {
    username: "",
    password: ""
  }

  public onSubmit(){
    this._authService.loginUser(this.userLogin).subscribe({
      next: value => {
        this._authState.dispatchAuthInfo(value.auth)
        this._userState.dispatchUser(value.user)
      },
      error: err => {

      }
    })
  }

  public onSubmitGit(){

  }

  protected readonly appRotes = appRotes;
}
