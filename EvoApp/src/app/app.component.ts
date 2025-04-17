import {Component, OnInit} from '@angular/core';
import {DataServerService} from "./data-server.service";
import {ITodo} from "./interfaces/ITodo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private _dataServer: DataServerService
  ) {
  }

  public user: ITodo | null = null

  ngOnInit() {
    this._dataServer.getUser().subscribe({
      next: (response) => {
        this.user = response
        console.log(response)
      }
    })
  }

}
