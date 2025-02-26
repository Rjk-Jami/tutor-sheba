import React from "react";
import FilterHeader from "../FilterHeader";
import { PiAddressBookFill } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import { MdMonitor } from "react-icons/md";

const TuitionType = () => {
  return (
    <div>
      <FilterHeader>Tuition Type</FilterHeader>
      <div className="mt-4 flex flex-col gap-3">
        <div
          className="group flex items-center gap-5 cursor-pointer justify-between w-full"
          // onClick={() => handleColorChange(color.toLowerCase())}
        >
          <div className="flex items-center gap-3">
            <input
              className="peer hidden"
              type="checkbox"
              // checked={!!colorControl[color.toLowerCase()]}
              //   readOnly
            />
            <div className="w-5 h-5 border-2 border-[#6C2A8C] rounded-md peer-checked:bg-[#6C2A8C] transition-colors"></div>

            <div>All Tuition</div>
          </div>
          <div className={`p-1 rounded-lg bg-[#e0e6f7]`}>
            <PiAddressBookFill className="text-[#92096d]" />
          </div>
        </div>
        <div
          className="group flex items-center gap-5 cursor-pointer justify-between w-full"
          // onClick={() => handleColorChange(color.toLowerCase())}
        >
          <div className="flex items-center gap-3">
            <input
              className="peer hidden"
              type="checkbox"
              // checked={!!colorControl[color.toLowerCase()]}
              //   readOnly
            />
            <div className="w-5 h-5 border-2 border-[#6C2A8C] rounded-md peer-checked:bg-[#6C2A8C] transition-colors"></div>

            <div>Home Tuition</div>
          </div>
          <div className={`p-1 rounded-lg bg-[#e0e6f7]`}>
            <ImHome className="text-[#92096d]" />
          </div>
        </div>
        <div
          className="group flex items-center gap-5 cursor-pointer justify-between w-full"
          // onClick={() => handleColorChange(color.toLowerCase())}
        >
          <div className="flex items-center gap-3">
            <input
              className="peer hidden"
              type="checkbox"
              // checked={!!colorControl[color.toLowerCase()]}
              //   readOnly
              // checked={userOption.tutor} onChange={() => }

            />
            <div className="w-5 h-5 border-2 border-[#6C2A8C] rounded-md peer-checked:bg-[#6C2A8C] transition-colors"></div>

            <div>Online Tuition</div>
          </div>
          <div className={`p-1 rounded-lg bg-[#e0e6f7]`}>
            <MdMonitor className="text-[#92096d]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionType;
