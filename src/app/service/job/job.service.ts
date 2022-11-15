import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../../model/job";
import {Company} from "../../model/company";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class JobService {

  constructor(private httpClient: HttpClient ) {
  }

  getAll():Observable<Job[]>{
    return this.httpClient.get<Job[]>(API_URL + `/job`)
  }

  findAllJob():Observable<Job[]>{
    return this.httpClient.get<Job[]>(API_URL + `/job/admin`)
  }

  saveJob(job: Job):Observable<Job>{
    return this.httpClient.post<Job>(API_URL + `/job` , job);
  }

  findById(id: number | undefined):Observable<Job>{
    return this.httpClient.get<Job>(API_URL + `/job/${id}`);
  }

  editJob(id: number | undefined, job: Job): Observable<Job>{
    return this.httpClient.put<Job>(API_URL + `/job/${id}`,job);
  }

  delete(id: any): Observable<Job>{
    return this.httpClient.delete<Job>(API_URL + `/job/${id}`);
  }

  findJobByCompanyId(id: number | undefined):Observable<Job[]>{
    return this.httpClient.get<Job[]>(API_URL +`/job/company/${id}`)
  }

  findJobByLocationId(id: number | undefined):Observable<Job[]>{
    return this.httpClient.get<Job[]>(API_URL +`/job/location/${id}`)
  }

  findJobByJobFieldId(id: number |undefined):Observable<Job[]> {
    return this.httpClient.get<Job[]>(API_URL + `/job/jobField/${id}`)
  }

  getAllJobBy(name: string, salaryRange_min: any,salaryRange_max: any, jobField: string, location: string, company: string): Observable<any> {
    return this.httpClient.get(API_URL + '/job/search?name=' + name + '&salaryRange_min=' + salaryRange_min +
      '&salaryRange_max=' + salaryRange_max  +'&jobField=' + jobField + '&location=' + location + '&company=' + company );
  }

  findJobByUserId(id: string):Observable<Job[]> {
    return this.httpClient.get<Job[]>(API_URL + `/job/searchByUserId/${id}`)
  }

  getTopJobByDate(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(API_URL + `/topcompanyjob/job`);
  }
}
