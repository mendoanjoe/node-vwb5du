'use client'

import { use } from 'react'
import { useState } from 'react'
import { ProductGrid } from "@/components/product/product-grid"
import { ProductFilters } from "@/components/product/product-filters"
import { categories } from "@/lib/constants/categories"
import { notFound } from "next/navigation"
import type { FilterState } from "@/types/product"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params)
  const category = categories.find(c => c.id === resolvedParams.category)
  
  const [filters, setFilters] = useState<FilterState>({
    priceRanges: [],
    sortBy: 'newest',
    showNew: false,
    showBestSeller: false
  })

  if (!category) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#58552D] mb-2">{category.name}</h1>
        <p className="text-[#A7A691]">{category.description}</p>
      </div>
      
      <div className="flex gap-8">
        <ProductFilters 
          filters={filters}
          onChange={setFilters}
        />
        <ProductGrid 
          category={resolvedParams.category}
          filters={filters}
          onChange={setFilters}
        />
      </div>
    </div>
  )
}
