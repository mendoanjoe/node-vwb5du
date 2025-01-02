export interface Product {
  id: string;
  title: string;
  price: number;
  points: number;
  imageUrl: string;
  category: string;
  isNew: boolean;
  isBestSeller: boolean;
}

export interface PriceRange {
  id: string;
  label: string;
  min: number;
  max?: number;
}

export type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'points';

export interface FilterState {
  priceRanges: string[];
  sortBy: SortOption;
  showNew: boolean;
  showBestSeller: boolean;
}
