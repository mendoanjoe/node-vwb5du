import { z } from 'zod';

export const CartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  image: z.string().url(),
});

export const CartSchema = z.object({
  items: z.array(CartItemSchema),
  total: z.number().min(0),
});

export type CartItem = z.infer<typeof CartItemSchema>;
export type Cart = z.infer<typeof CartSchema>;
