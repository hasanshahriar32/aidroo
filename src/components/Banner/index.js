import filter from "@/asserts/filter.svg";
import hero from "@/asserts/hero-image.svg";
import search from "@/asserts/search.svg";
import IconImage from "../IconImage/IconImage";
import Input from "../Input";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
export default function Banner() {
  return (
    <div className="max-w-[1360px]  mx-auto mt-14 lg:mt-0 h-fit ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:px-8 items-center mx-8">
        <div className="flex flex-col gap-6 text-center justify-center ">
          <h1 className="text-primary-A100 font-semibold text-4xl">
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
              className=" gap-2 text-gray-600 font-bold rounded-xl border w-full outline-none"
            />

            <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.2rem] ">
              <IconImage src={filter} alt="Icon 1" size={30} />
            </div>
            <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.2rem] ">
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
  );
}
