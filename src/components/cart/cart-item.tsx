'use client'
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/hooks/use-cart';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-start space-x-3">
      <div className="relative size-20 overflow-hidden rounded-md">
        <Image className="absolute inset-0 h-full w-full object-cover" src={item.image} alt={item.name} fill />
      </div>
      
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-base text-[#58552D] font-semibold leading-[137.5%]">{item.name}</h3>
          <p className='text-sm text-[#A7A691] leading-[142.85%]'>Ukuran: 8</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-full text-[#58552D]"
              onClick={() => {
                if (item.quantity > 1) {
                  updateQuantity(item.id, item.quantity - 1);
                } else {
                  removeItem(item.id);
                }
              }}
            >
              {item.quantity <= 1 ? (
                <Trash2 className="size-4" />
              ) : (
                <Minus className="size-4" />
              )}
            </Button>
            
            <span className="w-7 text-center">{item.quantity}</span>
            
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-full text-[#58552D]"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-base text-[#58552D] leading-[125%] -tracking-[.32px]">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>
    </div>
  );
}
