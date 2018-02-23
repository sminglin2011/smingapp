export class User {
  id: string;
  username: string;
  password: string;
  email: string;
  mobile: string;
  joinDate: string;

  constructor(options: {
    id?: string;
    username?: string;
    password?: string;
    email?: string;
    mobile?: string;
    joinDate?: string;
  } = {}) {
    this.id = options.id;
    this.username = options.username;
    this.password = options.password;
    this.email = options.email;
    this.mobile = options.mobile;
    this.joinDate = options.joinDate;
  }

}
