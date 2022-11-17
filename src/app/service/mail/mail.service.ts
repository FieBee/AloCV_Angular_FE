import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {Company} from "../../model/company";
import {environment} from "../../../environments/environment";
import {Job} from "../../model/job";
import {Account} from "../../model/account";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})


export class MailService {

  constructor(private httpClient: HttpClient) {
  }

  sendMailApply(user: User, job: any):Observable<Object> {
    return this.httpClient.post(API_URL + `/mail/apply/${job}`, user);
  }

  shareJob(user1: any,user2: any,id:any):Observable<Object> {
    return this.httpClient.get(API_URL + '/mail/share?user1=' + user1 + '&user2=' + user2 +
      '&id=' + id);
  }

  sendOTP(userName: String, otp: any):Observable<Object> {
    return this.httpClient.get(API_URL + '/mail/otp?userName=' + userName + '&otp=' + otp);
  }
}
