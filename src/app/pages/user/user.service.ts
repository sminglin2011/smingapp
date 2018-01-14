import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user-model';
import { FieldBase } from './fieldbase';
import { TextBox } from './textBox';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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
