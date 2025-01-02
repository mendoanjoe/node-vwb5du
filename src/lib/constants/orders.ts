import { Order } from "@/types/orders";

export const orders: Order[] = [
  {
    id: 1,
    user: 101,
    total: 249.98,
    items: [
      { id: 1, order: 1, product: 1, quantity: 1, price: 149.99 },
      { id: 2, order: 1, product: 2, quantity: 1, price: 99.99 },
    ],
    coupon: "WELCOME10",
    discount: 10,
  },
  {
    id: 2,
    user: 102,
    total: 199.99,
    items: [
      { id: 3, order: 2, product: 3, quantity: 2, price: 99.99 },
    ],
    coupon: "SUMMER20",
    discount: 20,
  },
  {
    id: 3,
    user: 103,
    total: 399.97,
    items: [
      { id: 4, order: 3, product: 4, quantity: 1, price: 199.99 },
      { id: 5, order: 3, product: 5, quantity: 2, price: 99.99 },
    ],
    coupon: "",
    discount: 0,
  },
  {
    id: 4,
    user: 101,
    total: 549.99,
    items: [
      { id: 6, order: 4, product: 6, quantity: 1, price: 549.99 },
    ],
    coupon: "SPRING15",
    discount: 15,
  },
  {
    id: 5,
    user: 104,
    total: 319.96,
    items: [
      { id: 7, order: 5, product: 7, quantity: 4, price: 79.99 },
    ],
    coupon: "",
    discount: 0,
  },
  {
    id: 6,
    user: 105,
    total: 599.95,
    items: [
      { id: 8, order: 6, product: 8, quantity: 5, price: 119.99 },
    ],
    coupon: "BULKBUY10",
    discount: 10,
  },
  {
    id: 7,
    user: 102,
    total: 399.98,
    items: [
      { id: 9, order: 7, product: 9, quantity: 2, price: 199.99 },
    ],
    coupon: "",
    discount: 0,
  },
  {
    id: 8,
    user: 103,
    total: 649.97,
    items: [
      { id: 10, order: 8, product: 10, quantity: 3, price: 216.66 },
    ],
    coupon: "VIP50",
    discount: 50,
  },
  {
    id: 9,
    user: 104,
    total: 129.99,
    items: [
      { id: 11, order: 9, product: 11, quantity: 1, price: 129.99 },
    ],
    coupon: "SINGLEBUY",
    discount: 5,
  },
  {
    id: 10,
    user: 101,
    total: 299.98,
    items: [
      { id: 12, order: 10, product: 12, quantity: 2, price: 149.99 },
    ],
    coupon: "DOUBLEDEAL",
    discount: 10,
  },
  {
    id: 11,
    user: 106,
    total: 749.99,
    items: [
      { id: 13, order: 11, product: 13, quantity: 1, price: 749.99 },
    ],
    coupon: "",
    discount: 0,
  },
  {
    id: 12,
    user: 107,
    total: 239.98,
    items: [
      { id: 14, order: 12, product: 14, quantity: 2, price: 119.99 },
    ],
    coupon: "SUMMER20",
    discount: 20,
  },
  {
    id: 13,
    user: 108,
    total: 479.97,
    items: [
      { id: 15, order: 13, product: 15, quantity: 3, price: 159.99 },
    ],
    coupon: "",
    discount: 0,
  },
  {
    id: 14,
    user: 102,
    total: 349.97,
    items: [
      { id: 16, order: 14, product: 16, quantity: 1, price: 249.99 },
      { id: 17, order: 14, product: 17, quantity: 1, price: 99.98 },
    ],
    coupon: "FALL30",
    discount: 30,
  },
  {
    id: 15,
    user: 103,
    total: 99.99,
    items: [
      { id: 18, order: 15, product: 18, quantity: 1, price: 99.99 },
    ],
    coupon: "",
    discount: 0,
  },
  {
    id: 16,
    user: 104,
    total: 199.98,
    items: [
      { id: 19, order: 16, product: 19, quantity: 2, price: 99.99 },
    ],
    coupon: "BUYMORE",
    discount: 15,
  },
  {
    id: 17,
    user: 105,
    total: 349.98,
    items: [
      { id: 20, order: 17, product: 20, quantity: 2, price: 174.99 },
    ],
    coupon: "BUNDLEDEAL",
    discount: 20,
  },
  {
    id: 18,
    user: 106,
    total: 599.99,
    items: [
      { id: 21, order: 18, product: 6, quantity: 1, price: 599.99 },
    ],
    coupon: "",
    discount: 0,
  },
  {
    id: 19,
    user: 107,
    total: 299.97,
    items: [
      { id: 22, order: 19, product: 9, quantity: 3, price: 99.99 },
    ],
    coupon: "WINTER50",
    discount: 50,
  },
  {
    id: 20,
    user: 108,
    total: 119.99,
    items: [
      { id: 23, order: 20, product: 11, quantity: 1, price: 119.99 },
    ],
    coupon: "WELCOME10",
    discount: 10,
  },
];
