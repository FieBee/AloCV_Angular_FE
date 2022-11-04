import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate
} from '@angular/router';

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean
      | UrlTree>
    | Promise<boolean
    | UrlTree>
    | boolean
    | UrlTree {

    let url: string = state.url;

    if(this.checkLogin()){
      if(route.data['roles'].indexOf(this.getRole()) === -1){
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: state.url }});
        return false;
      }
      return true;
    }
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  checkLogin(){
    if (localStorage.getItem("data")){
      return true;
    }
    return false;
  }
  getRole(){
    return localStorage.getItem("role");
  }
}
