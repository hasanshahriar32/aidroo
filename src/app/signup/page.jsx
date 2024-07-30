"use client";
import logo from "@/asserts/aidroo-logo.svg";
import Heading from "@/components/Heading";
import CustomInput2 from "@/components/InputComponent/CustomInput";
import Layout from "@/components/Layout/Layout";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { country, options } from "@/constant";
import { Country } from "country-state-city";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { VscBriefcase } from "react-icons/vsc";

export default function Signup() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout title="signup">
      <div className="px-8">
        <div className=" border shadow dark:bg-dark space-y-4 w-full md:max-w-2xl mx-auto p-4 md:p-8 my-10 rounded-lg">
          <div className=" w-24 md:w-32 mx-auto ">
            <Link href="/">
              <ResponsiveImage
                src={logo}
                alt="aidroo logo image"
                width={500}
                height={300}
              />
            </Link>
          </div>
          <Heading size="xl" className="text-2xl text-center">
            Welcome to Aidroo
          </Heading>

          <Tabs
            defaultValue="personal"
            className="w-full  py-8 place-content-center "
          >
            <TabsList className="grid md:w-2/3 mx-auto grid-cols-2 mb-14 h-12">
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
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput2
                    type="text"
                    name="firstName"
                    placeholder="Enter text"
                    control={control}
                    register={register}
                    className="mb-4"
                  />
                  <CustomInput2
                    type="text"
                    placeholder="Last name"
                    className="mb-4"
                    name="lastName"
                    control={control}
                    register={register}
                  />
                </div>
                <CustomInput2
                  type="text"
                  placeholder="username"
                  icon={LuUser2}
                  control={control}
                  register={register}
                  className="mb-4"
                  name="username"
                />
                <CustomInput2
                  type="email"
                  placeholder="email"
                  icon={MdOutlineMail}
                  control={control}
                  register={register}
                  className="mb-4"
                  name="email"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput2
                    type="password"
                    placeholder="Password"
                    icon={SlLock}
                    control={control}
                    register={register}
                    className="mb-4"
                    name="password"
                  />
                  <CustomInput2
                    type="password"
                    placeholder="Password"
                    icon={SlLock}
                    className="mb-4"
                    name="confirmPassword"
                    control={control}
                    register={register}
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput2
                    type="phone"
                    name="phone"
                    control={control}
                    placeholder="Input Number"
                    onlyCountries={country}
                    className="mb-4"
                  />
                  <CustomInput2
                    type="select"
                    name="country"
                    label="country"
                    control={control}
                    options={countries}
                    className="mb-4"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput2
                    type="text"
                    placeholder="City"
                    className="mb-4"
                    control={control}
                    register={register}
                    name="city"
                  />

                  <CustomInput2
                    type="text"
                    placeholder="State"
                    className="mb-4"
                    name="state"
                    control={control}
                    register={register}
                  />
                </div>
                <div className="flex items-center justify-center pt-2">
                  <Button
                    variant="fillButton"
                    className="h-10  max-w-64 mx-auto"
                  >
                    Sign Up
                  </Button>
                </div>
                <div className=" w-full flex flex-col items-center justify-center ">
                  <Heading className="text-sm">
                    Already have an account?
                    <Link href="/login" className=" text-primary_color">
                      Login
                    </Link>
                  </Heading>
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
                  className="bg-white dark:bg-gray-800   h-10 "
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="username"
                    className="bg-white dark:bg-gray-800   h-10 "
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white dark:bg-gray-800   h-10 "
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
                    className="bg-white dark:bg-gray-800  h-10 "
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-white dark:bg-gray-800   h-10 "
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
                    className="bg-white dark:bg-gray-800   h-10 "
                  />
                  <Input
                    type="text"
                    placeholder="Address"
                    className="bg-white dark:bg-gray-800   h-10 "
                  />
                </div>
                <div className="flex items-center justify-center pt-2">
                  <Button
                    variant="fillButton"
                    className="h-10  max-w-64 mx-auto"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
              <div className=" w-full flex flex-col items-center justify-center ">
                <Heading size="xs">
                  Already have an account?
                  <Link href="/login" className="text-lg text-primary_color">
                    Login
                  </Link>
                </Heading>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
