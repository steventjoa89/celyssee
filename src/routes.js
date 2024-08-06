export const ROUTES = {
  HOME: "/",
  BEST_SELLERS: "/best-sellers",
  NEW_COLLECTIONS: "/new-collections",
  COLLECTIONS: (collection) => `/collections/${collection}`,
  PRODUCT_DETAILS: (id) => `/product/id/${id}`,
  FAQS: "/faqs",
  RETURN_POLICY: "/return-policy",
  ABOUT_US: "/our-journey",
  BLOGS: "/blogs",
  BLOG: (id) => `/blogs/id/${id}`,
  TERM_AND_CONDITIONS: "/terms-and-conditions",
  PRIVACY_POLICY: "/privacy-policy",
};
