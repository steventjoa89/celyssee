export const Gender = {
  MASCULINE: "Masculine",
  FEMININE: "Feminine",
  UNISEX: "Unisex",
  OTHER: "Other",
};

export const mapGender = (gender) => {
  switch (gender) {
    case "M":
      return Gender.MASCULINE;
    case "F":
      return Gender.FEMININE;
    case "U":
      return Gender.UNISEX;
    case "O":
      return Gender.OTHER;
    default:
      return Gender.OTHER;
  }
};

const GenderLookup = Object.entries(Gender).reduce((acc, [key, value]) => {
  acc[value.toLowerCase()] = key;
  return acc;
}, {});

// Function to get the corresponding Gender enum value
export const getGenderEnum = (input) => {
  const normalizedInput = input.trim().toLowerCase();

  const key = GenderLookup[normalizedInput];

  if (!key) {
    throw new Error("Invalid gender input");
  }

  return Gender[key];
};
