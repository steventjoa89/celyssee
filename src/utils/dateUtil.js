export function formatDate(dateString) {
  // Create a Date object from the date string
  const date = new Date(dateString);

  // Define options for formatting the date
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  // Format the date
  return date.toLocaleDateString("en-US", options);
}
