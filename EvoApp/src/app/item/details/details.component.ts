import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  constructor(
    private _activeRouter: ActivatedRoute
  ) {
  }

  ngOnInit() {
    console.log(this._activeRouter.snapshot.parent?.params)
  }

}
