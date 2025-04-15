import { Component } from '@angular/core';
import {DataServerService} from "./data-server.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _dataServer: DataServerService
  ) {
  }

  public getPosts(){
    this._dataServer.getPosts().subscribe({
      next: (response) =>{
        console.log(response)
      }
    })
  }

  public getPost(){
    this._dataServer.getPost().subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  public getPostWithHeader(){
    this._dataServer.getPostWithHeader().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

  public getCommentsById(){
    const id: number = 1
    this._dataServer.getCommentsById(id).subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

  public postNewPost(){
    this._dataServer.postNewPost().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

  public deletePost(){
    this._dataServer.deletePost().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

}
