import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from "../../interfaces/IRecipe";
import {RoutingService} from "../../routing.service";
import {RecipeStateService} from "../../services/recipe-state.service";

@Component({
  selector: 'app-recipe-card-lite',
  templateUrl: './recipe-card-lite.component.html',
  styleUrls: ['./recipe-card-lite.component.scss']
})
export class RecipeCardLiteComponent implements OnInit {
  @Input() recipe !: IRecipe

  constructor(
    private _routingService: RoutingService,
    private _recipeState: RecipeStateService
  ) {
  }

  public inFavorites!: Boolean

  ngOnInit() {
    this._recipeState.observeRecipes$.subscribe({
      next: value => {
        this.inFavorites = value.recipes.some(recipe => recipe.id === this.recipe.id)
      }
    })
  }

  public addToFavs(event: MouseEvent){
    event.stopPropagation()
    if (!this.inFavorites){
      this._recipeState.updateFav(this.recipe)
    } else {
      this._recipeState.deleteFav(this.recipe)
    }
  }

  public goToRecipe(){
    this._routingService.toRecipe(this.recipe.id)
  }
}
