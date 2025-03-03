import FilterDrawer from "@/components/FilterSection/FilterDrawer/FilterDrawer";
import FilterSection from "@/components/FilterSection/FilterSection";
import Underline from "@/components/ui/Underline";
import React from "react";
import { IoClose } from "react-icons/io5";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block  mt-4 col-span-1 overflow-y-scroll h-screen scrollbar-hide">
            {/*  */}
            <FilterSection />
          </div>
          {/* filter drawer for small screen */}
          <div className="flex lg:hidden  items-center justify-between">
            <h1 className="text-xl font-bold after:content-[''] after:w-[10rem] after:block after:h-[2px] after:bg-[#9e0a72]">Tuition Jobs</h1>
            <div className="mt-2">
              <FilterDrawer></FilterDrawer>
            </div>
          </div>

          <div className="mt-4 lg:col-span-3 lg:mx-0 overflow-y-scroll h-screen scrollbar-hide">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
