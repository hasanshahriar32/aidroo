import heroImage from "@/asserts/business-image.svg";

import Image from "next/image";
import Heading from "../Heading";
import { Button } from "../ui/button";

const Business = () => {
  return (
    <div className="background-gradient bannerBackgroundImage   px-8  py-20  ">
      <div className="max-w-[1280px]  mx-auto  ">
        <div className="  mx-auto text-center    rounded-lg">
          <Heading size="xl" className="  font-bold mb-1">
            Why <span className="text-[#05affe]">Aidroo</span> for your
            Business?
          </Heading>
          <p className="  mb-6">
            Explore the popular listings around the world
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
          <Image
            src={heroImage}
            width={500}
            height={300}
            alt="Hero image"
            className="mt-[-50px]"
          />

          <div className=" max-w-[325px] md:w-[400px] space-y-6">
            <div>
              <Heading className=" font-semibold text-[#42b2fc] ">
                Enhanced Branding
              </Heading>
              <Heading size="xs" className="  text-sm  flex-wrap ">
                Elevate your brand with Claimed, Verified, and Guaranteed
                badges, along with verified badge reviews.
              </Heading>
            </div>

            <div className="flex flex-col  ">
              <Heading className="  font-semibold text-[#42b2fc] ">
                Targeted Leads
              </Heading>
              <p size="xs" className="  text-sm  text-wrap ">
                Engage with a highly relevant audience tailored to your niche,
                driving qualified leads to your business.
              </p>
            </div>
            <div className="flex flex-col  ">
              <Heading className=" font-semibold text-[#42b2fc] ">
                Seamless Management
              </Heading>
              <p size="xs" className=" text-wrap   tracking-[.97px]">
                Aidroo simplifies directory management, offering tools to
                update, monitor, and analyze listings efficiently.
              </p>
            </div>
            <div className="mt-8 flex  justify-between space-x-4">
              <Button variant="fillButton" size="lg" className="h-9 md:h-10  ">
                See Our Pricing
              </Button>
              <Button variant="hover" size="lg" className="h-9 md:h-10">
                Add business
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
