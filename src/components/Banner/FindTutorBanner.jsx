import Image from "next/image";
import React from "react";

const FindTutorBanner = () => {
  return (
    <div className="w-full relative">
      <div className="absolute w-full -z-10 hidden lg:block xl:-translate-y-1/3 -translate-y-3.5">
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
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-8 lg:coll-span-12 ">
          <h2 className="text-4xl  md:text-5xl font-bold text-[#800080]">
            Best <span className="text-brand-2 relative after:absolute after:w-full after- pb-2 after:h-6 after:bg-[#3c65f5] text-[#3c65f5] after:opacity-10 after:bottom-1 after:left-0 after:-z-10">Tutoring Platform</span>
            <br className="hidden lg:block " />
            <span className="mt-2 leading-relaxed">for Home &amp; Online Tuitions</span>
          </h2>
        </div>
        <div className="lg:grid col-span-4 hidden">
          <Image
            src="https://res.cloudinary.com/dpphpbkkz/image/upload/v1740433332/fineBanner-pic_we83wg.svg"
            alt="Find Tutor"
            width={424}
            height={424}
          />
        </div>
      </div>
    </div>
  );
};

export default FindTutorBanner;
