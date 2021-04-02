import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {ICreateVehicleDTO} from '../new-vehicle/dtos/ICreateVehicleDTO'


@Injectable({
  providedIn: 'root'
})
export class NewVehicleService implements OnInit {

  private readonly url = 'http://localhost:3333/';

  ngOnInit(){

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`
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

  async listVehicles(){
    return this.http.get(this.url + "vehicles", this.httpOptions).toPromise();
  }

}
