import {Component, OnInit} from '@angular/core';
import {appRotes} from "../../routing.service";
import {UserStateService} from "../../services/user-state.service";
import {AuthStateService} from "../../services/auth-state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(
    private _userState: UserStateService,
    private _authState: AuthStateService
  ) {
  }

  public authInfo = this._authState.getAuth()
  public userInfo = this._userState.getUser()

  ngOnInit() {
    this._userState.observeUser$.subscribe({
      next: value => {
        this.userInfo = value
      }
    })
    this._authState.observeAuth$.subscribe({
      next: value => {
        this.authInfo = value
      }
    })
  }

  protected readonly appRotes = appRotes;
}
