export class MenuCategory {
  id: number;
  sequence: number;
  category: string;

  constructor(
    options: {
      id?: number;
      sequence?: number;
      category?: string;
    } = {}
  ) {
    this.id = options.id;
    this.sequence = options.sequence;
    this.category = options.category;
  }
}
