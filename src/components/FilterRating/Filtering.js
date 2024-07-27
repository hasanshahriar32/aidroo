"use client";
import { font14, font16, options } from "@/constant";
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import OptionSelect from "../OptionSelect/OptionSelect";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import StarSvg from "./StarSvg";

export default function Filtering() {
  const [activeButton, setActiveButton] = useState("any");

  const handleClick = (rating) => {
    setActiveButton(rating);
  };
  return (
    <div className="min-w-[350px] col-span-3 border-2 rounded-md shadow p-4  space-y-4">
      <div>
        <h1 className={`${font16} font-medium `}>Searchig Listing</h1>
      </div>

      <div className=" space-y-3 md:space-y-6">
        <Input
          type="text"
          placeholder="What are you looking for?"
          className={`text-gray-600  ${font14} h-10 `}
        />
        <OptionSelect
          label="Select a category"
          options={options}
          className={`text-gray-600  ${font14} h-10 `}
        />
        <OptionSelect
          label="Select a sub category"
          options={options}
          className={`text-gray-600  ${font14} h-10 `}
        />
      </div>
      <div>
        <h1 className={`${font16} font-medium `}>Rating</h1>
        <div className="border border-r-0 h-11 rounded grid grid-cols-4">
          <button
            className={`${font14} text-gray-700 font-semibold border-r flex justify-center items-center  cursor-pointer hover:text-white ${
              activeButton == "any"
                ? "bg-[#9ce0ff] text-white  "
                : "hover:bg-[#81d7fe] "
            }`}
            onClick={() => handleClick("any")}
          >
            <h1 className="text-xs">Any</h1>
          </button>
          <button
            className={`text-xs md:text-[16px] font-semibold border-r flex justify-center items-center place-content-center hover:text-white gap-1  ${
              activeButton === "3.0"
                ? "bg-[#fcde91]  text-white  "
                : "hover:bg-[#fcde91]  "
            }`}
            onClick={() => handleClick("3.0")}
          >
            <StarSvg st0Color="#fcde91" />

            <h1 className="text-xs">3.0 +</h1>
          </button>
          <button
            className={`text-xs md:text-[16px] font-semibold border-r flex justify-center items-center place-content-center gap-1 hover:text-white ${
              activeButton === "4.0"
                ? "bg-[#9ae9cc] text-white"
                : "hover:bg-[#9ae9cc] "
            }`}
            onClick={() => handleClick("4.0")}
          >
            <StarSvg st0Color="#9ae9cc" />
            <h1 className="text-xs">4.0 +</h1>
          </button>
          <button
            className={`text-xs md:text-[16px] font-semibold border-r flex justify-center items-center place-content-center gap-1 hover:text-white   ${
              activeButton === "5.0"
                ? "bg-[#81d7fe] text-white"
                : "hover:bg-[#81d7fe]"
            }`}
            onClick={() => handleClick("5.0")}
          >
            <StarSvg st0Color="#81d7fe" />
            <h1 className="text-xs ">5</h1>
          </button>
        </div>
      </div>
      <div className=" ">
        <h1 className={`${font16} font-medium `}>Locations</h1>

        <div className="  flex  gap-4 items-center">
          <OptionSelect
            label="Country"
            options={options}
            className="text-gray-600 text-sm h-10 "
          />
          <Input
            placeholder="City or Zip code"
            className="text-gray-600 text-sm h-10 "
          />
        </div>
      </div>
      <div className="flex gap-4   justify-between">
        <div className="space-y-2">
          <h1 className={`${font16} font-medium `}>Profile status</h1>

          <div className="space-y-2">
            <div className="flex items-center justify-between space-x-2 w-44">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Claimed
              </label>
              <Checkbox className="w-5 h-5 rounded-full" id="terms" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className=" text-sm md:text-[16px] font-semi-bold ">Open Now</h1>
          <Button className=" gap-1  flex items-center justify-center">
            <AiOutlineClockCircle className=" text-sm md:text-lg font-semi-bold" />
            <span className=" text-xs md:text-[16px] font-bold ">Open Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
