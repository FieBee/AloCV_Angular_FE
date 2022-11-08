import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FindJobService {
  private url = "http://localhost:8080/job";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  private header: any;

  constructor(private http: HttpClient) {
    this.header = new Headers({'Content-Type': 'application/context'})
  }
  getAllJobBy(name: any, salaryRange: any, jobField: any, location: any, company: any, pageable: any): Observable<any> {
    return this.http.get<any>(this.url + 'name:' + name + 'salaryRange:' + salaryRange
      +'jobField:' + jobField + 'location:' + location + 'company:' + company + 'pageable:' + pageable);
  }




}
