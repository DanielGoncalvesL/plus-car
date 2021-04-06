import { Injectable } from '@angular/core';
import { ISaleVehicleDTO } from '../dtos/ISaleVehicleDTO';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewSaleVehicleService {

  private readonly url = 'http://localhost:3333/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`
   }),
};

  constructor(private http: HttpClient) { }

  async createDespesa(data: ISaleVehicleDTO){
    console.log(data)
    return this.http.post(this.url + "sale-vehicle", JSON.stringify(data), this.httpOptions).toPromise();
  }
}
