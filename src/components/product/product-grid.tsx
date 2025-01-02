'use client'

import { ProductCard } from "./product-card"
import { ProductSort } from "./product-sort"
import { products } from "@/lib/constants/products"
import { filterProducts, sortProducts } from "@/lib/utils/product-filters"
import type { FilterState } from "@/types/product"

interface ProductGridProps {
  category?: string;
  filters?: FilterState;
  onChange?: (filters: FilterState) => void;
}

export function ProductGrid({ category, filters, onChange }: ProductGridProps) {
  let filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  console.log(onChange)

  let filterParam = filters || undefined;

  // Apply filters
  filteredProducts = filterProducts(filteredProducts, filterParam);
  
  // Apply sorting
  filteredProducts = sortProducts(filteredProducts, filterParam && filterParam.sortBy || "newest");

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <p className="text-[#A7A691]">
          {filteredProducts.length} products found
        </p>
        <ProductSort
          value={filters?.sortBy || "newest"}
          onChange={(sortBy) => {
            if (onChange) {
              onChange(filters ? { ...filters, sortBy } : {
                priceRanges: [],
                sortBy: 'newest',
                showNew: false,
                showBestSeller: false
              })
            }
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#A7A691]">No products found with the selected filters.</p>
        </div>
      )}
    </div>
  )
}
