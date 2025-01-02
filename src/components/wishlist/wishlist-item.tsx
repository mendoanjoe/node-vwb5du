'use client'
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { WishlistItem as WishlistItemType } from '@/types/wishlist';
import { useWishlist } from '@/hooks/use-wishlist';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';

interface WishlistItemProps {
  item: WishlistItemType;
}

export function WishlistItem({ item }: WishlistItemProps) {
  const { removeItem } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      ...item,
      quantity: 1,
    });
  };

  return (
    <div className="flex items-start space-x-3">
      <div className="relative size-20 overflow-hidden rounded-md">
        <Image fill className="absolute inset-0 h-full w-full object-cover" src={item.image} alt={item.name} />
      </div>
      
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-base text-[#58552D] font-semibold leading-[137.5%]">{item.name}</h3>
          <p className="text-base text-[#58552D] leading-[125%] -tracking-[.32px]">
            {formatPrice(item.price)}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleAddToCart}
            className="text-[#58552D]"
          >
            Add to Cart
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(item.id)}
            className="text-[#58552D]"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
