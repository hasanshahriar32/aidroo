"use client";
import logo from "@/asserts/aidroo-logo.svg";
import Heading from "@/components/Heading";
import CustomInput from "@/components/InputComponent/InputComponent";
import Layout from "@/components/Layout/Layout";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";

export default function Login() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const onSubmit = async (data) => {
    setLoading(true);
    clearErrors();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/");
      }
      console.log(response);
    } catch (error) {
      console.log("error");
      setError("form", {
        type: "manual",
        message: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Login">
      <div className=" border shadow dark:bg-dark p-8   space-y-4 max-w-xl mx-auto  my-10 rounded-lg">
        <form className="  space-y-8 " onSubmit={handleSubmit(onSubmit)}>
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
          <CustomInput
            type="email"
            placeholder="Email"
            icon={MdOutlineMail}
            control={control}
            register={register}
            className="mb-4"
            name="email"
          />
          <CustomInput
            type="password"
            placeholder="Create Password"
            icon={SlLock}
            control={control}
            register={register}
            className="mb-4"
            name="password"
          />

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="w-4 h-4  " required />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Login
            </label>
          </div>
          {errors.form && (
            <p className="text-red-400 bg-red-100 p-2 rounded-md">
              {errors.form.message}
            </p>
          )}
          <Button
            variant="fillButton"
            className="h-10  md:text-xl"
            disbled={loading}
          >
            Login
          </Button>
        </form>
        <div className=" w-full flex flex-col items-center justify-center ">
          <Heading className="text-sm">
            Not signed up?{" "}
            <Link href="/signup" className="  text-primary_color">
              Signup
            </Link>
          </Heading>
        </div>
      </div>
    </Layout>
  );
}
