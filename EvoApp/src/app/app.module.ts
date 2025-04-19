import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {DataService} from "./data.service";
import {UserRoleGuard} from "./user-role.guard";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, UserRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
