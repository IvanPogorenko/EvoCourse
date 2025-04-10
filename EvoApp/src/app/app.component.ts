import {Component, OnInit} from '@angular/core';
import {ResponseService} from "./response.service";
import {IUser} from "./interfaces/IUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private _userService: ResponseService
  ) {
  }

  public users: IUser[] = [];

  ngOnInit() {
    this.users = this._userService.getUsers()
  }

}
