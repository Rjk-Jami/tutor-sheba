"use client";
import Image from "next/image";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Division from "./Division";

const FindTutorBanner = () => {
  return (
    <div className="w-full relative   pt-10 mb-10">
      <div className="absolute w-full h-full z-10 hidden lg:block lg:-translate-y-14 2xl:-translate-y-56 ">
        <svg
          viewBox="0 0 1855 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-65 -116H1855V614L-65 750V-116Z" fill="#F2F6FD" />
          <rect
            x="1219"
            y="-49.2582"
            width="745"
            height="716"
            rx="174"
            transform="rotate(-21.9718 1219 -49.2582)"
            fill="#E1EDFF"
          />
          <rect
            x="1316.29"
            y="-10.1637"
            width="593.799"
            height="570.685"
            rx="127"
            transform="rotate(-21.9718 1316.29 -10.1637)"
            fill="#CEDEF7"
          />
          <rect
            x="1398.59"
            y="22.9024"
            width="465.913"
            height="447.777"
            rx="105"
            transform="rotate(-21.9718 1398.59 22.9024)"
            fill="#C0D3F0"
          />
          <g opacity="0.5">
            <rect
              x="-101.277"
              y="431"
              width="227.84"
              height="225.738"
              rx="58.7006"
              transform="rotate(38.2403 -101.277 431)"
              fill="#E1EDFF"
            />
            <rect
              x="-96.8645"
              y="466.804"
              width="176.588"
              height="174.959"
              rx="39.7649"
              transform="rotate(38.2403 -96.8645 466.804)"
              fill="#CEDEF6"
            />
            <rect
              x="-93.0784"
              y="497.528"
              width="132.605"
              height="131.382"
              rx="30.2971"
              transform="rotate(38.2403 -93.0784 497.528)"
              fill="#C0D3F0"
            />
          </g>
        </svg>
      </div>
      <div className="container relative z-20 mx-auto grid grid-cols-1 lg:grid-cols-12 items-center justify-center lg:justify-normal px-4">
        <div className="lg:col-span-8  ">
          <h2 className="text-3xl  md:text-5xl lg:font-bold font-semibold  text-[#800080] text-center lg:text-left ">
            Best{" "}
            <span className="text-brand-2 relative after:absolute after:w-full after- pb-2 after:h-6 after:bg-[#3c65f5] text-[#3c65f5] after:opacity-10 after:bottom-1 after:left-0 after:-z-10">
              Tutoring Platform{" "}
            </span>
            <br className="hidden lg:block " />
            <span className="mt-2 leading-relaxed">
              for<br className="lg:hidden block" /> Home 
              &amp; Online Tuitions
            </span>
          </h2>
          <div className="flex items-center space-x-2 mt-2 justify-center lg:justify-start">
            <MdLocationOn className="text-3xl text-muted " />
            <span className="text-xl lg:text-2xl font-normal text-muted ">
              Find the Right Tutor in Your Area
            </span>
          </div>
          <div className="my-6 ">
            <button
              onClick={() => document.getElementById("findTutor").showModal()}
              className="relative group flex items-center justify-center space-x-2 bg-gradient-to-r from-[#AD32A2] to-[#58034A] text-white font-bold py-3 px-10  rounded-full transition-all duration-[250ms] transform hover:-translate-y-[3px] hover:ease-[cubic-bezier(0.02,0.01,0.47,1)] hover:ring-8 ring-[#82339D] hover:drop-shadow-[0_0_20px_#82339D] mx-auto lg:mx-0 "
            >
              <IoSearch className="text-lg" />
              <span className="text-lg uppercase font-bold">Find a Tutor</span>
              <FaArrowRight className="text-lg" />
            </button>
          </div>
          <div className="">
            <p className="text-black text-center lg:text-left">
              Divisional Tutors:
            </p>
            <div className=" my-4 xl:w-3/4 mx-auto lg:mx-0">
              <Division></Division>
            </div>
          </div>
        </div>
        <div className="lg:grid col-span-4 hidden mx-auto ">
          <Image
            className="bounce-custom"
            src="https://res.cloudinary.com/dpphpbkkz/image/upload/v1740433332/fineBanner-pic_we83wg.svg"
            alt="Find Tutor"
            width={424}
            height={424}
          />
        </div>
      </div>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="findTutor" className="modal  modal-bottom sm:modal-middle ">
        <div className="modal-box bg-white text-black ">
          <h3 className="font-bold text-2xl text-center">Search Tutor</h3>
          <p className="py-4"></p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default FindTutorBanner;
