import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {JobField} from "../../model/job-field";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class JobFieldService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<JobField[]>{
    return this.httpClient.get<JobField[]>(API_URL + `/jobField`)
  }

  saveJobField(JobField: JobField):Observable<JobField>{
    return this.httpClient.post<JobField>(API_URL + `/jobField` , JobField);
  }

  findById(id: number):Observable<JobField>{
    return this.httpClient.get<JobField>(API_URL + `/jobField/${id}`);
  }

  editJobField(id: number | undefined, jobField: JobField): Observable<JobField>{
    return this.httpClient.put<JobField>(API_URL + `/jobField/${id}`,jobField);
  }

  delete(id: any): Observable<JobField>{
    return this.httpClient.delete<JobField>(API_URL + `/jobField/${id}`);
  }
}
