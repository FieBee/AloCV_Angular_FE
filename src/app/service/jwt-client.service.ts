import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped, ɵValue} from "@angular/forms";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {


  constructor(private http:HttpClient) { }

  public login(account:any):Observable<any>{
    return this.http.post(API_URL +"/login", account,{responseType: 'text' as 'json'})
  }
  public getUserByAccount_UserName(userName: ɵGetProperty<ɵTypedOrUntyped<{ password: FormControl<string | null>; userName: FormControl<string | null> }, ɵFormGroupRawValue<{ password: FormControl<string | null>; userName: FormControl<string | null> }>, any>, "userName"> | undefined):Observable<any>{
    return this.http.get(API_URL +`/user/getUser/${userName}`,{responseType: 'text' as 'json'})
  }
  public getCompanyByAccount_UserName(companyName: ɵGetProperty<ɵTypedOrUntyped<{ password: FormControl<string | null>; userName: FormControl<string | null> }, ɵFormGroupRawValue<{ password: FormControl<string | null>; userName: FormControl<string | null> }>, any>, "userName"> | undefined):Observable<any>{
    return this.http.get(API_URL +`/company/getCompany/${companyName}`,{responseType: 'text' as 'json'})
  }







}
