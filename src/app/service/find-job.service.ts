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
  getAllJobBy(name: any, salaryRange: any, jobField: any, location: any, company: any, pageable: any): Observable<any> {
    return this.http.get<any>(this.url + 'name:' + name + 'salaryRange:' + salaryRange
      +'jobField:' + jobField + 'location:' + location + 'company:' + company + 'pageable:' + pageable);
  }

  // errorHandler(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }


}
