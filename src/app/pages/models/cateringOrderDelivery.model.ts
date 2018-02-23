import { CateringOrderItem } from './cateringOrderItem.model';
export class CateringOrderDelivery {
  id: number;
  customerName: string;
  contactPerson: string;
  contactNumber: string;
  eventDate: string;
  eventTime: string;
  deliveryDate: string;
  deliveryTime: string;
  collectionDate: string;
  collectionTime: string;
  deliveryAddress: string;
  deliveryPostalCode: number;
  deliveryRemark: string;
  deliveryCharge: number;
  cateringOrderItems: Array<CateringOrderItem>;

  constructor(
    options: {
      id?: number;
      customerName?: string;
      contactPerson?: string;
      contactNumber?: string;
      eventDate?: string;
      eventTime?: string;
      deliveryDate?: string;
      deliveryTime?: string;
      collectionDate?: string;
      collectionTime?: string;
      deliveryAddress?: string;
      deliveryPostalCode?: number;
      deliveryRemark?: string;
      deliveryCharge?: number;
      cateringOrderItems?: Array<CateringOrderItem>;
    } = {}
  ) {
    this.id = options.id ? options.id : 0;
    this.customerName = options.customerName;
    this.contactPerson = options.contactPerson;
    this.contactNumber = options.contactNumber;
    this.eventDate = options.eventDate;
    this.eventTime = options.eventTime;
    this.deliveryDate = options.deliveryDate;
    this.deliveryTime = options.deliveryTime;
    this.collectionDate = options.collectionDate;
    this.collectionTime = options.collectionTime;
    this.deliveryAddress = options.deliveryAddress;
    this.deliveryPostalCode = options.deliveryPostalCode;
    this.deliveryRemark = options.deliveryRemark;
    this.deliveryCharge = options.deliveryCharge;
    this.cateringOrderItems = options.cateringOrderItems ? options.cateringOrderItems : new Array();
  }
}
