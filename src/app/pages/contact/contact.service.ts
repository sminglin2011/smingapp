import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  HttpModule
} from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { QueryParam } from '../models/queryParam.model';
import { Customer } from '../models/customer.model';
import { Driver } from '../models/driver.model';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  loadSideMenu() {
    return this.http
      .get('test-data/contact-sidemenu.json')
      .map(
        (rep: Response) => rep.json(),
        err => this.handleError(err)
      );
  }
  // ========================= Customer =====================
  loadCustomerList(queryParam: QueryParam) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http
      .post(
        'http://localhost:8080/customer/list',
        JSON.stringify(queryParam),
        options
      ).map(
        (rep: Response) => {
          return rep.json();
        },
        err => {
          this.handleError(err);
        }
      );
  }
  loadCustomerById(id) {
    if (id > 0) {
      console.log('get the customer from database');
      return this.http.get('http://localhost:8080/customer/' + id).map(
        (data: Response) => data.json(),
        err => this.handleError(err)
      );
    } else {
      // return new User();
    }
  }
  save(customer: Customer) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    console.log('customer json ==', JSON.stringify(customer));
    return this.http.post(
      'http://localhost:8080/customer/save',
      JSON.stringify(customer),
      options
    ).map(
      (data: Response) => data.json(),
      err => this.handleError(err)
    );
  }
  // ========================= Customer End =====================
  // ========================= Driver =====================
  loadDriverList(queryParam: QueryParam) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http
      .post(
        'http://localhost:8080/driver/list',
        JSON.stringify(queryParam),
        options
      ).map(
        (rep: Response) => {
          return rep.json();
        },
        err => {
          this.handleError(err);
        }
      );
  }
  loadDriverById(id) {
    if (id > 0) {
      return this.http.get('http://localhost:8080/driver/' + id).map(
        (data: Response) => data.json(),
        err => this.handleError(err)
      );
    } else {
      // return new User();
    }
  }
  saveDriver(driver: Driver) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http.post(
      'http://localhost:8080/driver/save',
      JSON.stringify(driver),
      options
    ).map(
      (data: Response) => data.json(),
      err => this.handleError(err)
    );
  }
  // ======================================================
  public handleError(operation: String) {
    return (err: any) => {
      const errMsg = `error in ${operation}() retrieving `;
      console.log(`${errMsg}:`, err);
      if (err instanceof HttpErrorResponse) {
        // you could extract more info about the error if you want, e.g.:
        console.log(`status: ${err.status}, ${err.statusText}`);
        // errMsg = ...
      }
      return Observable.throw(errMsg);
    };
  }
}
