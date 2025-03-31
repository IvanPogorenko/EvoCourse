import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.scss']
})
export class InlineComponent {

  constructor(
    private _meta: Meta
  ) {
    this._meta.removeTag("property='og:desc'")
    this._meta.addTags([
      {property: "og:title", content: "The Rock"},
      {property: "og:type", content: "video.movie"},
      {property: "og:url", content: "//www.imdb.com/title/tt0117500/"}
    ])
  }

}
