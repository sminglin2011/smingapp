export class MealType {
  type: string;
  deliveryType: Array<number>; // 1.lunch  2.dinner

  constructor(options: {
    type?: string;
    deliveryType?: Array<number>;
  } = {}) {
    this.type = options.type ? options.type : 'Lunch';
    this.deliveryType = options.deliveryType ? options.deliveryType : [1];
  }
}
