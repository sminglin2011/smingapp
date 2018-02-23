import { CateringMenuItem } from './cateringMenuItem.model';

export class CateringMenu {
  id: number;
  menuName: string;
  menuCategory: string;
  noOfItems: number;
  minPax: number;
  menuPricePerPax: number;
  deliveryCharge: number;
  cateringMenuItems: Array<CateringMenuItem>;

  constructor(
    options: {
      id?: number;
      menuName?: string;
      menuCategory?: string;
      noOfItems?: number;
      minPax?: number;
      menuPricePerPax?: number;
      deliveryCharge?: number;
      cateringMenuItems?: Array<CateringMenuItem>;
    } = {}
  ) {
    this.id = options.id ? options.id : 0;
    this.menuName = options.menuName;
    this.menuCategory = options.menuCategory;
    this.noOfItems = options.noOfItems;
    this.minPax = options.minPax;
    this.menuPricePerPax = options.menuPricePerPax;
    this.deliveryCharge = options.deliveryCharge;
    this.cateringMenuItems = options.cateringMenuItems ? options.cateringMenuItems : new Array<CateringMenuItem>();
  }
}
