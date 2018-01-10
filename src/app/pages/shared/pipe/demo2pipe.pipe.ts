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
@Pipe({name: 'demo2pipe'})
export class Demo2Pipe implements PipeTransform {
  transform(value: any, exponent: string): number {
    // tslint:disable-next-line:prefer-const
    // let exp = parseFloat(exponent);
    console.log('value2=', typeof(value), 'exponent=', exponent);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
    if (typeof(value) != 'object' ) {
        console.log('!= object');
        return value;
    } else {
        console.log('== object', value, 'eeee=', exponent.substring(exponent.indexOf('.'), exponent.length));
        return value[exponent.substring(exponent.indexOf('.') + 1, exponent.length)];
    }
  }
}
