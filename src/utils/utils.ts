import {
  MdOutlineAccountCircle,
  MdOutlineCurrencyExchange,
  MdOutlineDashboard,
  MdOutlineExtension,
  MdOutlineSettings,
  MdOutlineSwapCalls,
} from "react-icons/md";
import { MenuTypes, activitesCardType, pricing } from "./types";

export const sidebarElements: MenuTypes[] = [
  {
    id: 1,
    name: " Dashboard ",
    link: "/dashboard",
    icon: MdOutlineDashboard,
  },
  {
    id: 2,
    name: " Create ",
    link: "/create",
    icon: MdOutlineSwapCalls,
  },
  {
    id: 3,
    name: " Account ",
    link: "/account",
    icon: MdOutlineAccountCircle,
  },
  {
    id: 4,
    name: " Settings ",
    link: "/dashboard",
    icon: MdOutlineSettings,
  },
  {
    id: 5,
    name: " referrals ",
    link: "/dashboard",
    icon: MdOutlineCurrencyExchange,
  },
  {
    id: 6,
    name: " extensions ",
    link: "/extensions",
    icon: MdOutlineExtension,
  },
];

export const MenuLinks = [
  {
    id: 1,
    name: "features",
    link: "#",
  },
  {
    id: 2,
    name: "About",
    link: "#",
  },
  {
    id: 3,
    name: "Contact",
    link: "#",
  },
  {
    id: 4,
    name: "Careers",
    link: "#",
  },
  {
    id: 5,
    name: "FAQ",
    link: "#",
  },
];

export const pricingData: pricing[] = [
  {
    id: 1,
    desc: "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis recusandae unde deserunt natus quibusdam, nostrum numquam aperiam nam similique omnis vitae iste, ad iusto tenetur inventore. Aliquam, nisi blanditiis.    ",
    title: "Free",
    features: [
      "1000 characters",
      " 5 documents",
      "2 pages each",
      "No customer Support",
    ],
    amount: 0,
    tag: "Use for free",
  },
  {
    id: 2,
    desc: "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis recusandae unde deserunt natus quibusdam, nostrum numquam aperiam nam similique omnis vitae iste, ad iusto tenetur inventore. Aliquam, nisi blanditiis.    ",
    title: "Monthly",
    features: [
      "10000 characters",
      " 10 documents",
      "5 pages each",
      "24/7 customer Support",
    ],
    amount: 10,
    tag: "Monthly pay",
  },
  {
    id: 3,
    desc: "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis recusandae unde deserunt natus quibusdam, nostrum numquam aperiam nam similique omnis vitae iste, ad iusto tenetur inventore. Aliquam, nisi blanditiis.    ",
    title: "Lifetime",
    features: [
      "unlimited characters",
      " Unlimited documents",
      "Unlimited pages",
      "24/7 customer Support",
    ],
    amount: 599,
    tag: "Pay once, own it forever",
  },
];
export const activitesCard: activitesCardType[] = [
  {
    id: 1,
    title: "",
    desc: "",
  },
];

// why us , newsletter , footer

export const voicesText = [
  {
    id: 1,
    name: "Hedda",
    title: "German, de-DE",
  },
  {
    id: 2,
    name: "Hazel",
    title: "English, en-GB",
  },
  {
    id: 3,
    name: "David",
    title: "English, en-US",
  },
  {
    id: 4,
    name: "Zira",
    title: "English, en-US",
  },
  {
    id: 5,
    name: "Helena",
    title: "Spanish, es-ES",
  },
  {
    id: 6,
    name: "Hilda",
    title: "Spanish, es-MX",
  },
  {
    id: 7,
    name: "Hortense",
    title: "French, fr-FR",
  },
  {
    id: 8,
    name: "Lucia",
    title: "Italian, it-IT",
  },
  {
    id: 9,
    name: "Haruka",
    title: "Japanese, ja-JP",
  },
  {
    id: 10,
    name: "Heami",
    title: "Korean, ko-KR",
  },
];
