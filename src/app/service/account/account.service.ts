import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {Company} from "../../model/company";
import {Account} from "../../model/account";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Account[]>{
    return this.httpClient.get<Account[]>(API_URL + `/account`)
  }

  saveAccount(account: Account):Observable<Account>{
    return this.httpClient.post<Account>(API_URL + `/account` , account);
  }

  findById(id: number | undefined):Observable<Account>{
    return this.httpClient.get<Account>(API_URL + `/account/${id}`);
  }

  editAccount(id: number | undefined |any, account: Account): Observable<Account>{
    return this.httpClient.put<Account>(API_URL + `/account/${id}`,account);
  }

  delete(id: any): Observable<Account>{
    return this.httpClient.delete<Account>(API_URL + `/account/block/${id}`);
  }

  unblock(id: any): Observable<Account>{
    return this.httpClient.delete<Account>(API_URL + `/account/unblock/${id}`);
  }

  getAllAccountUser():Observable<Account[]>{
    return this.httpClient.get<Account[]>(API_URL + `/account/getUser`)
  }

  getAllAccountCompany():Observable<Account[]>{
    return this.httpClient.get<Account[]>(API_URL + `/account/getCompany`)
  }
}
