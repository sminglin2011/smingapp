import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user-model';
import { FieldBase } from '../shared/dynamic-form/fieldbase';
import { TextBox } from '../shared/dynamic-form/textBox';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
    return this.http.get('/api/apiUser/getUsers') // ('test-data/table-data.json')
    .map(
      (rep: Response) => {
      console.log('this data if got from api', rep.json());
      return rep.json();
      },
      (err) => {
        console.error(err);
        this.handleError(err);
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
  newUser(user) {
    console.log('come to post data');
    return this.http.post('/api/apiUser/newUser', user);
  }

  getUser(id) {
    if (id > 0) {
      console.log('get the user from database');
    } else {
      return new User();
    }
  }
  createUserFields(user: User) {
    const fields: FieldBase<any>[] = [
      new TextBox({
        key: 'username',
        label: 'User Name',
        value: '',
        order: 1,
        conctrolType: 'textbox'
      }),
      new TextBox({
        key: 'email',
        label: 'Email',
        value: '',
        order: 2,
        conctrolType: 'textbox'
      }),
      new TextBox({
        key: 'address.address1',
        label: 'Address',
        value: '',
        order: 3
      })
    ];
    return fields.sort((a, b) => a.order - b.order);
  }
  toFormGroup(fields: FieldBase<any>[] ) {
    const group: any = {};
    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                                              : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
