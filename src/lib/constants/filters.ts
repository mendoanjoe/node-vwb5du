import { PriceRange, SortOption } from "@/types/product";

export const PRICE_RANGES: PriceRange[] = [
  { id: 'under-1m', label: 'Under Rp1.000.000', min: 0, max: 1000000 },
  { id: '1m-5m', label: 'Rp1.000.000 - Rp5.000.000', min: 1000000, max: 5000000 },
  { id: 'above-5m', label: 'Above Rp5.000.000', min: 5000000 },
];

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'points', label: 'Points: High to Low' },
];
