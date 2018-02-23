export class Address {
  id: number;
  street: string;
  building: string;
  country: string;
  postalCode: string;
  block: string;
  floorUnit: string;

  constructor(options: {
    id?: number;
    street?: string;
    building?: string;
    country?: string;
    postalCode?: string;
    block?: string;
    floorUnit?: string;
  } = {}) {
    this.id = options.id ? options.id : 0;
    this.street = options.street ? options.street : '';
    this.building = options.building ? options.building : '';
    this.country = options.country ? options.country : '';
    this.postalCode = options.postalCode ? options.postalCode : '';
    this.block = options.block ? options.block : '';
    this.floorUnit = options.floorUnit ? options.floorUnit : '';
  }
}
