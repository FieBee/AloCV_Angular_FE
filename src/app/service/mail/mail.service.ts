import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {Company} from "../../model/company";
import {environment} from "../../../environments/environment";
import {Job} from "../../model/job";

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

  shareJob(user1: any,user2: any,link:any):Observable<Object> {
    return this.httpClient.get(API_URL + `/mail/apply/${user1}/${user2}/${link}`);
  }
}
