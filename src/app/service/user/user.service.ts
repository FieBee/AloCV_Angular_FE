import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../model/user";
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(user:User):Observable<any>{
    return this.http.post(API_URL +"/user", user,{responseType: 'text' as 'json'})
  }
}
