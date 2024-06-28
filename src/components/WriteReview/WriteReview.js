"use client";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import IconImage from "@/components/IconImage/IconImage";
import Rating from "@/components/Rating/Rating";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import userIcon from "@/public/icons/customer-review.gif";

import { useState } from "react";
import { FaImage } from "react-icons/fa6";

export default function WriteReview() {
  const [isOpen, setIsOpen] = useState(false);

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

          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center space-y-4 ">
            <div>
              <h1 className="mb-2">Service</h1>
              <div className="flex gap-1">
                <Rating value={1} isEditable />
              </div>
            </div>
            <div>
              <h1 className="mb-2">Value</h1>
              <div className="flex gap-1">
                <Rating value={3} isEditable />
              </div>
            </div>
            <div>
              <h1 className="mb-2">Recommended</h1>
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
