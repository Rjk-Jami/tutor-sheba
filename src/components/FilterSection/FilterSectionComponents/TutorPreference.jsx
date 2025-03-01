"use client"
import React from 'react'
import { IoFemale, IoMale, IoMaleFemale } from "react-icons/io5";
import FilterHeader from '../FilterHeader';
import CheckBox from '@/components/ui/CheckBox';
import { useSelector } from 'react-redux';
import { setTutorPreference } from '../../../../redux/filter/tutorPreferenceSlice';

const tutorPreferenceOptions = [
  {
    id: "all",
    label: "All",
    icon: <IoMaleFemale  className="text-[#92096d]" />,
  },
  {
    id: "male",
    label: "Male",
    icon: <IoMale className="text-[#92096d]" />,
  },
  {
    id: "female",
    label: "Female",
    icon: <IoFemale  className="text-[#92096d]" />,
  },
];
const TutorPreference = () => {
  const tutorPreferenceTypes = useSelector((state) => state.tutorPreference.tutorPreferenceType);
// console.log(tutorPreferenceTypes)
  return (
    <div>
      <FilterHeader>Tutor Preference</FilterHeader>
      <div className="mt-4 flex flex-col gap-3">
      {tutorPreferenceOptions.map(({ id, label, icon }) => (
          <CheckBox
            key={id}
            id={id}
            label={label}
            icon={icon}
            setType={setTutorPreference}
            types={tutorPreferenceTypes}
          />
        ))} 
        
        
      </div>
    </div>
  )
}

export default TutorPreference
