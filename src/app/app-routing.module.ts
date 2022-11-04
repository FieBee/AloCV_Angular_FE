import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CompanyListComponent} from "./company/company-list/company-list.component";
import {CompanyCreateComponent} from "./company/company-create/company-create.component";
import {RegisterComponent} from "./register/register.component";

export const ROUTES: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
  path: 'company/list', component: CompanyListComponent
  },
  {
  path: 'company/create', component: CompanyCreateComponent

  }
  // { path: '**', component: NotfoundComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
