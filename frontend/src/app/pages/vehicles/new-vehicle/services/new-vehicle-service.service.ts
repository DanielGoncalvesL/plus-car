import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {ICreateVehicleDTO} from '../DTOs/ICreateVehicleDTO'


@Injectable({
  providedIn: 'root'
})
export class NewVehicleService {

  private readonly url = 'http://localhost:3333/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTY1NjAxOTgsImV4cCI6MTYxNjY0NjU5OCwic3ViIjoiODBjNGYxOTEtODM2OC00YWZhLTg1NWMtYjJmMjMxYmQ2YTUxIn0.iCjNCY1s-3hKjJJMcIX2HkmFFztSfGKtsohMxkG1qWo'
   }),
  };

  constructor(private http: HttpClient) { }

  async createVehicle<ICreateVehicleDTO>(data: ICreateVehicleDTO){
    return this.http.post(this.url + "vehicles", JSON.stringify(data), this.httpOptions).toPromise();
  }
}
