"use client";
import React from "react";
import { useDispatch } from "react-redux";

const CheckBox = ({ id, label, icon, setType, types }) => {
  const dispatch = useDispatch();
  const isChecked = types[id];
  return (
    <div className="group flex items-center  cursor-pointer justify-between w-full">
      <label className="flex items-center gap-3 w-full cursor-pointer">
        {/* Move 'peer' to the wrapper div */}
        <input
          id={id}
          checked={isChecked}
          onChange={() => dispatch(setType(id))}
          className="peer hidden"
          type="checkbox"
        />

        {/* Now this div can react to peer-checked */}
        <div className="w-5 h-5 border-2 border-[#6C2A8C] rounded-md transition-colors peer-checked:bg-[#6C2A8C]"></div>

        <div className="">{label}</div>
      </label>

      {/* Reacting to peer state using 'group-peer' */}
      <div className="p-1 rounded-lg bg-[#e0e6f7] group-peer-checked:bg-[#c2d1ff] transition-colors">
        {icon}
      </div>
    </div>
  );
};

export default CheckBox;
