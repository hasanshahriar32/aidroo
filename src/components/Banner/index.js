import filter from "@/asserts/filter.svg";
import search from "@/asserts/search.svg";
import hero from "@/public/images/heroimage.svg";

import IconImage from "../IconImage/IconImage";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import { Input } from "../ui/input";
export default function Banner() {
  return (
    <div className=" h-fit patenBackgroundImage  ">
      <div className="  max-w-[1280px]  mx-auto mt-14 lg:mt-0  ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:px-8 items-center mx-8">
          <div className="flex flex-col gap-6 text-center justify-center ">
            <h1 className=" font-semibold text-4xl">
              Explore Reviews
              <br className="block lg:hidden" />
              Share Feedback
              <br />
              <span className="   hidden md:block">
                Connect with Reliable Companies
              </span>
            </h1>

            <form className="flex gap-4">
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className="bg-white dark:bg-dark md:w-96 "
              />

              <div className=" flex items-center justify-center  bg-primary_color p-1 rounded-md   cursor-pointer w-[42px] ">
                <IconImage src={filter} alt="Icon 1" size={24} />
              </div>
              <div className=" flex items-center justify-center  bg-primary_color p-1 rounded-md   cursor-pointer w-[42px] ">
                <IconImage src={search} alt="Icon 1" size={24} />
              </div>
            </form>
          </div>

          <ResponsiveImage
            src={hero}
            alt="A descriptive alt text"
            aspectRatio="9/16"
          />
        </div>
      </div>
    </div>
  );
}
