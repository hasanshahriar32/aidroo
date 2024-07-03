import logo from "@/asserts/aidroo-logo.svg";

import Layout from "@/components/Layout/Layout";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { options } from "@/constant";
import Link from "next/link";
import { LuUser2 } from "react-icons/lu";
import { VscBriefcase } from "react-icons/vsc";

export default function Signup() {
  return (
    <Layout title="signup">
      <div className="px-8">
        <div className=" border shadow dark:bg-dark space-y-4 w-full md:max-w-2xl mx-auto p-4 md:p-8 my-10 rounded-lg">
          <div className=" w-32 mx-auto ">
            <Link href="/">
              <ResponsiveImage
                src={logo}
                alt="aidroo logo image"
                width={500}
                height={300}
              />
            </Link>
          </div>
          <h1 className="text-2xl text-center">Welcome to Aidroo</h1>

          <Tabs
            defaultValue="personal"
            className="w-full  py-8 place-content-center "
          >
            <TabsList className="grid w-2/3 mx-auto grid-cols-2 mb-14 h-12">
              <TabsTrigger value="personal" className="flex gap-2 h-10  ">
                <LuUser2 className="text-[22px]" />
                <span> Personal</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="flex gap-2 h-10">
                <VscBriefcase className="text-2xl" />
                <span> Business</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="">
              <form className="space-y-6">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <Input
                  type="text"
                  placeholder=" username"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <Input
                  type="email"
                  placeholder="email"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="password"
                    placeholder="Create Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect label="country" options={options} />
                  <OptionSelect label="country" options={options} />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="City"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Address"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <div className="flex items-center justify-center pt-2">
                  <Button
                    variant="fillButton"
                    className="h-12 max-w-64 mx-auto"
                  >
                    Sign Up
                  </Button>
                </div>
                <div className=" w-full flex flex-col items-center justify-center ">
                  <h1 className="md:text-lg">
                    Already have an account?
                    <Link href="/login" className="text-lg text-primary_color">
                      Login
                    </Link>
                  </h1>
                </div>
              </form>
              {/* <div className=" w-full flex  gap-4 items-center justify-center mt-4 ">
                <h1 className="text-xl">
                  <span className="text-2xl text-primary_color"> Google</span>
                </h1>
                <h1 className="text-xl">
                  <span className="text-2xl text-primary_color"> Facebook</span>
                </h1>
              </div> */}
            </TabsContent>
            <TabsContent value="business">
              <form className="space-y-6">
                <Input
                  type="text"
                  placeholder="Business Name"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="username"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect label="country" options={options} />
                  <OptionSelect label="country" options={options} />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="password"
                    placeholder="Create Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect label="country" options={options} />
                  <OptionSelect label="country" options={options} />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="City"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Address"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <div className="flex items-center justify-center pt-2">
                  <Button
                    variant="fillButton"
                    className="h-12 max-w-64 mx-auto"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
              <div className=" w-full flex flex-col items-center justify-center ">
                <h1 className="md:text-lg">
                  Already have an account?
                  <Link href="/login" className="text-lg text-primary_color">
                    Login
                  </Link>
                </h1>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
