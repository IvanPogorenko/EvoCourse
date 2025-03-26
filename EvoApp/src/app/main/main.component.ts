import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private _router: Router
  ) {
  }

  public linkToAbout(){
    this._router.navigateByUrl("/about")
  }

  public linkToItem(){
    this._router.navigateByUrl("/item/1")
  }

  public linkToContact(){
    this._router.navigateByUrl("/contact")
  }

}
