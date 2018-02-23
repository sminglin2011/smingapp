import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TingkatService {

  constructor(private http: Http) { }

  loadSideMenu() {
    return this.http
      .get('test-data/tingkat-sidemenu.json')
      .map(
        (rep: Response) => rep.json(),
        err => this.handleError(err)
      );
  }

  getAddressByPostalCode(postalCode: number) {
    return this.http.get('test-data/address-api.json').map((data) => {
      return data.json();
    });
  }

  getTableData() {
    return this.http.get('test-data/table-data.json')
    .map((rep: Response) => {
      return rep.json();
    });
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
