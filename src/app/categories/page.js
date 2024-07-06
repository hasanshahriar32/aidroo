import category from "@/asserts/mobile-icons/categories.svg";
import IconImage from "@/components/IconImage/IconImage";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import Rating from "@/components/Rating/Rating";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import reportIcon from "@/public/icons/report-icon.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  brifcaseIcon,
  myReview,
  profilePic,
  verifiedIcon,
} from "@/exportImage";
import { AiOutlineClockCircle } from "react-icons/ai";

import { shortenString } from "@/lib/utils";
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
export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

let str = ` I had a seamless experience with Panacea.professionals do not understand our process.`;
export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto  px-6  py-10   ">
      <div>
        <h1 className="text-primary_color text-2xl text-center font-semi-bold  py-8">
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

          <div className="border rounded-md  ">
            <div className="flex gap-4 items-center  p-4  ">
              <IconImage
                src={profilePic}
                alt="profile pic"
                size={80}
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
                  <FaRegPaperPlane className="text-[12px]" />
                  <h1 className=" text-sm  ">Newyork , United States</h1>
                </div>
              </div>
            </div>
            <div className=" border-t px-4 py-2">
              <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1" className="border-b-0">
                  <div className="flex justify-between">
                    <div className=" grid grid-cols-3  w-full gap-4">
                      <div className="flex gap-2 items-center ">
                        <IconImage src={category} size={20} />
                        <h1 className="text-xs">Digital Agency</h1>
                      </div>
                      <div className="flex gap-2 items-center ">
                        <IconImage src={brifcaseIcon} size={20} />
                        <h1 className="text-xs">Job feed</h1>
                      </div>
                      <AccordionTrigger className="w-fit">
                        <div className="flex gap-2 items-center">
                          <IconImage src={myReview} size={20} />
                          <h1 className="text-xs">Latest reviews</h1>
                        </div>
                      </AccordionTrigger>
                    </div>
                    <div className="flex justify-end mt-2   w-fit">
                      <IconImage src={reportIcon} size={20} />
                    </div>
                  </div>
                  <AccordionContent className="border  ">
                    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                      <div className="flex w-max space-x-4 p-4">
                        {works.map((artwork) => (
                          <Card className=" max-w-52">
                            <CardHeader className="flex">
                              <div className="flex flex-col gap-2">
                                <div>
                                  <IconImage
                                    src={profilePic}
                                    size={20}
                                    className="rounded-full ring-1 ring-offset-2"
                                    alt="profile
                                                 pic"
                                  />
                                </div>
                                <div className="flex gap-1">
                                  <Rating value={4} size={14} />
                                </div>
                              </div>

                              <div className=" w-full md:w-64 border" />
                            </CardHeader>
                            <CardContent className="  mt-2">
                              <div className=" ">
                                <p className="text-gray-500 text-sm tracking-tight leading-5 ">
                                  {shortenString(str, 50)}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
