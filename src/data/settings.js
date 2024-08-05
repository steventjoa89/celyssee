import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { ROUTES } from "../routes";

export const COMPANY_INFO = {
  COMPANY_NAME: "CELYSSEE",
  COMPANY_PHONE_NUMBER: "+62 819 058 75858",
  COMPANY_WHATSAPP_NUMBER: "+62 819 058 75858",
  COMPANY_EMAIL_ADDRESS: "steventjoa89@gmail.com",
};

export const HOME_BANNER_IMAGE = "banner.webp";
export const HOME_SUBBANNER1_IMAGE = "subbanner-1.avif";
export const HOME_SUBBANNER2_IMAGE = "subbanner-2.avif";
export const HOME_EMAIL_SUBSCRIPTION_IMAGE = "email_subscription.avif";
export const HOME_STARTER_KIT_IMAGE = "starter_kit.avif";

export const BEST_SELLER_PERFUMES_IDS = [5, 4, 3, 2, 1]; // Home page display from FRONT Array (MAX: 4 items in Home Page)

// MENU SIDEBAR
export const TOP_MENU_SIDEBAR = [
  {
    name: "Best Sellers",
    link: ROUTES.BEST_SELLERS,
  },
  {
    name: "New Collections",
    link: ROUTES.NEW_COLLECTIONS,
  },
  {
    name: "Feminine Perfume",
    // link: ROUTES.COLLECTIONS("feminine"),// TODO: Link
  },
  {
    name: "Masculine Perfume",
    // link: ROUTES.COLLECTIONS("masculine"),// TODO: Link
  },
  {
    name: "Unisex Perfume",
    // link: ROUTES.COLLECTIONS("unisex"),// TODO: Link
  },
  {
    name: "Our Stories",
    // link: ROUTES.OURSTORIES,// TODO: Link
  },
];

export const SOCIAL_MEDIA_ICONS = [
  {
    name: "Facebook",
    icon: <FacebookOutlinedIcon />,
    link: "https://www.facebook.com", // TODO: Link
  },
  {
    name: "Twitter",
    icon: <XIcon fontSize="small" />,
    link: "https://www.twitter.com", // TODO: Link
  },
  {
    name: "Instagram",
    icon: <InstagramIcon fontSize="small" />,
    link: "https://www.instagram.com/celyssee.perfumery/",
  },
  {
    name: "Pinterest",
    icon: <PinterestIcon fontSize="small" />,
    link: "Https://pinterest.com", // TODO: Link
  },
];

// FOOTER MENU
export const FOOTER_MENU = [
  {
    title: "Help",
    submenus: [
      {
        name: "FAQ",
        link: ROUTES.FAQS,
      },
      {
        name: "Return Policy",
        link: ROUTES.RETURN_POLICY,
      },
    ],
  },
  {
    title: "Our Company",
    submenus: [
      {
        name: "Our Journey",
        link: ROUTES.ABOUT_US,
      },
    ],
  },
  {
    title: "Privacy & Terms",
    submenus: [
      {
        name: "Term & Conditions",
        link: ROUTES.TERM_AND_CONDITIONS,
      },
      {
        name: "Privacy Policy",
        link: ROUTES.PRIVACY_POLICY,
      },
    ],
  },
  {
    title: "Online Shop",
    submenus: [
      {
        name: "Tokopedia",
        // link: "https://www.google.co.id",
        outside: true,
      },
      {
        name: "Shopee",
        // link: "https://www.google.co.id",
        outside: true,
      },
      {
        name: "TikTok Shop",
        // link: "https://www.google.co.id",
        outside: true,
      },
      {
        name: "Lazada",
        // link: "https://www.google.co.id",
        outside: true,
      },
      {
        name: "Blibli",
        // link: "https://www.google.co.id",
        outside: true,
      },
    ],
  },
];
