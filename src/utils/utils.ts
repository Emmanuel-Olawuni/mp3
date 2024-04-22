import { MdAccountBox, MdConveyorBelt, MdDashboard, MdExtension, MdRestoreFromTrash, MdSettings } from "react-icons/md";
import { MenuTypes } from "./types";

export const sidebarElements: MenuTypes[] = [
  {
    id: 1,
    name: " Dashboard ",
    link: "/dashboard",
    icon: MdDashboard,
  },
  {
    id: 2,
    name: " Convert ",
    link: "/convert",
    icon: MdConveyorBelt,
  },
  {
    id: 3,
    name: " Account ",
    link: "/account",
    icon: MdAccountBox
  },
  {
    id: 4,
    name: " Settings ",
    link: "/dashboard",
    icon: MdSettings
  },
  {
    id: 5,
    name: " referrals ",
    link: "/dashboard",
    icon: MdRestoreFromTrash
  },
  {
    id: 6,
    name: " extensions ",
    link: "/extensions",
    icon: MdExtension
  },
];

