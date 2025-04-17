import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataServerService} from "./data-server.service";
import {TargetUserInterceptor} from "./target-user.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServerService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TargetUserInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
