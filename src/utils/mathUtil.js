export function calculateDiscountedPrice(originalPrice, discount = 0) {
  if (typeof originalPrice !== "number" || typeof discount !== "number") {
    throw new TypeError("Both arguments must be numbers.");
  }

  if (originalPrice < 0 || discount < 0 || discount > 100) {
    throw new RangeError(
      "Original price must be non-negative and discount must be between 0 and 100."
    );
  }

  const discountAmount = (originalPrice * discount) / 100;
  return originalPrice - discountAmount;
}

export function getPaginatedItems(array, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return array.slice(startIndex, endIndex);
}
