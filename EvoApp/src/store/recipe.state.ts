import {Action, Selector, State, StateContext} from "@ngxs/store";
import {DeleteFav, RecipesModel, RecipeUpdateFav} from "./model/recipe.model";
import {Injectable} from "@angular/core";

@State<RecipesModel>({
  name: "RecipeState",
  defaults: {
    recipes: []
  }
})

@Injectable()
export class RecipeState{

  @Selector()
  static getState(state: RecipesModel){
    return state
  }

  @Action(RecipeUpdateFav)
  public updateFav(ctx: StateContext<RecipesModel>, action: RecipeUpdateFav){
    const state = ctx.getState()
    state.recipes.push(action.payload)
    ctx.patchState(state)
  }

  @Action(DeleteFav)
  public deleteFav(ctx: StateContext<RecipesModel>, action: DeleteFav){
    const state = ctx.getState()
    const newFavs = state.recipes.filter(recipe => recipe.id !== action.payload.id)
    ctx.patchState({recipes: newFavs})
  }

}
