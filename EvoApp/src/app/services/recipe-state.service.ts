import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {RecipeState} from "../../store/recipe.state";
import {DeleteFav, RecipeUpdateFav} from "../../store/model/recipe.model";
import {IRecipe} from "../interfaces/IRecipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeStateService {

  constructor(
    private _store: Store
  ) { }

  public observeRecipes$ = this._store.select(RecipeState.getState)

  public getState(){
    return this._store.selectSnapshot(RecipeState.getState)
  }

  public updateFav(recipe: IRecipe){
    this._store.dispatch(new RecipeUpdateFav(recipe))
  }

  public deleteFav(recipe: IRecipe){
    this._store.dispatch(new DeleteFav(recipe))
  }
}
