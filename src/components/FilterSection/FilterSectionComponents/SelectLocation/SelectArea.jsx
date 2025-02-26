"use client"
import React, { useState } from "react";
import FilterHeader from "../../FilterHeader";
import FormSelect from "@/components/FormSelect/FormSelect";

const SelectArea = () => {
  const areaOptions = ["All", "area 1", "area 2"];

  const [selectedArea, setSelectedArea] = useState("All");

  console.log(selectedArea);
  return (
    <div>
      <FilterHeader>Select Area</FilterHeader>
      <FormSelect
        options={areaOptions}
        selectedValue={selectedArea}
        onChange={setSelectedArea}
      />
    </div>
  );
};

export default SelectArea;
