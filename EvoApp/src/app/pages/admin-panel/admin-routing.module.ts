import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {UserComponent} from "./user/user.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {AdminRoutes} from "../../routing.service";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: AdminRoutes.USERS,
      },
      {
        path: AdminRoutes.USERS,
        component: UsersListComponent,
      },
      {
        path: AdminRoutes.RECIPES,
        component: RecipesListComponent,
      },
    ],
  },
  {
    path: `${AdminRoutes.USERS}/${AdminRoutes.USER}`,
    component: UserComponent,
  },
  {
    path: `${AdminRoutes.RECIPES}/${AdminRoutes.RECIPE}`,
    component: RecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
