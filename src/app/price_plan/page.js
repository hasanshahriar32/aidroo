import Heading from "@/components/Heading";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  brifcaseIcon,
  clientsmanagement,
  guaranteedbadge,
  plaimedbadge,
  tikmark,
  topplacement,
  verifiedIcon,
} from "@/exportImage";

export default function PricePlan() {
  return (
    <div className="max-w-7xl mx-auto py-4  ">
      <div className="max-w-6xl mx-auto   space-y-4 border px-4 md:px-24 py-10 rounded-md">
        <div className="border max-w-44 mx-auto p-2 rounded-md text-center ">
          <Heading size="lg" className="text-primary_color">
            Pricing Plan
          </Heading>
        </div>
        <Tabs defaultValue="account" className="w-full space-y-14 ">
          <TabsList className="grid w-full md:w-1/2  grid-cols-2   mx-auto ">
            <TabsTrigger value="account">Monthly</TabsTrigger>
            <TabsTrigger value="password">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-full md:w-2/3 mx-auto">
            <div className="border     p-6 rounded-md  space-y-4  ">
              <Heading size="xl" className="text-primary_color  text-center">
                Standard
              </Heading>
              <div className="border rounded-md p-4 ">
                <h1>
                  <sup className="text-sm md:text-lg ">$</sup>{" "}
                  <span className="text-4xl font-bold">250</span>{" "}
                  <sub className="text-sm md:text-sm ">/Per Month</sub>{" "}
                </h1>
                <Heading size="sm" className="text-center">
                  Per Package
                </Heading>
              </div>
              <ul className="flex flex-col justify-start space-y-3">
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={plaimedbadge} />
                  </div>
                  <Heading size="sm"> Claimed Badge</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-5">
                    <ResponsiveImage src={topplacement} />
                  </div>
                  <Heading size="sm">Top Placement</Heading>
                </li>
                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={verifiedIcon} />
                    </div>
                    <Heading size="sm">Verified Badge</Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    1 year
                  </span>
                </li>

                {/* month */}
                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={guaranteedbadge} />
                    </div>
                    <Heading size="sm"> Guaranteed Profile </Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    1 Month
                  </span>
                </li>

                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={brifcaseIcon} />
                  </div>
                  <Heading size="sm"> Job post</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> Job Apply</Heading>
                </li>

                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={clientsmanagement} />
                    </div>
                    <Heading size="sm"> Clients Management </Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    Lifetime
                  </span>
                </li>

                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm">50 reviews invitations</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> Highlighted Business Profile</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> 3 user login</Heading>
                </li>

                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={guaranteedbadge} />
                    </div>
                    <Heading size="sm"> Negative reviews removal </Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    3
                  </span>
                </li>

                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> Priority of Support</Heading>
                </li>
              </ul>

              <div className="flex justify-center">
                <a
                  href="#_"
                  className="relative inline-flex items-center rounded-md justify-center h-10 px-4 py-3 mt-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary_color shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary_color  group-hover:translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-primary_color transition-all duration-300 transform group-hover:translate-x-full ease">
                    Continue
                  </span>
                  <span className="relative invisible text-sm">Continue</span>
                </a>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password" className="w-full md:w-1/2 mx-auto">
            <div className="border     p-6 rounded-md  space-y-4  ">
              <Heading size="xl" className="text-primary_color text-center">
                Standard
              </Heading>
              <div className="border rounded-md p-4 ">
                <h1>
                  <sup className="text-sm md:text-lg ">$</sup>{" "}
                  <span className="text-4xl font-bold">250</span>{" "}
                  <sub className="text-sm md:text-sm ">/Per Month</sub>{" "}
                </h1>
                <Heading size="sm" className="text-center">
                  Per Package
                </Heading>
              </div>
              <ul className="flex flex-col justify-start space-y-3">
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={plaimedbadge} />
                  </div>
                  <Heading size="sm"> Claimed Badge</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-5">
                    <ResponsiveImage src={topplacement} />
                  </div>
                  <Heading size="sm">Top Placement</Heading>
                </li>
                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={verifiedIcon} />
                    </div>
                    <Heading size="sm">Verified Badge</Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    1 year
                  </span>
                </li>

                {/* month */}
                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={guaranteedbadge} />
                    </div>
                    <Heading size="sm"> Guaranteed Profile </Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    1 Month
                  </span>
                </li>

                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={brifcaseIcon} />
                  </div>
                  <Heading size="sm"> Job post</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> Job Apply</Heading>
                </li>

                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={clientsmanagement} />
                    </div>
                    <Heading size="sm"> Clients Management </Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    Lifetime
                  </span>
                </li>

                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm">50 reviews invitations</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> Highlighted Business Profile</Heading>
                </li>
                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> 3 user login</Heading>
                </li>

                <li className="flex items-center gap-4   justify-between ">
                  <div className="flex gap-4 items-center ">
                    <div className="w-6">
                      <ResponsiveImage src={guaranteedbadge} />
                    </div>
                    <Heading size="sm"> Negative reviews removal </Heading>
                  </div>

                  <span className="   bg-primary_color/20 text-primary_color  px-2 rounded-sm text-sm py-[2px]">
                    3
                  </span>
                </li>

                <li className="flex items-center gap-4   ">
                  <div className="w-6">
                    <ResponsiveImage src={tikmark} />
                  </div>
                  <Heading size="sm"> Priority of Support</Heading>
                </li>
              </ul>

              <div className="flex justify-center">
                <a
                  href="#_"
                  className="relative inline-flex items-center rounded-md justify-center h-10 px-4 py-3 mt-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary_color shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary_color  group-hover:translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-primary_color transition-all duration-300 transform group-hover:translate-x-full ease">
                    Continue
                  </span>
                  <span className="relative invisible text-sm">Continue</span>
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
