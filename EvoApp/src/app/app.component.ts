import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _data: DataService
  ) {
  }

  public getRole(){
    return this._data.userRole
  }

  public switchRole(){
    if (this._data.userRole === 'user'){
      this._data.userRole = 'admin'
    } else{
      this._data.userRole = 'user'
    }
  }

}
