"use client";
import logo from "@/asserts/aidroo-logo.svg";
import Heading from "@/components/Heading";
import CustomInput from "@/components/InputComponent/InputComponent";
import Layout from "@/components/Layout/Layout";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { SlLock } from "react-icons/sl";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      if (res.ok) {
        console.log("Yeai!", res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Login">
      <div className=" border shadow dark:bg-dark p-8   space-y-4 max-w-xl mx-auto  my-10 rounded-lg">
        <form className="  space-y-8 " onSubmit={handleSubmit}>
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
            icon={LuUser2}
            className="mb-4"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <CustomInput
            type="password"
            placeholder="Password"
            icon={SlLock}
            className="mb-4"
            value={formData.password}
            onChange={handleChange}
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
          <Button variant="fillButton" className="h-10  md:text-xl">
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
