import { User } from "@/types/users";
import { addresses } from "./addresses";
import { reviews } from "./reviews";
import { orders } from "./orders";

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: [addresses[0]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    address: [],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 3,
    name: "Emily Zhang",
    email: "emily.zhang@example.com",
    phone: "555-555-5555",
    address: [addresses[1]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 4,
    name: "Michael Lee",
    email: "michael.lee@example.com",
    phone: "666-777-8888",
    address: [addresses[3]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 5,
    name: "Sarah Connor",
    email: "sarah.connor@example.com",
    phone: "444-444-4444",
    address: [addresses[4]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 6,
    name: "Daniel Johnson",
    email: "daniel.johnson@example.com",
    phone: "111-222-3333",
    address: [addresses[5]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 7,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    phone: "777-888-9999",
    address: [addresses[2]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 8,
    name: "Tom Wilson",
    email: "tom.wilson@example.com",
    phone: "888-999-0000",
    address: [addresses[3]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 9,
    name: "Karen Davis",
    email: "karen.davis@example.com",
    phone: "333-444-5555",
    address: [addresses[0]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
  {
    id: 10,
    name: "Brian Green",
    email: "brian.green@example.com",
    phone: "222-333-4444",
    address: [addresses[4]],
    reviews: [reviews[0]],
    orders: [orders[0]]
  },
];
