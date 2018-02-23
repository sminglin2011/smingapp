import { Customer } from './customer.model';
import { TingkatCycle } from './tingkatCycle.model';
import { User } from './user.model';
import * as moment from 'moment';
export class TingKat {
  orderDate: string;
  customer: Customer;
  tingkatCycle: TingkatCycle;

  entryDate: string;
  entryStaff: string;
  lastEditDate: string;
  lastEditStaff: string;

  constructor(
    options: {
      orderDate?: string;
      customer?: Customer;
      tingkatCycle?: TingkatCycle;

      entryDate?: string;
      entryStaff?: string;
      lastEditDate?: string;
      lastEditStaff?: string;
    } = {}
  ) {
    this.orderDate = options.orderDate ? options.orderDate : moment().format('DD/MM/YYYY');
    this.customer = options.customer ? options.customer : new Customer;
    this.tingkatCycle = options.tingkatCycle ? options.tingkatCycle : new TingkatCycle();
    this.entryDate = options.entryDate ? options.entryDate : moment().format('DD/MM/YYYY');
    this.entryStaff = options.entryStaff ? options.entryStaff : '';
    this.lastEditDate = options.lastEditDate ? options.lastEditDate : moment().format('DD/MM/YYYY');
    this.lastEditStaff = options.lastEditStaff ? options.lastEditStaff : '';
  }
}
