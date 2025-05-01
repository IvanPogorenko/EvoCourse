import { Component } from '@angular/core';
import {IRegister} from "../../interfaces/IRegister";
import {RegisterService} from "./register.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(
    private _registerService: RegisterService
  ) {
  }

  public registerUser: IRegister = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: ''
  }

  public onSubmit(){
    this._registerService.registerUser(this.registerUser).subscribe({
      next: () => {
        console.log()
      },
      error: err => {
        console.error(err)
      }
    })
  }

}
