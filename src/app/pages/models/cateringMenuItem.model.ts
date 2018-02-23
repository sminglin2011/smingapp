export class CateringMenuItem {
  id: number;
  sequence: number;
  description: string;
  itemGroup: string;

  constructor(
    options: {
      id?: number;
      sequence?: number;
      description?: string;
      itemGroup?: string;
    } = {}
  ) {
    this.id = options.id ? options.id : 0;
    this.sequence = options.sequence ? options.sequence : 0;
    this.description = options.description ? options.description : '';
    this.itemGroup = options.itemGroup ? options.itemGroup : '';
  }
}
