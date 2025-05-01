import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

export enum AppRoutes {
  MAIN = '',
  RECIPES = 'recipes',
  ERROR_ACCESS = 'error-access',
  AUTHORIZATION ='authorization',
  REGISTRATION = 'registration',
  CREATE_RECIPE = 'create-recipe',
  ADMIN = 'admin'
}

export enum AdminRoutes {
  USERS = 'users',
  USER = ':id',
  RECIPES = 'recipes',
  RECIPE = ':id'
}

export enum RecipesRoutes {
  RECIPE = ':id'
}

export const toApp = ['/']
export const toAdmin = [...toApp, AppRoutes.ADMIN]
export const toRecipes = [...toApp, AppRoutes.RECIPES]

export const appRotes = {
  index: toApp,
  authorization: [...toApp, AppRoutes.AUTHORIZATION],
  registration: [...toApp, AppRoutes.REGISTRATION],
  create_recipe: [...toApp, AppRoutes.CREATE_RECIPE],
  error_access: [...toApp, AppRoutes.ERROR_ACCESS],
  recipes: {
    index: toRecipes,
    recipe: [...toRecipes, RecipesRoutes.RECIPE]
  },
  admin: {
    users: [...toAdmin, AdminRoutes.USERS],
    user: [...toAdmin, AdminRoutes.USERS, AdminRoutes.USER],
    recipes: [...toAdmin, AdminRoutes.RECIPES],
    recipe: [...toAdmin, AdminRoutes.RECIPES, AdminRoutes.RECIPE],
  }
}

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private _router: Router
  ) { }

  public toRecipe(id: string){
    const route = [...appRotes.recipes.index, id]
    return this._router.navigate(route)
  }
}
