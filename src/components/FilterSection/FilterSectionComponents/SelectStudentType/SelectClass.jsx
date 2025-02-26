"use client"
import React, { useState } from 'react'
import FilterHeader from '../../FilterHeader';
import FormSelect from '@/components/FormSelect/FormSelect';

const SelectClass = () => {
    const classOptions = ["All", "class 1", "class 2"];
        
          const [selectedClass, setSelectedClass] = useState("All");
          console.log(selectedClass);
  return (
    <div>
    <FilterHeader>Select Class</FilterHeader>
    <FormSelect
      options={classOptions}
      selectedValue={selectedClass}
      onChange={setSelectedClass}
    />
  </div>
  )
}

export default SelectClass
