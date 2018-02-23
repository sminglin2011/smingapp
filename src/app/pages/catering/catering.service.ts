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
import { CateringMenu } from '../models/cateringMenu.model';
import { MenuCategory } from '../models/menuCategory.model';

@Injectable()
export class CateringService {

  constructor(private http: Http) { }
  loadSideMenu() {
    return this.http
      .get('test-data/catering-sidemenu.json')
      .map(
        (rep: Response) => rep.json(),
        err => this.handleError(err)
      );
  }
  // ======================== MenuCategory ========================
  loadMenuCategoryList(queryParam: QueryParam) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http
      .post(
        'http://localhost:8080/menucategory/list',
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
  saveMenuCategory(menuCategory: MenuCategory) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http.post(
      'http://localhost:8080/menucategory/save',
      JSON.stringify(menuCategory),
      options
    ).map(
      (data: Response) => data.json(),
      err => this.handleError(err)
    );
  }
  // ======================== MenuCategory End ========================

  // ======================== Menu ========================
  loadCateringMenuList(queryParam: QueryParam) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http
      .post(
        'http://localhost:8080/cateringmenu/list',
        JSON.stringify(queryParam),
        options
      ).map(
        (rep: Response) => {
          console.log('service load menus ', rep);
          return rep.json();
        },
        err => {
          this.handleError(err);
        }
      );
  }
  saveCateringMenu(cateringMenu: CateringMenu) {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: h });
    return this.http.post(
      'http://localhost:8080/cateringmenu/save',
      JSON.stringify(cateringMenu),
      options
    ).map(
      (data: Response) => data.json(),
      err => this.handleError(err)
    );
  }
  loadItemGroup() {
    return this.http.get('test-data/item-group.json').map( (data: Response) => data.json());
  }
  // ======================== Menu End ========================
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
