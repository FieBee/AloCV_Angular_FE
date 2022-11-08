import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CompanyListComponent} from "./company/company-list/company-list.component";
import {CompanyCreateComponent} from "./company/company-create/company-create.component";
import {RegisterComponent} from "./register/register.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {JobListComponent} from "./job/job-list/job-list.component";
import {UserJobListComponent} from "./user/user-job-list/user-job-list.component";
import {JobCreateComponent} from "./job/job-create/job-create.component";
import {JobEditComponent} from "./job/job-edit/job-edit.component";
import {FindJobUserComponent} from "./user/find-job-user/find-job-user.component";

export const ROUTES: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register',
  //   loadChildren: () => import('./register/register.module').then(module => module.RegisterModule),
    component: RegisterComponent
  },
  {
    path: 'register/user',
    component: UserRegisterComponent
  },
  {
    path: 'register/company',
    component: CompanyCreateComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
  path: 'company/list', component: CompanyListComponent
  },
  {
  path: 'user/job-list', component: UserJobListComponent
  },
  {
  path: 'job/job-list', component: JobListComponent
  },
  {
  path: 'job/job-create', component: JobCreateComponent
  },
  {
  path: 'job/job-edit', component: JobEditComponent
  },
  {
    path: 'user/find-job-user', component: FindJobUserComponent
  },
  // {
  // path: 'company/create', component: CompanyCreateComponent
  //
  // }
  { path: '**', component: HomeComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
