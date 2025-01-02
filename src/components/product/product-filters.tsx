'use client'

import { Label } from "@/components/ui/label"
import { categories } from "@/lib/constants/categories"
import { PRICE_RANGES } from "@/lib/constants/filters"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import type { FilterState } from "@/types/product"

interface ProductFiltersProps {
  filters?: FilterState;
  onChange?: (filters: FilterState) => void;
}

export function ProductFilters({ filters, onChange }: ProductFiltersProps) {
  return (
    <aside className="w-64 space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-[#58552D] mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/belanja/${category.id}`}
              className="block text-[#A7A691] hover:text-[#58552D] transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-[#58552D] mb-4">Price Range</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox
                id={range.id}
                checked={filters && filters.priceRanges.includes(range.id)}
                onCheckedChange={(checked) => {
                  if(onChange) {
                    onChange(filters ? {
                      ...filters,
                      priceRanges: checked
                        ? [...filters.priceRanges, range.id]
                        : filters.priceRanges.filter((id) => id !== range.id),
                    } : {
                      priceRanges: [],
                      sortBy: 'newest',
                      showNew: false,
                      showBestSeller: false
                    });
                  }
                }}
              />
              <Label htmlFor={range.id}>{range.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#58552D] mb-4">Product Status</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="new"
              checked={filters && filters.showNew}
              onCheckedChange={(checked) => {
                if (onChange) {
                  onChange(filters ? {
                    ...filters,
                    showNew: checked as boolean,
                  } : {
                    priceRanges: [],
                    sortBy: 'newest',
                    showNew: false,
                    showBestSeller: false
                  });
                }
              }}
            />
            <Label htmlFor="new">New Arrivals</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="bestseller"
              checked={filters && filters.showBestSeller}
              onCheckedChange={(checked) => {
                if (onChange) {
                  onChange(filters ? {
                    ...filters,
                    showBestSeller: checked as boolean,
                  } : {
                    priceRanges: [],
                    sortBy: 'newest',
                    showNew: false,
                    showBestSeller: false
                  });
                }
              }}
            />
            <Label htmlFor="bestseller">Best Sellers</Label>
          </div>
        </div>
      </div>
    </aside>
  );
}
