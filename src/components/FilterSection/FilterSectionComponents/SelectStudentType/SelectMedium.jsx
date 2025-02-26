"use client"
import React, { useState } from 'react'
import FilterHeader from '../../FilterHeader';
import FormSelect from '@/components/FormSelect/FormSelect';

const SelectMedium = () => {
    const areaOptions = ["All", "area 1", "area 2"];
    
      const [selectedMedium, setSelectedMedium] = useState("All");
      console.log(selectedMedium);

  return (
    <div>
    <FilterHeader>Select Medium</FilterHeader>
    <FormSelect
      options={areaOptions}
      selectedValue={selectedMedium}
      onChange={setSelectedMedium}
    />
  </div>
  )
}

export default SelectMedium
