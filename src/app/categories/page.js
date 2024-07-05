import IconImage from "@/components/IconImage/IconImage";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import Rating from "@/components/Rating/Rating";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { profilePic, verifiedIcon } from "@/exportImage";
import { AiOutlineClockCircle } from "react-icons/ai";

import { FaRegPaperPlane } from "react-icons/fa6";

export const options = [
  {
    value: "recent",
    label: "Most Relevant ",
  },
  {
    value: "toprated",
    label: "Top Rated",
  },
  {
    value: "topguarented",
    label: "Top Guarented",
  },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto  px-6  ">
      <div>
        <h1 className="text-primary_color text-2xl text-center font-semi-bold ">
          Find your best company
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-8  gap-y-4 md:gap-x-4  ">
        {/* filter section */}
        <div className="min-w-[350px] col-span-3 border-2 rounded-md shadow p-4  space-y-4">
          <div>
            <h1 className="text-lg font-bold">Searchig Listing </h1>
          </div>

          <div className="space-y-6">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="text-gray-600 h-12"
            />
            <OptionSelect label="Select a category" options={options} />
            <OptionSelect label="Select a sub category" options={options} />
          </div>
          <div>
            <h1 className="text-lg font-bold">Rating</h1>
            <div>
              <div className="border h-14 rounded-md"></div>
            </div>
          </div>
          <div className=" ">
            <h1 className="text-lg font-bold">Locations</h1>

            <div className="  flex  gap-4 items-center">
              <OptionSelect label="Country" options={options} />
              <Input
                placeholder="City or Zip code"
                className="text-gray-600 h-12"
              />
            </div>
          </div>
          <div className="flex gap-4   justify-between">
            <div className="space-y-2">
              <h1 className="font-bold text-gray-700">Profile status</h1>

              <div className="space-y-2">
                <div className="flex items-center justify-between space-x-2 w-44">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Claimed
                  </label>
                  <Checkbox className="w-6 h-6 rounded-full" id="terms" />
                </div>
                <div className="flex items-center justify-between space-x-2 w-44">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Claimed
                  </label>
                  <Checkbox className="w-6 h-6 rounded-full" id="terms" />
                </div>
                <div className="flex items-center justify-between space-x-2 w-44">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Claimed
                  </label>
                  <Checkbox className="w-6 h-6 rounded-full" id="terms" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-gray-700">Open Now</h1>
              <Button>
                <AiOutlineClockCircle className="mr-2 text-lg" />
                Open Now
              </Button>
            </div>
          </div>
        </div>
        {/*  business  profile section */}
        <div className=" col-span-5 border-2 rounded-md   p-6 space-y-4  ">
          <div className="flex justify-end">
            <OptionSelect
              options={options}
              label="Aidroo Sort"
              className="w-24"
            />
          </div>

          <div className="border p-4 rounded-md  ">
            <div className="flex gap-4 items-center ">
              <IconImage
                src={profilePic}
                alt="profile pic"
                size={100}
                className="rounded-sm"
              />
              <div className="flex flex-col space-y-2 ">
                <div className="flex gap-2 items-center ">
                  <h1 className="text-xl">Aidroo</h1>
                  <IconImage src={verifiedIcon} size={24} />
                </div>
                {/*rating */}
                <div className="md:flex gap-4  items-center  space-y-2 md:space-y-0 ">
                  <div className="flex gap-1 ">
                    <Rating value={5} size={16} />
                  </div>
                  <h1 className="text-gray-600  text-sm  ">
                    <span>4.5 | 102 Reviews</span>
                  </h1>
                </div>
                <div className="flex gap-2 items-center  text-gray-600">
                  <FaRegPaperPlane />
                  <h1 className=" text-sm md:text-lg ">
                    Newyork , United States
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
