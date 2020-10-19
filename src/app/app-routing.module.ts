import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'login', component: LoginComponent }



];

@NgModule({
    imports: [

        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
