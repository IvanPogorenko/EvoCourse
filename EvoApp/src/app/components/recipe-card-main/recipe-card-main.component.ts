import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from "../../interfaces/IRecipe";
import {RoutingService} from "../../routing.service";
import {RecipeStateService} from "../../services/recipe-state.service";
import {IFeedBackMsg} from "../../interfaces/IFeedBackMsg";

@Component({
  selector: 'app-recipe-card-main',
  templateUrl: './recipe-card-main.component.html',
  styleUrls: ['./recipe-card-main.component.scss']
})
export class RecipeCardMainComponent implements OnInit{

  @Input() recipe!: IRecipe

  constructor(
    private _routingService: RoutingService,
    private _recipeState: RecipeStateService
  ) {
  }

  public inFavorites !: Boolean
  public feedBack!: IFeedBackMsg

  ngOnInit() {
    this._recipeState.observeRecipes$.subscribe({
      next: value => {
        this.inFavorites = value.recipes.some(recipe => recipe.id === this.recipe.id)
      }
    })
  }

  public addToFavorites(event: MouseEvent){
    event.stopPropagation()
    if (!this.inFavorites){
      this._recipeState.updateFav(this.recipe)
      this.feedBack = {
        title: "Добавлено в избранное",
        body: 'Сохранили этот рецепт для вас',
        isSuccess: true
      }
    } else {
      this._recipeState.deleteFav(this.recipe)
      this.feedBack = {
        title: "Удалено из избранного",
        body: 'Удалили этот рецепт для вас',
        isSuccess: true
      }
    }
  }

  public goToRecipe(){
    this._routingService.toRecipe(this.recipe.id)
  }
}
