import perfumeCatalog from "../assets/data.json"; // Adjust the path as necessary
import { mapGender } from "../enums/genderEnum";

export const PERFUME_CATALOG = perfumeCatalog.map((item) => ({
  ...item,
  gender: mapGender(item.gender), // Convert the gender to enum
}));
