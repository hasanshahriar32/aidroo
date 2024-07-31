"use client";
import logo from "@/asserts/aidroo-logo.svg";
import Heading from "@/components/Heading";
import CustomInput from "@/components/InputComponent/CustomInput";
import Layout from "@/components/Layout/Layout";
import PhoneCountry from "@/components/PhoneNumberInput/PhoneCountry";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, countries } from "@/constant";
import { axiosInstance } from "@/lib/axios";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { VscBriefcase } from "react-icons/vsc";

export default function Signup() {
  const { register, handleSubmit, control } = useForm();

  const [phone, setPhone] = useState();
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const personProfileSubmit = async (data) => {
    data.phoneNumber = phone;
    data.role = "personal";
    data.dob = "10/2/2010";
    data.gender = "Male";

    data.postalCode = "5120";

    const { confirmPassword, ...validData } = data;
    if (data?.password !== data?.confirmPassword) {
      setError(" create password & confirm passwords do not match");
    } else {
      setError("");
    }

    // save the data in the database
    try {
      setLoading(true);

      console.log(validData);
      const result = await axiosInstance.post("/auth/register", validData);
      setData(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const businessProfileSubmit = async (data) => {
    data.phone = phone;
    if (data?.password !== data?.confirmPassword) {
      setError2(" create password & confirm passwords do not match");
    } else {
      setError2("");
    }
    const { confirmPassword, ...validData } = data;

    //save the  user data database
    // save the data in the database
    try {
      const result = await axiosInstance.post("/auth/register", validData);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout title="signup">
      <div className="px-8 z-10">
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
              <form
                className="space-y-6"
                onSubmit={handleSubmit(personProfileSubmit)}
              >
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    control={control}
                    register={register}
                    className="mb-4"
                  />
                  <CustomInput
                    type="text"
                    placeholder="Last name"
                    className="mb-4"
                    name="lastName"
                    control={control}
                    register={register}
                  />
                </div>
                <CustomInput
                  placeholder="username"
                  type="text"
                  icon={LuUser2}
                  control={control}
                  register={register}
                  className="mb-4"
                  name="username"
                />
                <CustomInput
                  type="email"
                  placeholder="email"
                  icon={MdOutlineMail}
                  control={control}
                  register={register}
                  className="mb-4"
                  name="email"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="password"
                    placeholder="Create Password"
                    icon={SlLock}
                    control={control}
                    register={register}
                    className="mb-4"
                    name="password"
                  />
                  <CustomInput
                    type="password"
                    placeholder=" Confirm Password"
                    icon={SlLock}
                    className="mb-4"
                    name="confirmPassword"
                    control={control}
                    register={register}
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PhoneCountry setPhone={setPhone} />

                  <CustomInput
                    type="select"
                    name="country"
                    placeholder="Select your language"
                    control={control}
                    register={register}
                    options={countries}
                    label="Chose country"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="text"
                    placeholder="City"
                    className="mb-4"
                    control={control}
                    register={register}
                    name="city"
                  />

                  <CustomInput
                    type="text"
                    placeholder="State"
                    className="mb-4"
                    name="state"
                    control={control}
                    register={register}
                  />
                </div>
                {error && (
                  <p className="text-red-400  bg-red-100 p-2 rounded-md">
                    {error}
                  </p>
                )}

                {loading && <p>loading......</p>}
                <div className="flex items-center justify-center pt-2">
                  <Button
                    disabled={loading}
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
              <form
                className="space-y-6"
                onSubmit={handleSubmit(businessProfileSubmit)}
              >
                <CustomInput
                  placeholder="Business Name"
                  type="text"
                  control={control}
                  register={register}
                  className="mb-4"
                  name="businessName"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    placeholder="username"
                    type="text"
                    control={control}
                    register={register}
                    className="mb-4"
                    name="username"
                  />
                  <CustomInput
                    type="email"
                    control={control}
                    register={register}
                    className="mb-4"
                    placeholder="email"
                    name="email"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="select"
                    name="category"
                    placeholder="Select your language"
                    control={control}
                    register={register}
                    options={categories}
                    label="Chose Category"
                  />
                  <CustomInput
                    type="select"
                    name="subcategory"
                    placeholder="Select your language"
                    control={control}
                    register={register}
                    options={categories}
                    label="Chose Subcategory"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="password"
                    control={control}
                    register={register}
                    className="mb-4"
                    placeholder="Create password"
                    name="password"
                  />
                  <CustomInput
                    type="password"
                    control={control}
                    register={register}
                    className="mb-4"
                    placeholder="Confirm password"
                    name="confirmPassword"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PhoneCountry setPhone={setPhone} />
                  <CustomInput
                    type="select"
                    name="country"
                    placeholder="Select your language"
                    control={control}
                    register={register}
                    options={countries}
                    label="Chose country"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    type="text"
                    control={control}
                    register={register}
                    className="mb-4"
                    placeholder="City"
                    name="city"
                  />
                  <CustomInput
                    type="text"
                    control={control}
                    register={register}
                    className="mb-4"
                    placeholder="State"
                    name="state"
                  />
                </div>
                {error2 && (
                  <p className="text-red-400  bg-red-100 p-2 rounded-md">
                    {error2}
                  </p>
                )}
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
