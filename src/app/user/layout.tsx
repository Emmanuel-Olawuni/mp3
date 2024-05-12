import Sidebar from "@/components/personal/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col sm:flex-row px-6 py-4 justify-center items-start">
      <aside className=" "> 
        <Sidebar />
      </aside>
      <main className="  w-full md:w-2/3 px-8 py-4">{children}</main>
    </div>
  );
};

export default layout;
