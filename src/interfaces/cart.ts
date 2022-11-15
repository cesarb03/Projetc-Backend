import { storedProduct } from './storedProduct';

export interface cart {
  _id: any;
  user_id: string;
  user_email: string;
  timestamp: string;
  products: storedProduct[];
}
