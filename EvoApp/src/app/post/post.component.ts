import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {IPost} from "../interfaces/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{

  constructor(
    private _data: DataService,
    private _route: ActivatedRoute
  ) {
  }

  public postId!: number
  public targetPost: IPost | null = null
  public counterSubs$!: Subscription;

  ngOnInit() {
    this.counterSubs$ = this._route.paramMap.subscribe(params => {
      this.postId = Number(params.get('id'))
      this._data.getPostDetails(this.postId).subscribe({
        next: value => {
          this.targetPost = value
        }
      })
    })
  }

  ngOnDestroy() {
    this.counterSubs$.unsubscribe()
  }

}
