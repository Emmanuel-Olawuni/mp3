import { MdAccountBox, MdConveyorBelt, MdDashboard, MdExtension, MdOutlineAccountCircle, MdOutlineCurrencyExchange, MdOutlineDashboard, MdOutlineExtension, MdOutlineSettings, MdOutlineSwapCalls, MdRestoreFromTrash, MdSettings } from "react-icons/md";
import { MenuTypes } from "./types";

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
    icon: MdOutlineAccountCircle
  },
  {
    id: 4,
    name: " Settings ",
    link: "/dashboard",
    icon: MdOutlineSettings
  },
  {
    id: 5,
    name: " referrals ",
    link: "/dashboard",
    icon: MdOutlineCurrencyExchange
  },
  {
    id: 6,
    name: " extensions ",
    link: "/extensions",
    icon: MdOutlineExtension
  },
];

export const MenuLinks = [
  {
    id: 1, 
    name: 'features',
    link: '/features'

  },
  {
    id: 2, 
    name: 'About',
    link: '/about'

  },
  {
    id: 3, 
    name: 'Contact',
    link: '/contact'

  },
  {
    id: 4, 
    name: 'Careers',
    link: '/careers'

  },
  {
    id: 5, 
    name: 'FAQ',
    link: '/faq'

  },
]