export const Gender = {
  MASCULINE: "Masculine",
  FEMININE: "Feminine",
  OTHER: "Other",
};

export const mapGender = (gender) => {
  switch (gender) {
    case "M":
      return Gender.MASCULINE;
    case "F":
      return Gender.FEMININE;
    case "O":
      return Gender.OTHER;
    default:
      return Gender.OTHER;
  }
};
