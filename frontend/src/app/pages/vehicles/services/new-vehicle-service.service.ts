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

  async updateVehicle<ICreateVehicleDTO>(data: ICreateVehicleDTO, id: string){
    return this.http.put(this.url + "vehicles/" + id, JSON.stringify(data), this.httpOptions).toPromise();
  } 

  async deleteVehicle(id: string){
    return this.http.delete(this.url + "vehicles/" + id, this.httpOptions).toPromise();
  }

  async findVehicle<ICreateVehicleDTO>(id: string){
    return this.http.get(this.url + "vehicles/" + id, this.httpOptions).toPromise();
  }


  
}
