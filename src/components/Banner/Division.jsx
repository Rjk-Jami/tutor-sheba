import React from "react";
import SuperSwiper from "../SuperSwiper/SuperSwiper";

const division = () => {
  const division = [
    <span className="border-2 border-black px-10 py-1 rounded-full"> Dhaka: 150</span>,
    <span className="border-2 border-black px-10 py-1 rounded-full"> Chattogram: 120</span>,
    <span className="border-2 border-black px-10 py-1 rounded-full"> Barishal: 100</span>,
    <span className="border-2 border-black px-10 py-1 rounded-full"> Khulna: 110</span>,
    <span className="border-2 border-black px-10 py-1 rounded-full"> Sylhet: 200</span>,
    <span className="border-2 border-black px-10 py-1 rounded-full"> Rajshahi: 200</span>,
    <span className="border-2 border-black px-10 py-1 rounded-full"> Rangpur: 200</span>,
    <span className="border-2 border-black px-10 py-1 rounded-full"> Mymensingh: 200</span>,
  ];

  return (
    <div>
      <SuperSwiper slides={division}></SuperSwiper>
    </div>
  );
};

export default division;
