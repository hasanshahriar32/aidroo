"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

import CustomInput from "@/components/InputComponent/CustomInput";
import PhoneCountry from "@/components/PhoneNumberInput/PhoneCountry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsCheckCircleFill } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import Link from "next/link";
import { countries } from "@/constant";
import { useDebounce } from "@/hooks/useDebaunce";

export default function PersonalSignup({ initialUsers }) {
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
  const [apiError, setApierror] = useState("");
  const debouncedUsername = useDebounce(username, 500);
  const router = useRouter();

  // check username is exit and mounted
  useEffect(() => {
    if (debouncedUsername) {
      const userExists = initialUsers?.some(
        (user) => user.username === debouncedUsername
      );

      // If user exists, display error message and clear previous error
      if (userExists) {
        setError("username", {
          type: "manual",
          message: "Username is not available",
        });
      } else {
        clearErrors("username");
      }
    }
  }, [debouncedUsername, clearErrors, initialUsers, setError]);

  const onSubmit = async (data) => {
    data.phoneNumber = phone;
    data.role = "personal";
    data.username = username;

    const { confirmPassword, ...validData } = data;
    if (data.password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      clearErrors();
      setLoading(true);
      setApierror("");
      const response = await axios.post("/api/user", validData);
      if (response.status === 201) {
        router.push("/");
      } else {
        setApierror(response.data.message || "Something went wrong");
      }
    } catch (error) {
      setApierror("Error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div className="w-full flex items-center border gap-2 h-10 rounded-sm overflow-hidden">
        <LuUser2 className="text-2xl bg-gray-100 h-10 p-[10px] w-14 rounded-r-sm" />
        <Input
          type="text"
          placeholder="Username"
          className="bg-white dark:bg-gray-800 border-none focus-visible:ring-0 flex-grow"
          required
          {...register("username", {
            onChange: (e) => setUsername(e.target.value),
          })}
        />
        {username !== "" && !errors.username && (
          <BsCheckCircleFill className="text-primary_color text-2xl mr-2" />
        )}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomInput
          type="password"
          placeholder="Create Password"
          icon={SlLock}
          control={control}
          register={register}
          name="password"
        />
        <CustomInput
          type="password"
          placeholder="Confirm Password"
          icon={SlLock}
          className="mb-4"
          name="confirmPassword"
          control={control}
          register={register}
        />
      </div>
      {errors.confirmPassword && (
        <p className="text-red-400">{errors.confirmPassword.message}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PhoneCountry setPhone={setPhone} />
        <CustomInput
          type="select"
          name="country"
          placeholder="Select your country"
          control={control}
          register={register}
          options={countries}
          className="border"
          label="Country"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      {apiError && (
        <p className="text-red-400 bg-red-100 p-2 rounded-md">{apiError}</p>
      )}
      <div className="flex items-center justify-center pt-2">
        <Button
          variant="fillButton"
          className="h-10 max-w-64 mx-auto"
          disabled={loading}
        >
          Sign Up
        </Button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary_color">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
