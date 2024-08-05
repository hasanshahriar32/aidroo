"use client";
import IconImage from "@/components/IconImage/IconImage";
import CustomInput from "@/components/InputComponent/CustomInput";
import PhoneCountry from "@/components/PhoneNumberInput/PhoneCountry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, countries } from "@/constant";
import { category } from "@/exportImage";
import { useDebounce } from "@/hooks/useDebaunce";
import apiService from "@/lib/apiService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";

export default function BusinessPage() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [phone, setPhone] = useState("");
  const [apiError, setApiError] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedUsername = useDebounce(username, 500);
  const router = useRouter();

  useEffect(() => {
    const fetchuser = async () => {
      const user = await apiService.getData(
        debouncedUsername ? `/api/user?username=${debouncedUsername}` : ""
      );
      setUserData(user);
    };
    fetchuser();
  }, [debouncedUsername]);

  const onSubmit = async (data) => {
    clearErrors();
    setApiError("");
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
      const response = await apiService.addData("/api/user", validData);

      if (response.status === 201) {
        router.push("/");
      } else {
        setApiError(response.message || "Something went wrong");
      }
    } catch (error) {
      setApiError("Error occurred during registration try again");
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
          <LuUser2 className="text-2xl bg-gray-100 h-10 p-[10px] w-14 rounded-r-sm" />

          <Input
            type="text"
            placeholder="username"
            className="bg-white dark:bg-gray-800 border-none focus-visible:ring-0 flex-grow"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          {username !== "" && !userData?.user && (
            <BsCheckCircleFill className="text-primary_color text-2xl mr-2" />
          )}
        </div>
        <CustomInput
          type="email"
          control={control}
          register={register}
          className="mb-4"
          icon={MdOutlineMail}
          placeholder="Email"
          name="email"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center border rounded-md ">
          <div className="text-2xl bg-gray-100 h-10 p-[10px] w-14 rounded-r-sm flex items-center justify-center">
            <IconImage src={category} size={24} alt="icon" />
          </div>
          <CustomInput
            type="select"
            name="category"
            placeholder="Select your language"
            control={control}
            register={register}
            options={categories}
            className="border"
            label="Category"
          />
        </div>
        <div className="flex items-center border rounded-md ">
          <div className="text-2xl bg-gray-100 h-10 p-[10px] w-14 rounded-r-sm flex items-center justify-center">
            <IconImage src={category} size={24} alt="icon" />
          </div>
          <CustomInput
            type="select"
            name="subcategory"
            placeholder="Select your category"
            control={control}
            register={register}
            options={categories}
            className="border-none"
            label=" Sub category"
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomInput
          type="password"
          control={control}
          register={register}
          icon={SlLock}
          className={`mb-4 ${errors.confirmPassword ? " border-red-300" : ""}`}
          placeholder="Create password"
          name="password"
        />
        <CustomInput
          type="password"
          control={control}
          register={register}
          icon={SlLock}
          className={`mb-4 ${errors.confirmPassword ? " border-red-300" : ""}`}
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
      <CustomInput
        type="text"
        control={control}
        register={register}
        className="mb-4"
        placeholder="State"
        name="zipCode"
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
          className="h-10  max-w-64 mx-auto"
          disabled={loading}
        >
          Sign Up
        </Button>
      </div>
      <div className=" w-full flex flex-col items-center justify-center ">
        <p className="text-sm">
          Already have an account?
          <Link href="/login" className=" text-primary_color">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
