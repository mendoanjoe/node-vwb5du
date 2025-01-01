import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Cart, CartItem } from '@/types/cart';

interface CartStore {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      cart: { items: [], total: 0 },
      addItem: (item) => {
        set((state) => {
          const existingItem = state.cart.items.find((i) => i.id === item.id);
          
          if (existingItem) {
            const updatedItems = state.cart.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            );
            return {
              cart: {
                items: updatedItems,
                total: updatedItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
              },
            };
          }
          
          const newItems = [...state.cart.items, item];
          return {
            cart: {
              items: newItems,
              total: newItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
            },
          };
        })
      },
        
      removeItem: (itemId) => {
        set((state) => {
          const newItems = state.cart.items.filter((i) => i.id !== itemId);
          return {
            cart: {
              items: newItems,
              total: newItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
            },
          };
        })
      },
      updateQuantity: (itemId, quantity) => {
        set((state) => {
          const updatedItems = state.cart.items.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          );
          return {
            cart: {
              items: updatedItems,
              total: updatedItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
            },
          };
        })
      },
      clearCart: () => set({ cart: { items: [], total: 0 } }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
