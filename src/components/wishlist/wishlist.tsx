'use client'
import { Heart, X } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WishlistItem } from './wishlist-item';
import { useWishlist } from '@/hooks/use-wishlist';

export function Wishlist() {
  const { wishlist } = useWishlist();
  const itemCount = wishlist.items.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:text-gray-500">
          <span className="sr-only">Wishlist</span>
          <Heart className="size-4" />
          {itemCount > 0 && (
            <span className="absolute right-0 bottom-0 size-4 flex items-center justify-center rounded-full bg-gray-100 text-xs font-bold">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      
      <SheetContent className="flex flex-col w-1/2 sm:max-w-lg gap-5">
        <SheetHeader className='border-b-2 border-[#F7F7F5] pb-6'>
          <SheetTitle className='text-base text-[#58552D] uppercase font-semibold leading-[137.5%]'>Wishlist</SheetTitle>
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        
        {wishlist.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <h3 className='text-xl text-[#58552D] font-bold leading-none -tracking-[.4px]'>Your wishlist is empty</h3>
            <p className="text-base text-[#A7A691] leading-none -tracking-[.32px] mb-1">You haven't added any items to your wishlist yet</p>
            <Button className="mt-4 text-base uppercase font-semibold leading-[137.5%] tracking-[.32px] py-4 px-10 h-fit">
              Browse Products
            </Button>
          </div>
        ) : (
          <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="space-y-4">
              {wishlist.items.map((item) => (
                <WishlistItem key={item.id} item={item} />
              ))}
            </div>
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  );
}
