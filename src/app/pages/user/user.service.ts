import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getSubModule() {
    return this.http.get('test-data/user-module-menu.json')
    .map((rep: Response) => {
      return rep.json();
    });
  }

  getColumns() {
    return this.http.get('test-data/table-columns.json')
    .map((rep: Response) => {
      return rep.json();
    });
  }

  getTableData() {
    return this.http.get('test-data/table-data.json')
    .map((rep: Response) => {
      return rep.json();
    });
  }
}
