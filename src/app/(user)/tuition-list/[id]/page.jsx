"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useGetTuitionDetailsQuery } from "../../../../../redux/api/rootApi";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { GiPathDistance } from "react-icons/gi";

import {
  FaCalendar,
  FaHome,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaSchool,
  FaTelegramPlane,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { IoTime, IoTodaySharp } from "react-icons/io5";
import { MdClass, MdMonitor } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";
import SocialMediaShare from "@/components/SocialMediaShare/SocialMediaShare";

const TuitionDetails = () => {
  const user = useSelector((state) => state.auth.user);
  const { id } = useParams();
  const { data, error, isLoading } = useGetTuitionDetailsQuery(id);
  console.log(data);
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
  } = data || {};
  return (
    <div className=" container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3">
          {data && (
            <div
              className={`bg-[#f8f9fa] rounded-lg p-5 shadow-xl transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)] `}
            >
              {/* title */}
              <div className="text-3xl text-center lg:text-4xl font-bold mt-2">
                {title}
              </div>
              <div className="mt-4 flex items-center flex-row-reverse justify-center lg:gap-10 gap-5">
                {/* location */}
                <h3 className="text-lg">
                  Posted at:{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(postedAt))}
                </h3>
                {/* job id */}
                <div className="text-lg">Job ID: {jobId}</div>
              </div>

              <div className=" flex items-center mt-4 justify-center flex-col gap-2">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
                <span className="text-2xl font-bold">
                  {location.Location.name}, {location.district.name}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
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
                {/* preferred student */}
                <div className="">
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="text-lg" />
                    <h4 className="text-lg ">Student Gender:</h4>
                  </div>
                  <div className="font-bold">{student.gender}</div>
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

                {/* Tutoring time  */}
                <div className="">
                  <div className="flex items-center gap-2">
                    <IoTime className="text-lg" />
                    <h4 className="text-lg ">Tutoring Time:</h4>
                  </div>
                  <div className="font-bold">
                    {tutoring.time
                      ? tutoring.time + " Days/Week"
                      : "Negotiable"}
                  </div>
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
                {/* No of Student  */}
                <div className="">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-lg" />
                    <h4 className="text-lg ">No of Student:</h4>
                  </div>
                  <div className="font-bold">{student.count}</div>
                </div>
                {/* salary */}
                <div className="">
                  <div className="flex items-center gap-2">
                    <FaMoneyBill className="text-lg" />
                    <h4 className="text-lg ">Salary:</h4>
                  </div>
                  <div className="font-bold">
                    <span className="text-[#0d6efd] text-xl">
                      {" "}
                      {salary.amount} {salary.currency}
                    </span>
                    /{salary.period}
                  </div>
                </div>
              </div>

              <div className=" flex lg:justify-between flex-col lg:flex-row gap-4 mt-10">
                {/*Other Requirements  */}
                <div className="">
                  <div className="flex items-center  gap-2">
                    <FaCalendar className="text-lg" />
                    <h4 className="text-lg ">Other Requirements:</h4>
                  </div>
                  <div className="font-semibold">
                    {requirements && requirements}
                  </div>
                </div>
                {user ? (
                  <Button> APPLY NOW </Button>
                ) : (
                  <Link
                    href={"/auth/login"}
                    className="flex items-center gap-2 btn lg:btn-wide w-full btn-outline btn-info group"
                  >
                    <FaTelegramPlane className="group-hover:text-white " />{" "}
                    <p className="group-hover:text-white">
                      Login then apply the job
                    </p>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
        {data && (
          <div className=" rounded-md shadow-2xl p-10 h-fit ">
            <button className="btn btn-info w-full bg-[#0d6efd] text-lg text-white">
              <GiPathDistance /> Direction
            </button>
            <div className="mt-2">
              <Button className={"w-full py-2.5"}>
                <div className="text-lg text-white flex items-center justify-center">
                  <FaMapMarkerAlt className="text-lg text-white" />
                  <p>Location</p>
                </div>
              </Button>
            
             <div className=" mt-5">
             <SocialMediaShare id={data._id} />
             </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TuitionDetails;
