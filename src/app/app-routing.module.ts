import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./user/register/register.component";

export const ROUTES: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  }
  // { path: '**', component: NotfoundComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
