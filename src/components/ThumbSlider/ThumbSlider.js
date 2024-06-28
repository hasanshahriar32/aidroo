"use client";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

export default function ThumbSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const number = [1, 2, 3, 4, 5];

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {number.map((idex) => (
          <SwiperSlide key={idex}>
            <div className="w-full lg:h-96">
              <ResponsiveImage
                src={`https://swiperjs.com/demos/images/nature-${idex}.jpg`}
                width={500}
                height={300}
                alt="slider"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-6"
      >
        {number.map((idex) => (
          <SwiperSlide key={idex}>
            <div className="h-24">
              <ResponsiveImage
                src={`https://swiperjs.com/demos/images/nature-${idex}.jpg`}
                width={500}
                height={300}
                alt="slider"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
