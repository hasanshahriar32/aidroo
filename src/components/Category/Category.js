"use client";

import { categories } from "@/constant";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem/CategoryItem";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export default function Category() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(8);

  const updateItemsPerSlide = () => {
    if (window.innerWidth >= 1008) {
      setItemsPerSlide(8);
    } else if (window.innerWidth > 600) {
      setItemsPerSlide(4);
    } else if (window.innerWidth < 600) {
      setItemsPerSlide(2);
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  useEffect(() => {
    setCurrentSlide(0); // Reset to the first slide on item count change
  }, [itemsPerSlide]);

  const chunkedCategories = chunkArray(categories, itemsPerSlide);
  const totalSlides = chunkedCategories.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const prvDisabledColor =
    currentSlide === 0
      ? "bg-gray-600 ring-0 ring-offset-0"
      : "hover:bg-primary_color dark:hover:bg-dark ";

  const nextDisabledColor =
    totalSlides - 1 === currentSlide
      ? "bg-gray-600 ring-0 ring-offset-0"
      : "hover:bg-primary_color dark:hover:bg-dark";

  return (
    <div className="bg-light dark:bg-dark py-20">
      <div className="max-w-[1360px] mx-auto sm:px-8 flex items-center flex-col space-y-12">
        <h1
          className={`text-center text-3xl  font-semibold   ${poppins.variable}`}
        >
          Browse Categories
        </h1>
        <div className=" px-14 relative mx-8">
          <div className=" w-fit lg:max-w-[900px]  flex justify-center overflow-hidden">
            <div
              className="flex w-full transition-transform duration-500 "
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {chunkedCategories.map((categoryChunk, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full grid  max-gap-2 ${
                    itemsPerSlide === 8
                      ? "grid-cols-1 sm:grid-cols-3   md:grid-cols-4  "
                      : itemsPerSlide === 4
                      ? "grid-cols-2  "
                      : itemsPerSlide === 2
                      ? "grid-cols-1"
                      : ""
                  }`}
                >
                  {categoryChunk.map((category) => (
                    <CategoryItem key={Math.random()} category={category} />
                  ))}
                </div>
              ))}
            </div>
            <button
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#CCD9FF] ${prvDisabledColor}    w-8 h-8 rounded-full ring  ring-offset-2 flex justify-center items-center
              overflow-hidden    text-4xl`}
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              disabled={totalSlides - 1 === currentSlide}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#CCD9FF]  ${nextDisabledColor}    w-8 h-8 rounded-full ring ring-offset-2 flex justify-center items-center
              overflow-hidden    text-4xl`}
              onClick={nextSlide}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
