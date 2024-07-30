import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { ROUTES } from "../routes";

export const COMPANY_WHATSAPP_NUMBER = "+62 819 058 75858";

// MENU SIDEBAR
// TODO: Link
export const TOP_MENU_SIDEBAR = [
  {
    name: "Best Sellers",
    // link: ROUTES.BESTSELLERS,
  },
  {
    name: "Feminine Perfume",
    // link: ROUTES.COLLECTIONS("feminine"),
  },
  {
    name: "Masculine Perfume",
    // link: ROUTES.COLLECTIONS("masculine"),
  },
  {
    name: "Unisex Perfume",
    // link: ROUTES.COLLECTIONS("unisex"),
  },
  {
    name: "Our Stories",
    // link: ROUTES.OURSTORIES,
  },
  {
    name: "Blogs & Magazines",
    // link: ROUTES.BLOGS,
  },
];

// TODO: Link
export const SOCIAL_MEDIA_ICONS = [
  {
    name: "Facebook",
    icon: <FacebookOutlinedIcon />,
    link: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: <XIcon fontSize="small" />,
    link: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon fontSize="small" />,
    link: "https://www.instagram.com/celyssee.perfumery/",
  },
  {
    name: "Pinterest",
    icon: <PinterestIcon fontSize="small" />,
    link: "Https://pinterest.com",
  },
];

// FOOTER MENU
// TODO: LINK
export const FOOTER_MENU = [
  {
    title: "Help",
    submenus: [
      {
        name: "Contact Us",
        // link: ROUTES.BLOGS,
      },
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
    submenus: [{ name: "Corporate Statements", link: "corporate-statements" }],
  },
  {
    title: "Privacy & Terms",
    submenus: [
      {
        name: "Privacy Policy",
        // link: ROUTES.PRIVACYPOLICY,
      },
      {
        name: "Term & Conditions",
        // link: ROUTES.TERMSANDCONDITIONS
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
