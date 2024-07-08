import hero from "@/public/images/heroimage.svg";

import Image from "next/image";
import Heading from "../Heading";
import SearchingBar from "../SearchingBar/Searching";
export default function Banner() {
  return (
    <div className=" h-fit py-14 patenBackgroundImage  ">
      <div className="  max-w-[1280px]  mx-auto mt-14 lg:mt-0  ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:px-8 items-center mx-4">
          <div className="flex flex-col gap-6 text-center justify-center ">
            <Heading Heading className=" font-semibold  " size="xl">
              Explore Reviews <br className="block lg:hidden" />
              Share Feedback
              <br />
              <span className="   hidden md:block">
                Connect with Reliable Companies
              </span>
            </Heading>

            <SearchingBar />
          </div>

          <Image
            src={hero}
            alt="A descriptive alt text"
            className="w-80 md:w-2/3"
            aspectRatio="9/16"
          />
        </div>
      </div>
    </div>
  );
}
