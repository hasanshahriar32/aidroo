"use client";
import logo from "@/asserts/aidroo-logo.svg";
import Heading from "@/components/Heading";
import CustomInput from "@/components/InputComponent/CustomInput";
import Layout from "@/components/Layout/Layout";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";

export default function Login() {
  const { register, handleSubmit, control } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { setCurrentUser } = useAuth();
  const onSubmit = async (data) => {
    // submit the form

    try {
      setLoading(true);
      setError("");
      const response = await axiosInstance.post("/api/auth/login", data);

      if (response?.data.status === 201 || response.data.status === 200) {
        localStorage.setItem("user", JSON.stringify(response?.data?.user));

        setCurrentUser(response?.data.user);
        router.push("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Login">
      <div className=" border shadow dark:bg-dark p-8   space-y-4 max-w-[450px] mx-auto  my-10 rounded-lg">
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
            control={control}
            register={register}
            icon={SlLock}
            className="mb-4"
            placeholder=" password"
            name="password"
          />

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="w-4 h-4  " />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Login
            </label>
          </div>
          {error && (
            <p className="text-red-400 bg-red-100 p-2 rounded-md">{error}</p>
          )}
          <Button
            variant="fillButton"
            className="h-10  md:text-xl"
            disabled={loading}
          >
            Login
          </Button>
        </form>
        <div className=" w-full flex flex-col items-center justify-center ">
          <Link href="/" className="  text-primary_color">
            Forgot Password?
          </Link>
        </div>
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
