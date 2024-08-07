// app/signup/personal/PersonalSignup.js (or .jsx)
"use client";
import Heading from "@/components/Heading";
import CustomInput from "@/components/InputComponent/CustomInput";
import PhoneCountry from "@/components/PhoneNumberInput/PhoneCountry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { countries } from "@/constant";
import { useDebounce } from "@/hooks/useDebaunce";
import apiService from "@/lib/apiService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";

export default function PersonalSignup() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [phone, setPhone] = useState("");
  const [apiError, setApierror] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedUsername = useDebounce(username, 1000);
  const router = useRouter();

  useEffect(() => {
    const fetchuser = async () => {
      const user = await apiService.getData(
        debouncedUsername ? `/api/user?username=${debouncedUsername}` : null
      );
      setUserData(user);
    };
    fetchuser();
  }, [debouncedUsername]);

  const onSubmit = async (data) => {
    data.phoneNumber = phone;
    data.role = "personal";
    data.username = username;
    setLoading(true);
    clearErrors();
    setApierror("");

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
      const response = await apiService.addData("/api/user", validData);

      if (response.status === 201) {
        router.push("/login");
      } else {
        setApierror(response.message || "Something went wrong");
      }
    } catch (error) {
      setApierror("Error occurred during registration try again");
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
          onChange={(e) => setUsername(e.target.value)}
        />
        {username !== "" && !userData?.data?.user && (
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
          className={`mb-4 ${errors.confirmPassword ? " border-red-300" : ""}`}
          name="password"
        />
        <CustomInput
          type="password"
          placeholder="Confirm Password"
          icon={SlLock}
          className={`mb-4 ${errors.confirmPassword ? " border-red-300" : ""}`}
          name="confirmPassword"
          control={control}
          register={register}
        />
      </div>
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
      <CustomInput
        type="text"
        placeholder="State"
        className="mb-4"
        name="zipCode"
        control={control}
        register={register}
      />
      {errors.confirmPassword && (
        <p className="text-red-400">{errors.confirmPassword.message}</p>
      )}
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
        <Heading className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary_color">
            Login
          </Link>
        </Heading>
      </div>
    </form>
  );
}
