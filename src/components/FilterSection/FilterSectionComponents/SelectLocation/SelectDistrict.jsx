"use client";
import React, { useState } from "react";
import FilterHeader from "../../FilterHeader";
import FormSelect from "@/components/FormSelect/FormSelect";

const SelectDistrict = () => {
  const options = ["All", "Option 1", "Option 2"];

  const [selectedValue, setSelectedValue] = useState("All");

  console.log(selectedValue);
  return (
    <div>
      <FilterHeader>Select District</FilterHeader>
      <FormSelect
        options={options}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  );
};

export default SelectDistrict;
