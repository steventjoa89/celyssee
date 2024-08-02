export const toProperCase = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

export const normalizePhoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/[^\d]/g, "");
};
