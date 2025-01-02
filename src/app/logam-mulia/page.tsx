import { GoldPriceChart } from "@/components/gold/gold-price-chart"
import { GoldProducts } from "@/components/gold/gold-products"

export default function GoldPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-[#58552D] mb-6">Logam Mulia</h1>
      <GoldPriceChart />
      <GoldProducts />
    </div>
  )
}
