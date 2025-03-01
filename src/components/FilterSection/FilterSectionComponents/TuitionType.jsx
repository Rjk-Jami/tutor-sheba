"use client";
import React from "react";
import FilterHeader from "../FilterHeader";
import { PiAddressBookFill } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import { MdMonitor } from "react-icons/md";
import CheckBox from "@/components/ui/CheckBox";
import { useSelector } from "react-redux";
import { setTuitionType } from "../../../../redux/filter/tuitionTypeSlice";

const tuitionOptions = [
  {
    id: "allTuition",
    label: "All Tuition",
    icon: <PiAddressBookFill className="text-[#92096d]" />,
  },
  {
    id: "homeTuition",
    label: "Home Tuition",
    icon: <ImHome className="text-[#92096d]" />,
  },
  {
    id: "onlineTuition",
    label: "Online Tuition",
    icon: <MdMonitor className="text-[#92096d]" />,
  },
];
const TuitionType = () => {
  const tuitionTypes = useSelector((state) => state.tuitionType.tuitionTypes);
  // console.log(tuitionTypes)

  return (
    <div>
      <FilterHeader>Tuition Type</FilterHeader>
      <div className="mt-4 flex flex-col gap-3">
        {tuitionOptions.map(({ id, label, icon }) => (
          <CheckBox
            key={id}
            id={id}
            label={label}
            icon={icon}
            setType={setTuitionType}
            types={tuitionTypes}
          />
        ))}
      </div>
    </div>
  );
};

export default TuitionType;
