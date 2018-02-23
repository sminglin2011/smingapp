import { CateringOrderDelivery } from './cateringOrderDelivery.model';
import { Customer } from './customer.model';
export class CateringOrder {
  id: number;
  orderNumber: string;
  orderDate: string;
  customer: Customer;
  cateringDeliveries: Array<CateringOrderDelivery>;

  constructor(
    options: {
      id?: number;
      orderNumber?: string;
      orderDate?: string;
      customer?: Customer;
      cateringDeliveries?: Array<CateringOrderDelivery>;
    } = {}
  ) {
    this.id = options.id ? options.id : 0;
    this.orderNumber = options.orderNumber;
    this.orderDate = options.orderDate;
    this.customer = options.customer;
    this.cateringDeliveries = options.cateringDeliveries ? options.cateringDeliveries : new Array<CateringOrderDelivery>();
  }
}
