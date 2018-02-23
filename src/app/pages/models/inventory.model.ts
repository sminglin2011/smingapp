export class Inventory {
  id: number;
  description: string;
  category: string;
  group: string;

  constructor(
    options: {
      id?: number;
      description?: string;
      category?: string;
      group?: string;
    } = {}
  ) {
    this.id = options.id;
    this.description = options.description;
    this.category = options.category;
    this.group = options.group;
  }
}
