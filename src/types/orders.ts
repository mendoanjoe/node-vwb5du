export interface Order {
  id: number;
  user: number;
  total: number;
  items: OrderItem[];
  coupon: string;
  discount: number;
}

export interface OrderItem {
  id: number;
  order: number;
  product: number;
  quantity: number;
  price: number;
}
