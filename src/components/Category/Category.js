/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import { categories } from "@/utils/constant";
import { Poppins } from "next/font/google";

import CategoryItem from "./CategoryItem/CategoryItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
// import required modules

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Category() {
  const item = [1, 2, 3];
  return (
    <div className="bg-[#CCD9FF]">
      <div className=" max-w-[1360px] mx-auto sm:px-8 flex items-center flex-col space-y-12  ">
        <h1
          className={`text-center text-3xl text-gray-700 font-semibold pt-12 ${poppins.variable}`}
        >
          Browse Categories
        </h1>
        {/* slider */}

        <div className=" flex  gap-4 max-w-5xl ">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="  flex  gap-4 flex-wrap">
                {categories.map((category) => (
                  <CategoryItem key={category} category={category} />
                ))}
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="  flex  gap-4 flex-wrap">
                {categories.map((category) => (
                  <CategoryItem key={category} category={category} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
