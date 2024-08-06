export const toProperCase = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

export function toTitleCase(str) {
  return str
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words with a space
}

export const normalizePhoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/[^\d]/g, "");
};
