import { SortOptions } from "../enums/sortOptionsEnum";

export function sortPerfumes(sortedBy, sorted, defaultSortIds = []) {
  switch (sortedBy) {
    case SortOptions.ALPHABETICALLY_AZ:
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

    case SortOptions.ALPHABETICALLY_ZA:
      return sorted.sort((a, b) => b.name.localeCompare(a.name));

    case SortOptions.PRICE_AZ:
      return sorted.sort((a, b) => {
        const priceA = Math.min(
          ...a.sizes
            .filter((size) => size.isAvailable !== false)
            .map((size) => size.price)
        );
        const priceB = Math.min(
          ...b.sizes
            .filter((size) => size.isAvailable !== false)
            .map((size) => size.price)
        );
        return priceA - priceB;
      });

    case SortOptions.PRICE_ZA:
      return sorted.sort((a, b) => {
        const priceA = Math.max(
          ...a.sizes
            .filter((size) => size.isAvailable !== false)
            .map((size) => size.price)
        );
        const priceB = Math.max(
          ...b.sizes
            .filter((size) => size.isAvailable !== false)
            .map((size) => size.price)
        );
        return priceB - priceA;
      });

    case SortOptions.DATE_AZ:
      return sorted.sort(
        (a, b) => new Date(a.releaseAt) - new Date(b.releaseAt)
      );

    case SortOptions.DATE_ZA:
      return sorted.sort(
        (a, b) => new Date(b.releaseAt) - new Date(a.releaseAt)
      );
    default: // Default
      const idOrderMap = new Map(
        defaultSortIds.map((id, index) => [id, index])
      );
      return sorted.sort((a, b) => {
        const indexA = idOrderMap.get(a.id) ?? Infinity;
        const indexB = idOrderMap.get(b.id) ?? Infinity;
        return indexA - indexB;
      });
  }
}
