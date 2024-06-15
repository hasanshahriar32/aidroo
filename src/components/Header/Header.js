"use client";
import logo from "@/asserts/aidroo-logo.svg";
import filter from "@/asserts/filter.svg";
import search from "@/asserts/search.svg";
import Image from "next/image";

import Link from "next/link";
import Input from "../Input";

import { useState } from "react";
import Button from "../Button";
import IconImage from "../IconImage/IconImage";
export default function Header() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="bg-primary-A200   ">
      {/* desktop view */}
      <div className="hidden lg:block">
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 min-h-20  items-center justify-center max-w-[1260px] mx-auto ">
          {/* logo */}
          <div className=" col-span-1">
            <Link href="/">
              <Image
                src={logo}
                alt="aidroo logo image"
                className="h-10 max-w-[50%] "
              />
            </Link>
          </div>

          {/* searching bar */}
          <div className="flex   items-center  col-span-2  text-lg text-gray-700">
            <form className="flex gap-4">
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className=" gap-2 text-gray-600 font-bold rounded-xl border w-full outline-none"
              />

              <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.7rem] ">
                <IconImage src={filter} alt="Icon 1" size={40} />
              </div>
              <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[4rem] ">
                <IconImage src={search} alt="Icon 1" size={32} />
              </div>
            </form>
          </div>
          <div className="col-span-2 mx-auto">
            <h1 className="text-gray-200 ">Aidroo for Business</h1>
          </div>
          <div className="flex gap-8 col-span-1">
            <Button className=" bg-white  max-w-fit px-4 ">Login</Button>
            <Button className=" bg-white  max-w-fit px-4 ">Signup</Button>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="  block lg:hidden  mx-8 space-y-4">
        <div className="flex w-full   justify-between  min-h-16 items-center text-lg text-gray-700">
          <div className=" ">
            <Link href="/" className=" ">
              <Image
                src={logo}
                alt="aidroo logo image"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex gap-2">
            <Button className=" bg-white  max-w-fit px-4 ">Login</Button>
            <Button className=" bg-white  max-w-fit px-4 ">Signup</Button>
          </div>
        </div>
        <form className="flex gap-4  justify-center">
          <Input
            type="text"
            name="search"
            placeholder="Search"
            className=" gap-2 text-gray-600 font-bold rounded-xl border max-w-96 w-full outline-none"
          />

          <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.2rem] ">
            <IconImage src={filter} alt="Icon 1" size={30} />
          </div>
          <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.2rem] ">
            <IconImage src={search} alt="Icon 1" size={24} />
          </div>
        </form>
        <div className="flex justify-center mx-auto pb-8">
          <h1 className="text-gray-200 ">Aidroo for Business</h1>
        </div>
      </div>
    </div>
  );
}
