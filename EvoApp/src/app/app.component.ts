import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._meta.addTag({property: "og:desc", content: "root_desc"})
    this._title.setTitle("Desk Page")
  }

}
