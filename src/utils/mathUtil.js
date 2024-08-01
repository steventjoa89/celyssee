export function calculateDiscountedPrice(originalPrice, discount) {
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
