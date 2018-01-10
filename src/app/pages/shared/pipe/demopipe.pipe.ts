import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'demopipe'})
export class DemoPipe implements PipeTransform {
  transform(value: any, exponent: string): number {
    // tslint:disable-next-line:prefer-const
    // let exp = parseFloat(exponent);
    console.log('value=', value);
    value = isNaN(value) ? value : '';
    if (value.indexOf('.') < 0) {
        return value;
    } else {
        return value.substring(0, value.indexOf('.'));
    }
  }
}
