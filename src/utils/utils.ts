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
    link: "/features",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "Careers",
    link: "/careers",
  },
  {
    id: 5,
    name: "FAQ",
    link: "/faq",
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