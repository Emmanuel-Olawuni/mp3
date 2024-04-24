import Sidebar from "@/components/personal/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col sm:flex-row px-6 py-4 ">
      <aside> 
        <Sidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default layout;
