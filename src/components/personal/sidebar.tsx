'use client'
import { MenuTypes } from "@/utils/types";
import { sidebarElements } from "@/utils/utils";
import Link  from "next/link";
import React from "react";
import { usePathname  } from "next/navigation";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 p-3 rounded-md ">
      {sidebarElements.map((x) => (
        <MenuBar menu={x} key={x.id} />
      ))}
    </div>
  );
};

export default Sidebar;

const MenuBar = ({ menu }: { menu: MenuTypes }) => {
  const { id, name, link, icon: Icon } = menu;
  const activeLink = usePathname()
  

  return (
    <Link
      className={`flex px-4 py-2 gap-4 justify-start font-bold items-center ${activeLink === `/user/dashboard${link}` ? 'bg-primary text-white rounded-md ' : ' text-black'}`}
      href={`/users${link}`}
      key={id}
    >
      <Icon className="text-2xl" />
      <Link
        href={`/users${link}`}
        key={id}
        className="  capitalize text-md leading-5 tracking-wide "
      >
        {" "}
        {name}{" "}
      </Link>
    </Link>
  );
};
