import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './pages/main/main.component';
import {AuthorizationComponent} from './pages/authorization/authorization.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {CreateRecipeComponent} from './pages/create-recipe/create-recipe.component';
import {RecipeCatalogComponent} from './pages/recipe-catalog/recipe-catalog.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ErrorAccessComponent} from './pages/error-access/error-access.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./pages/authorization/auth.service";
import {RegisterService} from "./pages/registration/register.service";
import {BaseUrlInterceptor} from "./interceptors/base-url.interceptor";
import {FooterComponent} from './components/footer/footer.component';
import {AuthState} from "../store/auth.state";
import {UserState} from "../store/user.state";
import {NgxsStoragePluginModule, StorageOption} from "@ngxs/storage-plugin";
import { UserInfoComponent } from './components/header/user-info/user-info.component';
import {AdminGuard} from "./guards/admin.guard";
import {UserStateService} from "./services/user-state.service";
import {AuthStateService} from "./services/auth-state.service";
import { SliderComponent } from './components/slider/slider.component';
import {RecipeCardMainComponent} from "./components/recipe-card-main/recipe-card-main.component";
import { SeparatedElementsPipe } from './pipes/separated-elements.pipe';
import { RecipeCardLiteComponent } from './components/recipe-card-lite/recipe-card-lite.component';
import { InternetShopMsgComponent } from './components/internet-shop-msg/internet-shop-msg.component';
import {FooterMsgState} from "../store/footerMsg.state";
import {RecipeCardComponent} from "./pages/recipe-card/recipe-card.component";
import {RecipeState} from "../store/recipe.state";
import {registerLocaleData} from "@angular/common";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { ToastComponent } from './components/toast/toast.component';

registerLocaleData('ru-Ru')

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        AuthorizationComponent,
        RegistrationComponent,
        CreateRecipeComponent,
        RecipeCatalogComponent,
        RecipeCardMainComponent,
        NotFoundComponent,
        ErrorAccessComponent,
        FooterComponent,
        UserInfoComponent,
        SliderComponent,
        SeparatedElementsPipe,
        RecipeCardLiteComponent,
        InternetShopMsgComponent,
        RecipeCardComponent,
        ModalWindowComponent,
        ToastComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([AuthState, UserState, FooterMsgState, RecipeState]),
    NgxsStoragePluginModule.forRoot({
      key: ['AuthState', 'UserState', 'FooterMsgState', 'RecipeState'],
      storage: StorageOption.LocalStorage
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    AuthService,
    RegisterService,
    UserStateService,
    AuthStateService,
    {provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AdminGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
