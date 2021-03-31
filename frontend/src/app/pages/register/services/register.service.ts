import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly url = 'http://localhost:3333/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${'a'}`
   }),
};
  
  constructor(private http: HttpClient) { }

  async createRegister(data){
    return this.http.post(this.url + "register", JSON.stringify(data), this.httpOptions).toPromise();
  }

}
