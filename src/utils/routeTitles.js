import { COMPANY_INFO } from "../data/settings";
import { ROUTES } from "../routes";

const companyName = COMPANY_INFO.COMPANY_NAME;

export const ROUTE_TITLES = {
  [ROUTES.HOME]: `${companyName} Official Website`,
  [ROUTES.BEST_SELLERS]: `Best Sellers Show Collections | ${companyName}`,
  [ROUTES.NEW_COLLECTIONS]: `New Releases Show Collections | ${companyName}`,
  [ROUTES.COLLECTIONS(":collection")]: `Collections | ${companyName}`, // TODO: Dynamic Name: {toTitleCase(collection)} Perfume Collections | {COMPANY_INFO.COMPANY_NAME}
  [ROUTES.PRODUCT_DETAILS(":id")]: `Perfumes | ${companyName}`, // TODO: Dynamic Name: {selectedPerfume.name} - {selectedPerfume.gender} - Perfumes | {COMPANY_INFO.COMPANY_NAME}
  [ROUTES.SEARCH]: `Search results | ${companyName}`,
  [ROUTES.FAQS]: `FAQ | ${companyName}`,
  [ROUTES.RETURN_POLICY]: `Return Policy | ${companyName}`,
  [ROUTES.ABOUT_US]: `Our Journey | ${companyName}`,
  [ROUTES.BLOGS]: `Blogs | ${companyName}`,
  [ROUTES.BLOG]: `Blog | ${companyName}`, // TODO: Dynamic Name: {selectedBlog.title} - Blog | {COMPANY_INFO.COMPANY_NAME}
  [ROUTES.TERM_AND_CONDITIONS]: `Terms And Conditions | ${companyName}`,
  [ROUTES.PRIVACY_POLICY]: `Privacy Policy | ${companyName}`,
};

// Page Not Found
export const getTitleForRoute = (pathname, params = {}) => {
  for (const [route, titleTemplate] of Object.entries(ROUTE_TITLES)) {
    // Convert route to regex
    const routeRegex = new RegExp("^" + route.replace(/:\w+/g, "\\w+") + "$");
    if (routeRegex.test(pathname)) {
      let title = titleTemplate;

      // Replace placeholders in the title
      for (const [key, value] of Object.entries(params)) {
        const placeholder = `{${key}}`;
        title = title.replace(new RegExp(placeholder, "g"), value || "");
      }

      return title;
    }
  }
  return `Page Not Found | ${COMPANY_INFO.COMPANY_NAME}`;
};
