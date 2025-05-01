import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {AppRoutes, RecipesRoutes} from "./routing.service";
import {MainComponent} from "./pages/main/main.component";
import {RecipeCatalogComponent} from "./pages/recipe-catalog/recipe-catalog.component";
import {ErrorAccessComponent} from "./pages/error-access/error-access.component";
import {AuthorizationComponent} from "./pages/authorization/authorization.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {CreateRecipeComponent} from "./pages/create-recipe/create-recipe.component";
import {AdminGuard} from "./guards/admin.guard";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {RecipeCardComponent} from "./pages/recipe-card/recipe-card.component";

const routes: Routes = [
  {
    path: AppRoutes.MAIN,
    component: MainComponent
  },
  {
    path: AppRoutes.RECIPES,
    children: [
      {
        path: '',
        component: RecipeCatalogComponent,
      },
      {
        path: RecipesRoutes.RECIPE,
        component: RecipeCardComponent
      }
    ]
  },
  {
    path: AppRoutes.ERROR_ACCESS,
    component: ErrorAccessComponent
  },
  {
    path: AppRoutes.AUTHORIZATION,
    component: AuthorizationComponent
  },
  {
    path: AppRoutes.REGISTRATION,
    component: RegistrationComponent
  },
  {
    path: AppRoutes.CREATE_RECIPE,
    component: CreateRecipeComponent
  },
  {
    path: AppRoutes.ADMIN,
    loadChildren: () => import('./pages/admin-panel/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
