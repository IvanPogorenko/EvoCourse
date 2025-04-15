import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ) {
  }

  public postData: object | null = null

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.postData = data
    })
  }

}
