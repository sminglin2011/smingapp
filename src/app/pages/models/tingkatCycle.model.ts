import * as moment from 'moment';
export class TingkatCycle {
  startDate: string;
  endDate: string;
  skipDays: Array<string>;
  deliveryDays: Array<number>;
  noOfPax: number;
  days: number;
  constructor(options: {
    startDate?: string;
    endDate?: string;
    skipDays?: Array<string>;
    deliveryDays?: Array<number>;
    noOfPax?: number;
    days?: number;
  } = {}) {
    this.startDate = options.startDate ? options.startDate : moment().format('DD/MM/YYYY');
    this.endDate = options.endDate ? options.endDate : moment().format('DD/MM/YYYY');
    this.skipDays = options.skipDays ? options.skipDays : new Array<string>();
    this.deliveryDays = options.deliveryDays ? options.deliveryDays : new Array<number>();
    this.noOfPax = options.noOfPax ? options.noOfPax : 0;
    this.days = options.days ? options.days : 0 ;
  }
}
