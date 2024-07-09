import AllCountries from "@/components/Countries/AllCountries";
import Heading from "@/components/Heading";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import PhoneNumberInput from "@/components/PhoneNumberInput/PhoneNumberInput";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { options } from "@/constant";
import profileImage from "@/public/images/profile.jpg";

export default function BusinessInfo() {
  return (
    <div className="border  rounded-lg p-10 space-y-6">
      <div className="flex gap-10 items-center h-fit">
        <div className=" ring-2 ring-primary_color ring-offset-8  dark:ring-offset-slate-700 rounded-full  w-20 md:w-32 shrink-0  overflow-hidden ">
          <ResponsiveImage
            src={profileImage}
            alt="profile image"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-64 space-y-2">
          <Button variant="fillButton">Change Photo</Button>
          <Button variant="hover">Remove Photo</Button>
        </div>
      </div>
      <div>
        <form className="space-y-6">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="First Name"
              className="bg-white dark:bg-gray-800 h-10 md:h-12 text-xs md:text-sm"
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="bg-white dark:bg-gray-800  h-10 md:h-12  text-xs md:text-sm"
            />
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4"></div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <OptionSelect label="Category" options={options} />
            <OptionSelect label="Sub Category" options={options} />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <AllCountries />
            <PhoneNumberInput />
            <Input
              type="text"
              placeholder="City"
              className="bg-white dark:bg-gray-800  h-10 md:h-12  text-xs md:text-sm"
            />
            <Input
              type="text"
              placeholder="Address"
              className="bg-white dark:bg-gray-800  h-10 md:h-12  text-xs md:text-sm"
            />
          </div>
          <div className="space-y-2">
            <Heading className="text-center  ">About my Business </Heading>
            <Textarea
              className="h-24 placeholder:text-xs placeholder:flex placeholder:mt-14"
              placeholder="Write short description about your business .
(300 words Limit )"
            />
          </div>
          <Button
            variant="fillButton"
            className="h-10 md:h-12  text-xs md:text-sm"
          >
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
}
