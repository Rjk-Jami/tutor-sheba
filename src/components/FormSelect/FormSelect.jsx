import React from "react";

const FormSelect = ({ options, selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className="select-md select  select-bordered w-full max-full mt-4 px-5  font-normal border rounded-md text-base focus:border-2 border-gray-300 focus:outline-none"
    >
      <option defaultValue={"all"}>All</option>

      {options.map((option, index) => (
        <option key={index} value={option._id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
