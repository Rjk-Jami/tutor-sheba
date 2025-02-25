import FilterSection from "@/components/FilterSection/FilterSection";
import Underline from "@/components/ui/Underline";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen  bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className=" hidden lg:block col-span-1">
            <FilterSection />
          </div>

          <div className=" lg:col-span-3 mx-auto lg:mx-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
