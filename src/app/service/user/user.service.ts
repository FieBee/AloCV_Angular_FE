import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient ) { }

  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL + `/user`)
  }

  findById(id: number):Observable<User>{
    return this.httpClient.get<User>(API_URL + `/user/${id}`);
  }

  saveUser(user: User):Observable<User>{
    return this.httpClient.post<User>(API_URL + `/user` , user);
  }

  editUser(id: number | undefined, user: User): Observable<User>{
    return this.httpClient.put<User>(API_URL + `/user/${id}`,user);
  }

  delete(id: any): Observable<User>{
    return this.httpClient.delete<User>(API_URL + `/user/${id}`);
  }
}
