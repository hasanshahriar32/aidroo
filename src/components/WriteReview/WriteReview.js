"use client";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import IconImage from "@/components/IconImage/IconImage";
import Rating from "@/components/Rating/Rating";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import userIcon from "@/public/icons/customer-review.gif";

import { country, options } from "@/constant";
import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import OptionSelect from "../OptionSelect/OptionSelect";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";

export default function WriteReview() {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = {
    role: "admin",
  };

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="w-full border-2   rounded-md p-4 text-32 flex justify-between items-center cursor-pointer"
        onClick={handleOpenChange}
      >
        <IconImage src={userIcon} size={50} alt="user" />

        <h1 className="text-primary">Write Review</h1>
        <div className="flex gap-1">
          <Rating />
        </div>
      </div>
      {isOpen && (
        <form className="w-full border-2   rounded-md p-4 space-y-4">
          <div className="flex justify-end">
            <Button
              variant="fillButton"
              className="border    w-8 h-8 rounded-full  place-content-center  text-md "
              onClick={() => setIsOpen(false)}
            >
              x
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center      h-24">
            <div>
              <h1>Service</h1>
              <div className="flex gap-1">
                <Rating value={1} isEditable />
              </div>
            </div>
            <div>
              <h1>Value</h1>
              <div className="flex gap-1">
                <Rating value={3} isEditable />
              </div>
            </div>
            <div>
              <h1>Recommended</h1>
              <div className="flex gap-1">
                <Rating value={5} isEditable />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3   gap-4   ">
            <div className=" col-span-2 space-y-4">
              <div>
                <label>Title</label>
                <Input placeholder="Title" />
              </div>
              <div>
                <label className="pb-2">Full Review</label>
                <Textarea placeholder="Type your message here." />
              </div>
            </div>
            <div className=" col-span-1 space-y-4">
              <div>
                <label>Date of Experience</label>
                <DatePicker />
              </div>
              <label
                htmlFor="uploadFile1"
                className="  font-semibold text-base rounded p-4  flex flex-col items-center justify-center cursor-pointer border-2     mx-auto font-[sans-serif]"
              >
                <FaImage className="text-6xl text-primary_color" />

                <input type="file" id="uploadFile1" className="hidden" />
                <p className="text-xs font-medium text-gray-400 mt-2">
                  Drag Image or Browse
                </p>
              </label>
            </div>
          </div>
          {/* personal user create */}
          {currentUser.role === "admin" && (
            <div className="space-y-6">
              <h1>Provide Personal Profile Information </h1>
              <Input
                type="text"
                placeholder="Business Name"
                className="bg-white dark:bg-gray-800  h-12"
              />
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="username"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white dark:bg-gray-800  h-12"
                />
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <PhoneNumberInput country={country} />
                <OptionSelect label="country" options={options} />
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="password"
                  placeholder="Create Password"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-white dark:bg-gray-800  h-12"
                />
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionSelect label="country" options={options} />
                <OptionSelect label="country" options={options} />
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="City"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <Input
                  type="text"
                  placeholder="Address"
                  className="bg-white dark:bg-gray-800  h-12"
                />
              </div>
            </div>
          )}
          {/* personal user create end */}
          <div className="  flex justify-center items-center">
            <Button variant="hover" size="lg">
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
