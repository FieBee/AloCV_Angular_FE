import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../../model/job";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient ) { }

  getAll():Observable<Job[]>{
    return this.httpClient.get<Job[]>(API_URL + `/job`)
  }

  saveJob(job: Job):Observable<Job>{
    return this.httpClient.post<Job>(API_URL + `/job` , job);
  }

  findById(id: number):Observable<Job>{
    return this.httpClient.get<Job>(API_URL + `/job/${id}`);
  }

  editJob(id: number | undefined, job: Job): Observable<Job>{
    return this.httpClient.put<Job>(API_URL + `/job/${id}`,job);
  }

  delete(id: any): Observable<Job>{
    return this.httpClient.delete<Job>(API_URL + `/job/${id}`);
  }
}
