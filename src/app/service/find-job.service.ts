import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";

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
  getAllJobBy(name: string, salaryRange_min: any,salaryRange_max: any, jobField: string, location: string, company: string): Observable<any> {
    return this.http.get(this.url + '/search?name=' + name + '&salaryRange_min=' + salaryRange_min +
      '&salaryRange_max=' + salaryRange_max  +'&jobField=' + jobField + '&location=' + location + '&company=' + company );
  }



}
