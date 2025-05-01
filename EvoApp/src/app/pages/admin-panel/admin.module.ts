import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from "./admin/admin.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {UserComponent} from "./user/user.component";
import {UsersListComponent} from "./users-list/users-list.component";


@NgModule({
  declarations: [
    AdminComponent,
    RecipeComponent,
    RecipesListComponent,
    UserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
