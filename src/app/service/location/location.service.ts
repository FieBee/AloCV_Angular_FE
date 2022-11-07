import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient ) { }

  getAll():Observable<Location[]>{
    return this.httpClient.get<Location[]>(API_URL + `/locations`)
  }

  saveLocation(location: Location):Observable<Location>{
    return this.httpClient.post<Location>(API_URL + `/locations` , location);
  }

  findById(id: number):Observable<Location>{
    return this.httpClient.get<Location>(API_URL + `/locations/${id}`);
  }

  editLocation(id: number | undefined, location: Location): Observable<Location>{
    return this.httpClient.put<Location>(API_URL + `/locations/${id}`,location);
  }

  delete(id: any): Observable<Location>{
    return this.httpClient.delete<Location>(API_URL + `/locations/${id}`);
  }
}
