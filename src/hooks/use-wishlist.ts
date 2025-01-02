import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Wishlist, WishlistItem } from '@/types/wishlist';

interface WishlistStore {
  wishlist: Wishlist;
  addItem: (item: WishlistItem) => void;
  removeItem: (itemId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (itemId: string) => boolean;
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: { items: [] },
      addItem: (item) => {
        set((state) => {
          const existingItem = state.wishlist.items.find((i) => i.id === item.id);
          if (existingItem) return state;
          
          return {
            wishlist: {
              items: [...state.wishlist.items, item],
            },
          };
        });
      },
      removeItem: (itemId) => {
        set((state) => ({
          wishlist: {
            items: state.wishlist.items.filter((i) => i.id !== itemId),
          },
        }));
      },
      clearWishlist: () => set({ wishlist: { items: [] } }),
      isInWishlist: (itemId) => {
        return get().wishlist.items.some((item) => item.id === itemId);
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
