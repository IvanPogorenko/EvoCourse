import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ITodo, toITodo} from "./interfaces/ITodo";

@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getUser(): Observable<ITodo>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos").pipe(
      map((data: any) => toITodo(data))
    )
  }
}
