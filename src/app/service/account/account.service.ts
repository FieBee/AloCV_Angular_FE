import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {Observable} from "rxjs";
import {Account} from "../../model/account";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public createUser(account:Account):Observable<any>{
    return this.http.post(API_URL +"/account", account,{responseType: 'text' as 'json'})
  }
}
