import {IRecipe} from "../../app/interfaces/IRecipe";

export interface RecipesModel {
  recipes: IRecipe[]
}

export class RecipeUpdateFav{
  static readonly type = '[Recipes]: Updated'
  constructor(public payload: IRecipe) {}
}

export class DeleteFav{
  static readonly type = '[Recipes]: Deleted'
  constructor(public payload: IRecipe) {}
}
