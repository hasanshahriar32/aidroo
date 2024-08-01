// pages/signup/business.js
"use client";
import Heading from "@/components/Heading";
import CustomInput from "@/components/InputComponent/CustomInput";
import PhoneCountry from "@/components/PhoneNumberInput/PhoneCountry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, countries } from "@/constant";
import useDebounce from "@/hooks/useDebaunce";
import { axiosInstance } from "@/lib/axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
export default function BusinessSignup() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 1000);

  useEffect(() => {
    if (debouncedUsername) {
      const checkUsername = async () => {
        try {
          const response = await axiosInstance.get(
            `user/single-user?username=${debouncedUsername}`
          );
          if (response.data.exists) {
            setError("username", {
              type: "manual",
              message: "Username is not available",
            });
          } else {
            clearErrors("username");
          }
        } catch (error) {
          setError("username", {
            type: "manual",
            message: "Error checking username",
          });
        }
      };
      checkUsername();
    }
  }, [debouncedUsername, clearErrors, setError]);

  const onSubmit = async (data) => {
    setLoading(true);
    clearErrors();

    data.phoneNumber = phone;
    data.role = "business";
    data.username = username;
    data.businessType = "IT";

    const { confirmPassword, ...validData } = data;
    if (data.password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      setLoading(false);
      return;
    }

    try {
      const user = await axiosInstance.post("auth/register", validData);
      if (user) {
        redirect("/");
      }
    } catch (error) {
      setError("form", {
        type: "manual",
        message: error.response?.data?.message || "Something went wrong!",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        placeholder="Business Name"
        type="text"
        control={control}
        register={register}
        className="mb-4"
        name="businessName"
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`w-full flex items-center border gap-2 h-10 rounded-sm overflow-hidden `}
        >
          <LuUser2 className="text-2xl bg-gray-200 h-10 p-[10px] w-14 rounded-r-sm" />

          <Input
            type="text"
            placeholder="username"
            className="bg-white dark:bg-gray-800 border-none focus-visible:ring-0 flex-grow"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          {!errors.username && username !== "" && (
            <BsCheckCircleFill className="text-primary_color text-2xl mr-2" />
          )}
        </div>
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
      {errors.confirmPassword && (
        <p className="text-red-400 bg-red-100 p-1 rounded-md -mt-6">
          {errors.confirmPassword.message}
        </p>
      )}
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
      {errors.form && (
        <p className="text-red-400 bg-red-100 p-2 rounded-md">
          {errors.form.message}
        </p>
      )}

      {loading && <p>Loading...</p>}
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
  );
}
