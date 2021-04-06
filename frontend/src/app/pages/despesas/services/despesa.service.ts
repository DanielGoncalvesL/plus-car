import { Injectable } from '@angular/core';
import { IExpenseDTO } from '../dtos/IExpenseDTO';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private readonly url = 'http://localhost:3333/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`
   }),
};

  constructor(private http: HttpClient) { }

  async createDespesa<IExpenseDTO>(data: IExpenseDTO){
    console.log(data)
    return this.http.post(this.url + "expenses", JSON.stringify(data), this.httpOptions).toPromise();
  }

  async createExpenseVehicle<IExpenseDTO>(data: IExpenseDTO){
    console.log(data)
    return this.http.post(this.url + "vehicle-expenses", JSON.stringify(data), this.httpOptions).toPromise();
  }

  async updateDespesa(data, id: string){
    return this.http.put(this.url + "expenses/" + id, JSON.stringify(data), this.httpOptions).toPromise();
  }

  async deleteDespesa(id: string){
    return this.http.delete(this.url + "expenses/" + id, this.httpOptions).toPromise();
  }

  async findDespesa(id: string){
    return this.http.get(this.url + "expenses/" + id, this.httpOptions).toPromise();
  }

  async findExpenseVehicle(id: string){
    return this.http.get(this.url + "vehicle-expenses/" + id, this.httpOptions).toPromise();
  }

  async listDespesas(){
    return this.http.get(this.url + "expenses/", this.httpOptions).toPromise();
  }

  async listExpenses(){
    return this.http.get(this.url + "vehicle-expenses/", this.httpOptions).toPromise();
  }

  async findExpensesVehiclesByVehicle(id: string){
    return this.http.get(this.url + "vehicle-expenses/vehicle/" + id, this.httpOptions).toPromise();
  }

}
