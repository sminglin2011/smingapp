import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getModuleList() {
    return this.http.get('test-data/module-list.json')
    .map((rep: Response) => {
      return rep.json();
    });
  }

}
