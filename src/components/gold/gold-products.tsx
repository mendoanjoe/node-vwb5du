import { ProductCard } from "@/components/product/product-card"
import { goldProducts } from "@/lib/constants/products"

export function GoldProducts() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#58552D] mb-6">Available Gold Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {goldProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
