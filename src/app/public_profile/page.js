import IconImage from "@/components/IconImage/IconImage";
import Layout from "@/components/Layout/Layout";
import { GoogleMap } from "@/components/Map/Map";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import PublicReview from "@/components/PublicReview/PublicReview";
import Rating from "@/components/Rating/Rating";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import ThumbSlider from "@/components/ThumbSlider/ThumbSlider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { businessOur, options } from "@/constant";
import bagIcon from "@/public/icons/bag.svg";
import ceoIcon from "@/public/icons/ceo.svg";
import claimedIcon from "@/public/icons/claimed.svg";
import claimWithBusiness from "@/public/icons/claimthisbusiness.svg";
import dealonIcon from "@/public/icons/dealon.svg";
import earningIcon from "@/public/icons/usd.svg";
import verifiedIcon from "@/public/icons/verified.svg";
import workerIcon from "@/public/icons/worker.svg";
import google from "@/public/images/google.svg";
import profileImage from "@/public/images/profile.jpg";
import srsoft from "@/public/images/srsoft.svg";
import tesla from "@/public/images/tesla.svg";
import { Label } from "@radix-ui/react-dropdown-menu";

import { BsBagDash } from "react-icons/bs";
import {
  CiCircleChevRight,
  CiCirclePlus,
  CiLocationArrow1,
  CiShare2,
  CiStar,
} from "react-icons/ci";
import { FaImage, FaPlus, FaRegEdit } from "react-icons/fa";
import { LiaSmsSolid } from "react-icons/lia";

