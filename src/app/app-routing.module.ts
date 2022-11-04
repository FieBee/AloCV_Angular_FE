import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {RegisterComponent} from "./security/register/register.component";
import {HomeComponent} from "./home/home.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {JobListComponent} from "./user/job-list/job-list.component";

export const ROUTES: Routes = [
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: 'register', component: RegisterComponent
  // },
  {
    path: '', component: JobListComponent
  }
  // { path: '**', component: NotfoundComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }