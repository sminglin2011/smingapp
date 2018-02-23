export class CateringOrderItem {
  id: number;
  description: string;
  quantity: number;
  noOfPax: number;
  unitMs: string;
  price: number;
  addOn: boolean;
  subCode: string;

  constructor(
    options: {
      id?: number;
      description?: string;
      quantity?: number;
      noOfPax?: number;
      unitMs?: string;
      price?: number;
      addOn?: boolean;
      subCode?: string;
    } = {}
  ) {
    this.id = options.id ? options.id : 0;
    this.description = options.description;
    this.quantity = options.quantity;
    this.noOfPax = options.noOfPax;
    this.unitMs = options.unitMs;
    this.price = options.price;
    this.addOn = options.addOn ? options.addOn : false;
    this.subCode = options.subCode ? options.subCode : 'foodItem';
  }
}
