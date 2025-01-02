import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import type { Cart } from "@/types/cart";

interface OrderSummaryProps {
  cart: Cart;
}

export function OrderSummary({ cart }: OrderSummaryProps) {
  const shipping = 50000; // Fixed shipping cost
  const total = cart.total + shipping;

  return (
    <div className="bg-[#F9F9F0] p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-[#58552D]">Order Summary</h2>
      
      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span className="text-[#58552D]">
              {item.name} x {item.quantity}
            </span>
            <span className="text-[#58552D]">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <Separator className="my-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-[#A7A691]">Subtotal</span>
          <span className="text-[#58552D]">{formatPrice(cart.total)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#A7A691]">Shipping</span>
          <span className="text-[#58552D]">{formatPrice(shipping)}</span>
        </div>
      </div>

      <Separator className="my-4" />
      
      <div className="flex justify-between font-semibold">
        <span className="text-[#58552D]">Total</span>
        <span className="text-[#58552D]">{formatPrice(total)}</span>
      </div>
    </div>
  );
}
