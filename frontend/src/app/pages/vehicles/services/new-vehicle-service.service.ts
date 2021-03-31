import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {ICreateVehicleDTO} from '../new-vehicle/DTOs/ICreateVehicleDTO'


@Injectable({
  providedIn: 'root'
})
export class NewVehicleService {

  private readonly url = 'http://localhost:3333/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${'a'}`
   }),
  };

  constructor(private http: HttpClient) { }

  async createVehicle<ICreateVehicleDTO>(data: ICreateVehicleDTO){
    return this.http.post(this.url + "vehicles", JSON.stringify(data), this.httpOptions).toPromise();
  }
}
