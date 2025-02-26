import React from 'react'
import { IoFemale, IoMale, IoMaleFemale } from "react-icons/io5";
import FilterHeader from '../FilterHeader';

const TutorPreference = () => {
  return (
    <div>
      <FilterHeader>Tutor Preference</FilterHeader>
      <div className="mt-4 flex flex-col gap-3">
        <div
          className="group flex items-center gap-5 cursor-pointer justify-between w-full"
          // onClick={() => handleColorChange(color.toLowerCase())}
        >
          <div className="flex items-center gap-3">
            <input
              className="checkbox checkbox-md rounded-lg "
              type="checkbox"
              // checked={!!colorControl[color.toLowerCase()]}
              //   readOnly
              defaultChecked
            />

            <div>All</div>
          </div>
          <div className={`p-1 rounded-lg bg-[#e0e6f7]`}>
            <IoMaleFemale  className="text-[#92096d]" />
          </div>
        </div>
        <div
          className="group flex items-center gap-5 cursor-pointer justify-between w-full"
          // onClick={() => handleColorChange(color.toLowerCase())}
        >
          <div className="flex items-center gap-3">
            <input
              className="checkbox checkbox-md rounded-lg "
              type="checkbox"
              // checked={!!colorControl[color.toLowerCase()]}
              //   readOnly
              defaultChecked
            />

            <div>Meal</div>
          </div>
          <div className={`p-1 rounded-lg bg-[#e0e6f7]`}>
            <IoMale className="text-[#92096d]" />
          </div>
        </div>
        <div
          className="group flex items-center gap-5 cursor-pointer justify-between w-full"
          // onClick={() => handleColorChange(color.toLowerCase())}
        >
          <div className="flex items-center gap-3">
            <input
              className="checkbox checkbox-md rounded-lg "
              type="checkbox"
              // checked={!!colorControl[color.toLowerCase()]}
              //   readOnly
              defaultChecked
            />

            <div>Female</div>
          </div>
          <div className={`p-1 rounded-lg bg-[#e0e6f7]`}>
            <IoFemale  className="text-[#92096d]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorPreference
