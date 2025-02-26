"use client"
import React, { useState } from 'react'
import FilterHeader from '../../FilterHeader';
import FormSelect from '@/components/FormSelect/FormSelect';

const SelectMedium = () => {
    const SelectMedium = ["All", "Medium 1", "Medium 2"];
    
      const [selectedMedium, setSelectedMedium] = useState("All");
      console.log(selectedMedium);

  return (
    <div>
    <FilterHeader>Select Medium</FilterHeader>
    <FormSelect
      options={SelectMedium}
      selectedValue={selectedMedium}
      onChange={setSelectedMedium}
    />
  </div>
  )
}

export default SelectMedium
