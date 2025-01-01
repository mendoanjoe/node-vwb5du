import { Heart } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProductCardProps {
  title: string
  price: number
  points: number
  imageUrl: string
  isNew?: boolean
  isBestSeller?: boolean
}

export default function ProductCard({
  title,
  price,
  points,
  imageUrl,
  isNew = false,
  isBestSeller = false,
}: ProductCardProps) {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden">
      {/* Badges */}
      <div className="absolute left-0 top-0 z-10 flex">
        {isNew && (
          <div className="bg-[#F5DCC8] px-4 py-2">
            <span className="text-sm font-medium uppercase">Terbaru</span>
          </div>
        )}
        {isBestSeller && (
          <div className="bg-[#A69460] px-4 py-2">
            <span className="text-sm font-medium text-white uppercase">Best Seller</span>
          </div>
        )}
      </div>

      {/* Favorite Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 z-10"
      >
        <Heart className="h-6 w-6 text-[#A69460]" />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-medium text-[#4A4A4A]">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-lg font-medium text-[#A69460]">
              Rp{price.toLocaleString()}
            </p>
            <p className="text-sm text-[#A69460]">
              Dapatkan poin: {points}
            </p>
          </div>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-white border-2 border-[#A69460] hover:bg-[#A69460] hover:text-white"
          >
            <span className="text-2xl">+</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
