import { z } from 'zod';

export const WishlistItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  image: z.string().url(),
});

export const WishlistSchema = z.object({
  items: z.array(WishlistItemSchema),
});

export type WishlistItem = z.infer<typeof WishlistItemSchema>;
export type Wishlist = z.infer<typeof WishlistSchema>;
