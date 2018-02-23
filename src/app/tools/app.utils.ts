import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Injectable()
export class AppUtils {

  static SUCCESS_MESSAGE = {severity: 'success', summary: '', detail: 'SAVE SUCCESS'};

  initFormGroup(obj, compulsoryFields: Array<any>): FormGroup {
    if (!compulsoryFields) { compulsoryFields = []; }
    const group = new FormGroup({});
    // tslint:disable-next-line:forin
    for (const key in obj) {
      // console.log('key ==', key);
      if (typeof(obj[key]) === 'object') {
        if (Array.isArray(obj[key])) {
          const arr = [];
          for (const o of obj[key]) {
            arr.push(this.initFormGroup(o, compulsoryFields));
          }
          group.addControl(key, new FormArray(arr));
        } else {
          group.addControl(key, this.initFormGroup(obj[key], compulsoryFields));
        }
      } else {
        if (compulsoryFields.indexOf(key) > -1) {
          group.addControl(key, new FormControl(obj[key], Validators.required));
        } else {
          group.addControl(key, new FormControl(obj[key]));
        }

      }
    }
    return group;
  }
}
