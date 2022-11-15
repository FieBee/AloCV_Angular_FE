import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cv} from "../../model/cv";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Cv[]>{
    return this.httpClient.get<Cv[]>(API_URL + `/cvs`)
  }

  saveCv(cv: Cv):Observable<Cv>{
    return this.httpClient.post<Cv>(API_URL + `/cvs` , cv);
  }

  findById(id: number | undefined):Observable<Cv>{
    return this.httpClient.get<Cv>(API_URL + `/cvs/${id}`);
  }

  editCv(id: number | any, cv: Cv): Observable<Cv>{
    return this.httpClient.put<Cv>(API_URL + `/cvs/${id}`,cv);
  }

  delete(id: any): Observable<Cv>{
    return this.httpClient.delete<Cv>(API_URL + `/cvs/${id}`);
  }
  findCVByUserId(id: any):Observable<Cv>{
    return this.httpClient.get<Cv>(API_URL + `/cvs/user/${id}`);
  }

  findCVByJobId(id: any):Observable<Cv>{
    return this.httpClient.get<Cv>(API_URL + `/cvs/jobs/${id}`);
  }
  findCVByUserIdAndStatus(id: any): Observable<Cv>{
    return this.httpClient.get<Cv>(API_URL + `/cvs/status/${id}`)
  }
}
