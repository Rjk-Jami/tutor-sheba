import React from 'react'
import tutorImage from "../../../public/teacher.webp";
import studentImage from "../../../public/student.webp";
import Image from 'next/image';
const UserTypeBox = ({handleToggle, userOption} ) => {
  return (
    <div
    className="p-4 flex items-center justify-center gap-10 bg-[#E0E6F6] "
  >
    <label className="flex items-center jus space-x-2 cursor-pointer">
      <Image src={tutorImage} alt="tutor" width={50} height={50} />
      <input
        type="checkbox"
        className="peer hidden"
        checked={userOption.tutor}
        onChange={() => handleToggle("tutor")}
      />
      <div className="w-5 h-5 border-2 border-[#6C2A8C] rounded-md peer-checked:bg-[#6C2A8C] transition-colors"></div>

      <span className="text-md">Tutor</span>
    </label>

    <label className="flex items-center space-x-2 cursor-pointer">
      <Image src={studentImage} alt="tutor" width={50} height={50} />
      <input
        type="checkbox"
        className="peer hidden"
        checked={userOption.student}
        onChange={() => handleToggle("student")}
      />
      <div className="w-5 h-5 border-2 border-[#6C2A8C] rounded-md peer-checked:bg-[#6C2A8C] transition-colors"></div>

      <span className="text-md">Student</span>
    </label>
  </div>
  )
}

export default UserTypeBox
