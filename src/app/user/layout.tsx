import Sidebar from "@/components/personal/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full ">
      <aside> 
        <Sidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default layout;
