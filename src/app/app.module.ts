import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemListComponent } from './checkout/item-list/item-list.component';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

import { MenuDataService } from "./menu/menu-data.service"



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    CheckoutComponent,
    ItemListComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [MenuDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
