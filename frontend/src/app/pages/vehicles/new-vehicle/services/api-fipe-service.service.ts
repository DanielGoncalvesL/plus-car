import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import {tap} from 'rxjs/operators';

import {IBrand} from '../models/IBrand';
import {IModel} from '../models/IModel';
import {IVehicle} from '../models/IVehicle';
import {IYear} from '../models/IYear';

@Injectable({
  providedIn: 'root'
})
export class ApiFipeService {
  private readonly url = 'https://parallelum.com.br/fipe/api/v1/';
  private type: String;
  private brandCode: number;
  private year: number;

  constructor(private http: HttpClient) {}


  findBrands(type: String) {
    this.type = type;
    return this.http.get<IBrand[]>(this.url + type + "/marcas").pipe(
      tap(console.log)
    );
  }

  findModels(brandCode: number) {
    this.brandCode = brandCode;
    return this.http.get<IModel[]>(this.url + this.type + "/marcas/" + this.brandCode + "/modelos").pipe(
      tap(console.log)
    );
  }

  findYear(year: number) {
    this.year = year;
    return this.http.get<IYear[]>(this.url + this.type + "/marcas/" + this.brandCode + "/modelos/" + this.year + "/anos").pipe(
      tap(console.log)
    );
  }

  findVehicles(date: string) {
    return this.http.get<IVehicle[]>(this.url + this.type + "/marcas/" + this.brandCode + "/modelos/" + this.year + "/anos/" + date).pipe(
      tap(console.log)
    );
  }
}
