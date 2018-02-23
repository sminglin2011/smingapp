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
import { Inventory } from '../models/inventory.model';

@Injectable()
export class InventoryService {

  constructor(private http: Http) { }
  loadSideMenu() {
    return this.http
      .get('test-data/inventory-sidemenu.json')
      .map(
        (rep: Response) => rep.json(),
        err => this.handleError(err)
      );
  }
  loadList(queryParam: QueryParam) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http
      .post(
        'http://localhost:8080/inventory/list',
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
  loadObjectById(id) {
    if (id > 0) {
      return this.http.get('http://localhost:8080/inventory/' + id).map(
        (data: Response) => data.json(),
        err => this.handleError(err)
      );
    } else {
      // return new User();
    }
  }
  saveObject(inventory: Inventory) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http.post(
      'http://localhost:8080/inventory/save',
      JSON.stringify(inventory),
      options
    ).map(
      (data: Response) => data.json(),
      err => this.handleError(err)
    );
  }

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
