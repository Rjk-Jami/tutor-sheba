import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const SearchTution = () => {
  return (
    <div className="container mx-auto px-4 relative z-20 mb-10 ">
      <h1 className="text-black text-3xl lg:text-4xl text-center font-bold">
        SEARCH TUTORING JOBS
      </h1>
      <p className="text-xl 2xl:text-2xl text-muted font-medium text-center mt-2">
        Find Your Tution Jobs, in your area
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        <div className="w-full flex justify-center">
          <Image
            className="bounce-custom w-full max-w-[640px] max-h-[432px] h-auto"
            src="https://res.cloudinary.com/dpphpbkkz/image/upload/v1740483630/Online_learning-pana_k7o41y.svg"
            alt="Find Tutor"
            width={640}
            height={432}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>
        <div className="text-center py-3 flex flex-col justify-center">
          <h5 className="text-lg md:text-xl xl:text-252xl font-medium text-gray-900">
            Looking for interesting tuition jobs to excel your teaching
            experience?
          </h5>
          <p className="mt-2 text-md md:text-lg">
            If teaching jobs interest you, then you are in the right place.{" "}
            <span className="font-semibold">tutorsheba.com</span>, we often have{" "}
            <strong className="">500+</strong> open home tuition
            jobs that are genuine and{" "}
            <strong className="text-primary">100%</strong> verified. Whether you
            are starting your career as a tuition teacher or an expert in your
            field, we can help you find your next big tuition job. You can
            search and apply to the tuition jobs that best fit your skills,
            favorable location, class, and subjects.
          </p>
          <Link href={"/tuition-list"} className="mt-4 w-fit mx-auto relative group flex items-center justify-center space-x-2 bg-gradient-to-r from-[#AD32A2] to-[#58034A] text-white font-bold py-3 px-10  rounded-full transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)] hover:ring-8 ring-[#82339D] hover:drop-shadow-[0_0_20px_#82339D]  ">
            <IoSearch className="text-lg" />
            <span className="text-lg uppercase font-bold">Find a Tutor</span>
            <FaArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchTution;
