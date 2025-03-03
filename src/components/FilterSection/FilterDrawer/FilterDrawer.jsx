"use client"
import React from 'react'
import FilterSection from '../FilterSection'
import { IoClose } from 'react-icons/io5'
import { FaFilter } from 'react-icons/fa';


export const handleCloseSidebar = (drawerId) => {
    const drawerInput = document.getElementById(drawerId);
    if (drawerInput) drawerInput.checked = false;
  };


const FilterDrawer = () => {
  return (
    <div className="drawer z-30">
            <input id="filter" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="filter" className="btn btn-sm bg-[#c30c81] hover:bg-[#c30c81] hover:text-black text-white drawer-button">
               <FaFilter></FaFilter> Filters
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="filter"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-base-200 text-base-content min-h-screen transition w-80 p-4">
                <label
                  onClick={() => handleCloseSidebar("filter")}
                  className="flex justify-end"
                  htmlFor="my-drawer-4"
                  aria-label="Close sidebar menu"
                >
                  <IoClose className="text-2xl" />
                </label>
                <FilterSection />
              </div>
            </div>
          </div>
  )
}

export default FilterDrawer