export default function PublicProfile() {
  return (
    <Layout title="Public Profile">
      <div className="w-full space-y-6  pb-14 ">
        <div className="w-full bg-[#f5fafc] dark:bg-dark">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid w-full lg:w-2/3  mx-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-8 ">
              <div className=" flex gap-8 px-8 items-center justify-center ">
                <div className="  rounded-lg   w-32 shrink-0  overflow-hidden ">
                  <ResponsiveImage
                    src={profileImage}
                    alt="profile image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex gap-8 items-center">
                    <h1 className="text-xl font-semibold">Safari Biz</h1>
                    <IconImage src={verifiedIcon} size={24} alt="" />
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="text-14  ">
                      <span>Reviews </span>
                      <span>3124</span>
                    </div>

                    <ul className="flex  items-center gap-2">
                      <li className="bg-primary  w-2 h-2 rounded-full border" />
                      <li className=" "> Excellent</li>
                    </ul>
                  </div>
                  <div className="flex gap-x-2 mt-2">
                    <div className="flex gap-1">
                      <Rating isEditable value={5} />
                    </div>
                    <p className="text-14 text-gray-700 font-semibold">4.7</p>
                  </div>
                  <IconImage src={claimedIcon} size={80} alt="claimed image" />
                </div>
              </div>

              <div className="  lg:border-s border-primary  items-center justify-center flex  gap-2 lg:gap-4 px-8">
                <div className="bg-primary_color p-2 rounded-lg text-white flex items-center gap-2">
                  <LiaSmsSolid className="text-xl " /> <span>Chat</span>
                </div>

                <div className="bg-primary_color p-2 rounded-lg text-white flex items-center gap-2">
                  <FaPlus className="text-md " /> <span>Follow</span>
                </div>
                <div className="bg-primary_color p-2 rounded-lg text-white flex items-center gap-2">
                  <CiShare2 className="text-md " /> <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="job"
          className="max-w-[1280px] mx-auto px-8 space-y-6 "
        >
          <TabsList className="grid lg:w-4/6   grid-cols-3 h-12  ">
            <TabsTrigger value="review" className="h-10 flex gap-4 text-xl">
              <CiStar className="text-24   " />
              <span> Reviews</span>
            </TabsTrigger>
            <TabsTrigger value="job" className="h-10 flex gap-4 text-xl">
              <BsBagDash className=" text-24 " />
              <span> Jobs</span>
            </TabsTrigger>
            <TabsTrigger value="more" className="h-10 flex gap-4 text-xl">
              <CiCircleChevRight className=" text-24 " />
              <span> More</span>
            </TabsTrigger>
          </TabsList>
          {/* review  tab content  */}
          <div className=" full  mx-auto grid grid-cols-1   lg:grid-cols-7 gap-8 space-y-6  ">
            <div className=" lg:col-span-5">
              <TabsContent value="review">
                <PublicReview />
              </TabsContent>
              <TabsContent value="job" className="space-y-6">
                <form>
                  <div className="w-full rounded-lg border-2 p-6 flex flex-col space-y-4">
                    <h1 className="text-lg text-primary_color flex items-center gap-4">
                      <FaRegEdit className="text-2xl" /> Post a Job
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                      <label> Job Title</label>
                      <Input type="text" placeholder="Enter your title" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <label placeholder="whirte something for your business">
                        Description
                      </label>
                      <Textarea className="min-h-32" />
                    </div>

                    {/* image */}
                    <div className="flex gap-4 h-32">
                      <div className="dark:ring-offset-slate-700 rounded w-32 shrink-0 overflow-hidden">
                        <ResponsiveImage
                          src={profileImage}
                          alt="profile image"
                          width={500}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="w-32 h-32 border-2 border-dashed rounded-lg place-content-center">
                        <label
                          htmlFor="uploadFile1"
                          className="font-semibold text-base rounded p-1 flex flex-col items-center justify-center cursor-pointer mx-auto font-[sans-serif]"
                        >
                          <CiCirclePlus className="text-6xl text-primary_color" />
                          <input
                            type="file"
                            id="uploadFile1"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-6 text-2xl">
                          <CiLocationArrow1 />
                          <FaImage className="text-red-400" />
                        </div>
                        <div className=" bg-gray-100 p-1 w-fit rounded-md  text-gray-400">
                          #add hashtag to find your job
                        </div>
                      </div>
                    </div>
                    <Button variant="hover" size="lg">
                      Publish
                    </Button>
                  </div>
                </form>
                {/* post job card */}
                <div>
                  <div className="w-full rounded-lg border-2 p-6 flex flex-col space-y-4">
                    <h1 className="text-lg text-primary_color flex items-center gap-4">
                      Looking for sels manager
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-justify text-gray-400 tracking-tight">
                        I had a seamless experience with Panacea. Other
                        companies denied me credit due to not providing evidence
                        of income. Other financial institutions that are
                        supposedly for medical professionals.
                      </p>
                    </div>

                    {/* image */}
                    <div className="flex gap-4 h-32">
                      <div className="dark:ring-offset-slate-700 rounded w-32 shrink-0 overflow-hidden">
                        <ResponsiveImage
                          src={profileImage}
                          alt="profile image"
                          width={500}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="dark:ring-offset-slate-700 rounded w-32 shrink-0 overflow-hidden">
                        <ResponsiveImage
                          src={profileImage}
                          alt="profile image"
                          width={500}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <h1 key={item} className="text-primary_color">
                          #job
                        </h1>
                      ))}
                    </div>

                    <Button
                      variant="hover"
                      size="lg"
                      className="w-1/4 rounded-full text-xl hover:ring-2 ring-primary_color ring-offset-2 animate-in duration-100 hover:zoom-in-50"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
                {/* report this review */}

                <form className="border-2 p-6 rounded-md space-y-4 ">
                  <h1 className="text-xl">Report this review?</h1>
                  <div className="border-2" />
                  <h1 className="text-md mt-8">Please choose a reson</h1>
                  <ul className="ms-4 space-y-1 mt-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Competitors fake review</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Suspicious Review Patterns</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">
                        Offensive or Inappropriate Content
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms"> </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Spam or Advertising</Label>
                    </div>

                    <OptionSelect options={options} className="w-64" />
                  </ul>

                  <div className="flex gap-4 max-w-64 ">
                    <Button variant="hoverButton">Submit</Button>
                    <Button variant="hoverButton">Close</Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="more" className="space-y-8">
                <div className=" border-2 rounded-md p-10 mx-auto  ">
                  <ThumbSlider />
                </div>
                {/* business Our */}
                <h1 className="text-primary_color text-xl text-center pt-10 pb-2">
                  Business Our
                </h1>
                <div className="border-2 rounded-md">
                  {businessOur.map((our) => (
                    <div
                      key={our.day}
                      className="flex    place-content-center justify-between p-4  "
                    >
                      <h1 className="w-24">{our.day}</h1>
                      <div className="flex items-center space-x-2 w-24">
                        <Switch id={our.day} disabled={!our.open} />
                      </div>

                      <span>9.00 AM - 10.00 PM</span>
                    </div>
                  ))}
                </div>

                {/* map */}
                <div className="   h-[440px] w-full p-4 border-2 rounded-md">
                  <GoogleMap
                    showMarker={false}
                    className="h-[400px] w-full rounded-md"
                  />
                </div>
              </TabsContent>{" "}
            </div>
            <div className=" w-full lg:col-span-2 ">
              <div className="w-full  space-y-4  ">
                {/* business name */}
                <div className="border rounded-md shadow p-4 space-y-4 ">
                  <h1 className="text-xl text-center border-b pb-1 ">
                    Business Name
                  </h1>
                  <p className="tracking-tight leading-6   pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque sit neque natus quidem aperiam iste, deleniti,
                    voluptatem doloribus totam quam quaerat molestiae vero
                    sapiente dignissimos minima optio. Repellendus, sunt
                    tempora.
                  </p>
                  <div className="border-2 rounded-md p-8 space-y-4">
                    <div className="flex items-center gap-2">
                      <IconImage src={earningIcon} size={64} alt="dolar icon" />
                      <div className="">
                        <h1 className="text-md text-primary_color">
                          Total Fundings
                        </h1>
                        <p className="text-gray-500">10B - 20B</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconImage
                        src={workerIcon}
                        size={64}
                        alt="worker"
                        className=" "
                      />
                      <div className="">
                        <h1 className="text-md text-primary_color">Worker</h1>
                        <p className="text-gray-500">700+</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* contact */}
                {/* deals on aidroo */}
                <div className="border rounded-md shadow p-4 space-y-6 ">
                  <div className="bg-primary_color/20 text-center flex items-center  gap-2  justify-center rounded-md">
                    <IconImage src={dealonIcon} alt="" />
                    <h1 className="text-xl text-primary_color">
                      Deals on Aidroo
                    </h1>
                  </div>
                  <div className="flex items-center gap-2 px-8">
                    <IconImage src={bagIcon} alt="bag icon" size={64} />
                    <div className="">
                      <h1 className="text-md text-primary_color">
                        Total Posted Job
                      </h1>
                      <p className="text-gray-500">0 Job posted</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-8">
                    <IconImage src={workerIcon} alt="worker icon" size={64} />
                    <div className="">
                      <h1 className="text-md text-primary_color">
                        Total Posted Job
                      </h1>
                      <p className="text-gray-500">2 Hires</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-8">
                    <IconImage
                      src={earningIcon}
                      alt="total spent icon"
                      size={64}
                    />
                    <div className="">
                      <h1 className="text-md text-primary_color">
                        Total Spent
                      </h1>
                      <p className="text-gray-500">1200 $</p>
                    </div>
                  </div>
                  <div className="border" />
                  <div className="flex items-center gap-2 px-8">
                    <IconImage src={ceoIcon} alt="bag icon" size={64} />
                    <div className="">
                      <h1 className="text-md text-primary_color">Work With</h1>
                      <p className="text-gray-500">7 Profile</p>
                    </div>
                  </div>
                </div>

                {/* BUSINESS OUR */}
                <div>
                  <h1 className="text-primary_color text-xl text-center pt-10 pb-2">
                    Business Our
                  </h1>
                  <div className="border-2 rounded-md">
                    {businessOur.map((our) => (
                      <div
                        key={our.day}
                        className="flex    place-content-center justify-between p-4  "
                      >
                        <h1 className="w-10 ">{our.day}</h1>
                        <div className="flex items-center space-x-1 fit">
                          <Switch id={our.day} disabled={!our.open} />
                        </div>

                        <span>9.00 AM -10.00 PM</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* claim business */}
                <div className="border rounded-md p-8 space-y-4">
                  <IconImage src={claimWithBusiness} />
                  <div className="">
                    <h1 className="text-xl text-primary_color ">
                      In this Your Business
                    </h1>
                    <p className="tracking-tighter">
                      Claim listing is the best way to manage and protect your
                      business.
                    </p>
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-center h-12 px-4 py-3 mt-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary_color rounded-full shadow-md group"
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
                        Access your Business
                      </span>
                      <span className="relative invisible">
                        Access your Business
                      </span>
                    </a>
                  </div>
                </div>
                {/* popular listing  */}
                <div className="border rounded-md p-8 space-y-10">
                  <div className="flex gap-4 items-center">
                    <IconImage src={google} size={84} className="rounded-md" />
                    <div className="space-y-1">
                      <div className="flex gap-10">
                        <h1 className="text-xl">Google</h1>
                        <IconImage src={verifiedIcon} size={24} />
                      </div>
                      <h1>Tech Company</h1>
                      <div className="flex gap-1">
                        <Rating value={5} />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <IconImage src={tesla} size={84} className="rounded-md" />
                    <div className="space-y-1">
                      <div className="flex gap-10">
                        <h1 className="text-xl">Tesla</h1>
                        <IconImage src={verifiedIcon} size={24} />
                      </div>
                      <h1>Tech Company</h1>
                      <div className="flex gap-1">
                        <Rating value={5} />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4  items-center">
                    <IconImage src={srsoft} size={84} className="rounded-md" />
                    <div className="space-y-1">
                      <div className="flex gap-10">
                        <h1 className="text-xl">Srsoft</h1>
                        <IconImage src={verifiedIcon} size={24} />
                      </div>
                      <h1>Tech Company</h1>
                      <div className="flex gap-1">
                        <Rating value={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}
