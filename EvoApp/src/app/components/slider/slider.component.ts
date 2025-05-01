import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {IRecipe} from "../../interfaces/IRecipe";
import {RoutingService} from "../../routing.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent{

  @Input() recipes !: IRecipe[]

  constructor(
    private _routingService: RoutingService
  ) {
  }

  public openRecipe(recipe: IRecipe){
    this._routingService.toRecipe(recipe.id)
  }
}
