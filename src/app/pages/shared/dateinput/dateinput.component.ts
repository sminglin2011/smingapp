import { Component, OnInit, ViewChild, forwardRef, ElementRef, ContentChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateinputComponent),
  multi: true
};

@Component({
  selector: 'app-dateinput',
  template: `
  <ng-content></ng-content><p-calendar [(ngModel)]="myDate1" name="date" dateFormat='dd/mm/yy' (onSelect)="onSelect($event)"></p-calendar>
  `,
  styleUrls: ['./dateinput.component.css'],
  providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class DateinputComponent implements ControlValueAccessor {
  // The internal data model
  private innerValue: any = '';
private myDate1;
  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void ;
  private onChangeCallback: (_: any) => void ;

  // get accessor
  get value(): any {
      return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  // Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    console.log(value, 'value====');
      if (value !== this.innerValue) {
          this.innerValue = value;
          this.myDate1 = value;
      }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    console.log('registerOnChange');
      this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

  onSelect(value) {
    this.myDate1 = value;
    // this.innerValue = value;
          this.onChangeCallback('31/12/2018');
  }
}
