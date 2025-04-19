import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {IPost} from "../interfaces/IPost";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

  constructor(
    private _data: DataService
  ) {
  }

  public posts : IPost[] | null = null

  ngOnInit() {
    this._data.getPosts().subscribe({
      next: value => {
        this.posts = value
      }
    })
  }

}
