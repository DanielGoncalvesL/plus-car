import { Injectable } from '@angular/core';
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
      'Authorization': `Bearer ${'a'}`
   }),
};
  
  constructor(private http: HttpClient) { }

  async createDespesa(data){
    return this.http.post(this.url + "despesa", JSON.stringify(data), this.httpOptions).toPromise();
  }

  async updateDespesa(data, id: string){
    return this.http.put(this.url + "despesa/" + id, JSON.stringify(data), this.httpOptions).toPromise();
  } 

  async deleteDespesa(id: string){
    return this.http.delete(this.url + "despesa/" + id, this.httpOptions).toPromise();
  }

  async findDespesa(id: string){
    return this.http.get(this.url + "despesa/" + id, this.httpOptions).toPromise();
  } 
  
}
