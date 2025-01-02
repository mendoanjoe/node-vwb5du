import { ProductGrid } from "@/components/product/product-grid"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedSection } from "@/components/home/featured-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      <ProductGrid />
    </main>
  )
}
