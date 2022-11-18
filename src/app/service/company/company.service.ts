import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Company} from "../../model/company";
import {Job} from "../../model/job";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private httpClient: HttpClient ) { }

  getAll():Observable<Company[]>{
    return this.httpClient.get<Company[]>(API_URL + `/company`)
  }

  saveCompany(company: Company):Observable<Company>{
    return this.httpClient.post<Company>(API_URL + `/company` , company);
  }

  findById(id: number | any):Observable<Company>{
    return this.httpClient.get<Company>(API_URL + `/company/${id}`);
  }

  editCompany(id: number | undefined | any, company: Company): Observable<Company>{
    return this.httpClient.put<Company>(API_URL + `/company/${id}`,company);
  }

  delete(id: any): Observable<Company>{
    return this.httpClient.delete<Company>(API_URL + `/company/${id}`);
  }

  getTopRecruitment(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(API_URL + `/topcompanyjob`);
  }

  getAllPageable(p:number): Observable<Job[]>{
    return this.httpClient.get<Company[]>(`http://localhost:8080/company/pagingcompany?p=${p}&psize=5`)
  }

  setSuggestTrue(id: number | undefined | any):Observable<Company>{
    return this.httpClient.get<Company>(API_URL + `/company/setSuggestTrue/${id}`);
  }

  setSuggestFalse(id: number | undefined | any):Observable<Company>{
    return this.httpClient.get<Company>(API_URL + `/company/setSuggestFalse/${id}`);
  }
  getCompanySuggest():Observable<Company[]>{
    return this.httpClient.get<Company[]>(API_URL + `/company/suggest`);
  }

}
