export class Driver {
  id: number;
  name: string;
  mobile: string;
  vehicleNo: string;

  constructor(options: {
    id?: number;
    name?: string;
    mobile?: string;
    vehicleNo?: string;
  } = {}) {
    this.id = options.id;
    this.name = options.name;
    this.mobile = options.mobile;
    this.vehicleNo = options.vehicleNo;
  }
}
