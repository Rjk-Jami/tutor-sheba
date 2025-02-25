"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const SuperSwiper = ({ slides }) => {
  return (
    <div className="mx-auto">
      <Swiper
        watchSlidesProgress={true}
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className=" overflow-hidden "
      >
        {slides?.map((slide, index) => (
          <SwiperSlide className="my-2 " key={index}>
            <div className="flex justify-center items-center">{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuperSwiper;
