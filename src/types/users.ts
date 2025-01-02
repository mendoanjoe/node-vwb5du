import { Address } from "./address";
import { Order } from "./orders";
import { Review } from "./review";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address[];
  reviews: Review[];
  orders: Order[];
}
