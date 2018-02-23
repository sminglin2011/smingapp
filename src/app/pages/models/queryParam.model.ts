export class QueryParam {
  page: number;
  size: number;
  sortOrder: number;
  sortField: string;
  filterBy: string;
  condition: {};

  constructor(
    options: {
      page?: number;
      size?: number;
      sortOrder?: number;
      sortField?: string;
      filterBy?: string;
      condition?: {};
    } = {}
  ) {
    this.page = options.page ? options.page : 0;
    this.size = options.size ? options.size : 10;
    this.sortOrder = options.sortOrder ? options.sortOrder : -1;
    this.sortField = options.sortField ? options.sortField : 'id';
    this.filterBy = options.filterBy ? options.filterBy : 'or';
    this.condition = options.condition ? options.condition : {};
  }
}
