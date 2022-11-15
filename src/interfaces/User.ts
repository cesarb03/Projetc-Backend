export interface User {
  email: string;
  password: string;
  name: string;
  address: string;
  age: number;
  phoneNumber: string;
  picture: string;
  isAdmin: boolean;
  comparePassword(reqPassword: string, password: string): Promise<boolean>;
}
