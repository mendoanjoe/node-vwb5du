import { Product, FilterState, PriceRange } from "@/types/product";
import { PRICE_RANGES } from "@/lib/constants/filters";

export function filterProducts(
  products: Product[],
  filters?: FilterState
): Product[] {
  return products.filter((product) => {
    // Filter by price ranges
    if (filters != undefined && filters.priceRanges.length > 0) {
      const matchesPrice = filters.priceRanges.some((rangeId) => {
        const range = PRICE_RANGES.find((r) => r.id === rangeId);
        if (!range) return false;
        
        return product.price >= range.min && 
          (!range.max || product.price <= range.max);
      });
      if (!matchesPrice) return false;
    }

    // Filter by new items
    if (filters != undefined && filters.showNew && !product.isNew) return false;

    // Filter by best sellers
    if (filters != undefined && filters.showBestSeller && !product.isBestSeller) return false;

    return true;
  });
}

export function sortProducts(
  products: Product[],
  sortBy: FilterState['sortBy']
): Product[] {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'newest':
      return sortedProducts.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    case 'points':
      return sortedProducts.sort((a, b) => b.points - a.points);
    default:
      return sortedProducts;
  }
}
