import { Address } from './address.model';

export class Customer {
  id: number;
  name: string;
  email: string;
  mobile: string;
  tel: string;
  addresses: Array<Address>;

  constructor(options: {
    id?: number;
    name?: string;
    email?: string;
    mobile?: string;
    tel?: string;
    addresses?: Array<Address>
  } = {}) {
    this.id = options.id ? options.id : 0;
    this.name = options.name ? options.name : '';
    this.email = options.email ? options.email : '';
    this.mobile = options.mobile ? options.mobile : '';
    this.tel = options.tel ? options.tel : '';
    this.addresses = options.addresses ? options.addresses : [new Address];
  }
}
