import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TingkatService {

  constructor(private http: Http) { }

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
}
