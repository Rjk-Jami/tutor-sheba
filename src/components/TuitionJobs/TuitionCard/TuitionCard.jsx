import { formatDistanceToNow } from "date-fns";
import React from "react";
import { FaMapMarkerAlt, FaMoneyBill, FaSchool, FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoTodaySharp } from "react-icons/io5";
import { MdClass, MdMonitor } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import Link from "next/link";


const TuitionCard = ({ tuition }) => {
  const {
    jobId,
    title,
    location,
    medium,
    classOfMedium,
    student,
    tutor,
    tutoring,
    subject,
    salary,
    tuitionTypes,
    requirements,
    status,
    postedAt,
  } = tuition;
  return (
    <div className="bg-[#f8f9fa] rounded-lg p-5 shadow-xl transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)]">
      <div className="flex items-center justify-between">
        {/* location */}
      <div className=" flex items-center gap-2">
        <FaMapMarkerAlt />
        <span className="text-base font-semibold">
          {location.Location.name}, {location.district.name}
        </span>
      </div>
      {/* job id */}
      <div className=" border border-blue-500 bg-blue-50 hover:bg-white cursor-pointer text-blue-500 text-sm font-semibold rounded-lg  w-fit px-3 py-1.5">
            Job ID: {jobId}
      </div>
      </div>
      {/* title */}
      <Link href={`/tuition-list/${tuition._id}`}><div className="text-xl font-bold mt-2">{title}</div></Link>

      <div className="flex items-center gap-2">
        {/* tuition type */}
        <div className="mt-4 bg-[#9a1eb1] text-white px-3 py-1 rounded-lg w-fit ">
          {tuitionTypes === "homeTuition" ? (
            <div className="flex items-center gap-2">
              <FaHome />
              <p>Home Tuition</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <MdMonitor />
              <p>Online Tuition</p>
            </div>
          )}
        </div>
        {/* posted time */}
        <div className="mt-4 bg-[#1089ad] text-white px-3 py-1 rounded-lg w-fit ">
          {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
        </div>
      </div>

      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* medium */}
        <div className="">
          <div className="flex items-center gap-2">
            <FaSchool className="text-lg" />
            <h4 className="text-lg ">Medium:</h4>
          </div>
          <div className="font-bold">{medium.name}</div>
        </div>
        {/* class */}
        <div className="">
          <div className="flex items-center gap-2">
            <MdClass className="text-lg" />
            <h4 className="text-lg ">Class:</h4>
          </div>
          <div className="font-bold">{classOfMedium.name}</div>
        </div>
        {/* preferred Tutor */}
        <div className="">
          <div className="flex items-center gap-2">
            <FaUser className="text-lg" />
            <h4 className="text-lg ">Preferred Tutor:</h4>
          </div>
          <div className="font-bold">{tutor.preferredGender}</div>
        </div>
        {/* Tutoring Days  */}
        <div className="">
          <div className="flex items-center gap-2">
            <IoTodaySharp className="text-lg" />
            <h4 className="text-lg ">Tutoring Days:</h4>
          </div>
          <div className="font-bold">{tutoring.days} Days/Week</div>
        </div>
        {/* Subject  */}
        <div className="">
          <div className="flex items-center gap-2">
            <HiAcademicCap className="text-lg" />
            <h4 className="text-lg ">Subject:</h4>
          </div>
          {/* subject */}
          <div className=" flex flex-wrap gap-1">
            {subject.map((sub, indexOfSub) => (
              <div
                key={indexOfSub}
                className="font-bold badge badge-md rounded-md bg-[#3ac47d] text-white"
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
        {/* salary */}
        <div className="">
          <div className="flex items-center gap-2">
            <FaMoneyBill className="text-lg" />
            <h4 className="text-lg ">Salary:</h4>
          </div>
          <div className="font-bold">
           <span className="text-[#0d6efd] text-xl"> {salary.amount} {salary.currency}</span>/{salary.period}
          </div>
        </div>
      </div>

      <div className=" flex justify-between mt-4">
        <div className="">
          <h3 className="text-muted font-semibold">
            Posted at:{" "}
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(new Date(postedAt))}
          </h3>
        </div>
        <div className="">
          <Link href={`/tuition-list/${tuition._id}`}><Button>View Details</Button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default TuitionCard;
