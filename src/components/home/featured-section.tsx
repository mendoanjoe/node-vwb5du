import { ProductCard } from "@/components/product/product-card"

export function FeaturedSection() {
  const featuredProducts = [
    {
      title: "Diamond Ring",
      price: 5000000,
      points: 5,
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      isNew: true,
      isBestSeller: true,
    },
    // Add more featured products
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#58552D] mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
