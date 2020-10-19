import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemListComponent } from './checkout/item-list/item-list.component';
import { ItemComponent } from './checkout/item-list/item/item.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'checkout', component: CheckoutComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'menu', component: MenuComponent },
//   { path: 'login', component: LoginComponent }



// ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    CheckoutComponent,
    ItemListComponent,
    ItemComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
