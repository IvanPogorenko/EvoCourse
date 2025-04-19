import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./error/error.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostComponent} from "./post/post.component";
import {UserRoleGuard} from "./user-role.guard";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'posts',
    component: PostListComponent,
    canActivateChild: [UserRoleGuard],
    children: [
      {
        path: ':id',
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
