import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

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

  async listProfits(){
    return this.http.get(this.url + "profits", this.httpOptions).toPromise();
  }

  async listSaleVehicles(){
    return this.http.get(this.url + "sale-vehicle", this.httpOptions).toPromise();
  }

  async findSaleVehicle(id: string){
    return this.http.get(this.url + "sale-vehicle/" + id, this.httpOptions).toPromise();
  }
}
