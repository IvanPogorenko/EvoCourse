import { Injectable } from '@angular/core';
import {IUser} from "./interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }

  private users: IUser[] = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
  ]

  public getUsers(): IUser[]{
    return this.users
  }
}
