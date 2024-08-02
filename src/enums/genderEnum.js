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
