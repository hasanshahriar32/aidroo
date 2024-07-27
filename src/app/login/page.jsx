"use client";
import logo from "@/asserts/aidroo-logo.svg";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout/Layout";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(email, password),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      if (res.ok) {
        console.log("Yeai!");
      } else {
        console.log("Oops! Something is wrong.");
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
          <div>
            <Input
              type="email"
              placeholder="Email or username"
              className="bg-white dark:bg-gray-800  h-10 "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="bg-white dark:bg-gray-800   h-10  "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="w-4 h-4  " />
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
