'use client'
import { ShoppingCartIcon, X } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CartItem } from './cart-item';
import { useCart } from '@/hooks/use-cart';
import { formatPrice } from '@/lib/utils';

export function Cart() {
  const { cart } = useCart();
  const itemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:text-gray-500">
          <span className="sr-only">Cart</span>
          <ShoppingCartIcon className="size-4" />
          {itemCount > 0 && (
            <span className="absolute right-0 bottom-0 size-4 flex items-center justify-center rounded-full bg-gray-100 text-xs font-bold">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      
      <SheetContent className="flex flex-col w-1/2 sm:max-w-lg gap-5">
        <SheetHeader className='border-b-2 border-[#F7F7F5] pb-6'>
          <SheetTitle className='text-base text-[#58552D] uppercase font-semibold leading-[137.5%]'>Keranjang</SheetTitle>
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        
        {cart.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <h3 className='text-xl text-[#58552D] font-bold leading-none -tracking-[.4px]'>Keranjang anda kosong</h3>
            <p className="text-base text-[#A7A691] leading-none -tracking-[.32px] mb-1">Saat ini Anda tidak memiliki perhiasan di keranjang</p>
            <Button className="mt-4 text-base uppercase font-semibold leading-[137.5%] tracking-[.32px] py-4 px-10 h-fit">
              Belanja Perhiasan
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>
            
            <div className="space-y-5 mt-4">
              <Separator className='h-0.5 bg-[#F7F7F5]' />
              <div className="flex flex-col justify-between gap-1">
                <span className="text-lg text-[#58552D] font-bold leading-[122%]">Total keranjang Anda adalah {formatPrice(cart.total)}</span>
                <span className='text-sm text-[#58552D] leading-[142%] -tracking-[.32px]'>*Total harga belum termasuk ongkos kirim dan biaya layanan</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full uppercase text-base font-semibold leading-[137.5%] tracking-[.32px] py-4 px-10 h-fit" onClick={() => alert('Checkout not implemented')}>
                  Bayar sekarang
                </Button>
                {/* <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button> */}
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
