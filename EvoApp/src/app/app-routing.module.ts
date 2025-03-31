import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InlineComponent} from "./inline/inline.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'open-graph',
    component: InlineComponent,
    title: 'Open Graph Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
