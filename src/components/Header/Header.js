"use client";
import logo from "@/asserts/aidroo-logo.svg";
import filter from "@/asserts/filter.svg";
import humber from "@/asserts/mobile-icons/Hamburger-l1.svg";
import category from "@/asserts/mobile-icons/categories.svg";
import pageIcon from "@/asserts/mobile-icons/page_icon.svg";
import businessIcon from "@/asserts/mobile-icons/pricing-plan.svg";
import helpIcon from "@/asserts/mobile-icons/support.svg";
import search from "@/asserts/search.svg";
import businessCase from "@/public/icons/businessbriefcase.svg";
import messageIcon from "@/public/icons/messages.svg";
import notificationIcon from "@/public/icons/notifications.svg";
import profilePic from "@/public/images/profile.jpg";
import Image from "next/image";

import Link from "next/link";

import { useEffect, useState } from "react";

import { useAuth } from "@/hooks/useAuth.js";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconImage from "../IconImage/IconImage";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { currentUser, login, logout } = useAuth();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    if (window.innerWidth >= 640) {
      setSidebarOpen(false);
    }
  }, [open, setOpen]);

  const inputFieldHowHide = open ? "block" : "hidden";
  return (
    <div className="w-full sticky top-0 z-20">
      <div className="bg-[#002A64]  ">
        {/* desktop view */}
        <div className="hidden lg:block">
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  h-[72px]  items-center justify-center max-w-[1260px] mx-auto ">
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
            <div className="flex   items-center  col-span-2  text-lg text-gray-700  ">
              <form className="flex gap-4">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="bg-white dark:bg-dark h-10 max-w-72 w-[280px]"
                />

                <div
                  className="relative"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  <div className=" flex items-center justify-center     bg-primary_color p-1 rounded-md   cursor-pointer w-[50px] h-11">
                    <Image src={filter} alt="Icon 1" className="w-7 " />
                  </div>
                  {isHovered2 && (
                    <div className="absolute  shadow rounded-md    top-[42px] pt-4 -right-6 ">
                      <div className=" file:selection: z-50  border-2 rounded   p-8 ">
                        <input type="checkbox" />
                        <Button variant="hoverButton">submit</Button>
                      </div>
                    </div>
                  )}
                </div>
                <div className=" flex items-center justify-center  bg-primary_color p-1 rounded-md   cursor-pointer w-[50px] h-11">
                  <Image src={search} alt="Icon 1" className="w-7 " />
                </div>
              </form>
            </div>
            <div className="col-span-2  mr-8 flex justify-end items-center gap-4   ">
              <Button variant="hoverButton" size="lg">
                <div className="absolute -top-2 -right-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </div>

                <span className="relative">Explore Job</span>
              </Button>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative h-11">
                  <a
                    href="#"
                    className="px-4 h-11 py-2   relative rounded group overflow-hidden font-medium bg-[#1E56AD] text-white inline-block"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary_color group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">
                      For Business
                    </span>
                  </a>

                  {isHovered && (
                    <div className="absolute  shadow rounded-md    top-11 pt-4 ">
                      <div className=" file:selection: z-50  border-2 rounded   p-8 ">
                        <input type="checkbox" />
                        <Button variant="hoverButton">submit</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-8 col-span-1/2 items-center   ">
              {!currentUser ? (
                <>
                  <Link href="/login">
                    <Button variant="hover">Login</Button>
                  </Link>
                  <Link href="/signup">
                    <Button variant="hover">Signup</Button>
                  </Link>
                </>
              ) : (
                <>
                  <IconImage src={messageIcon} size={32} alt="message icon" />
                  <IconImage
                    src={notificationIcon}
                    size={28}
                    alt="message icon"
                  />
                  <Popover>
                    <PopoverTrigger>
                      <Avatar>
                        <AvatarImage src={profilePic} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className=" flex flex-col gap-4 mt-5">
                      <Link href="/public_profile">Public Profile</Link>
                      <Link href="/login">login</Link>
                      <Link href="/signup">signup</Link>
                      <Link href="/business_dashboard/business_info">
                        Business Dashboard
                      </Link>
                      <Link href="">Public Profile</Link>
                    </PopoverContent>
                  </Popover>
                </>
              )}
            </div>
          </div>
        </div>

        {/* mobile view */}

        <div className=" w-full  block lg:hidden bg-[#002A64]    space-y-4  z-50">
          {/* sidebar */}

          <Sheet>
            <div className="flex   justify-between  h-24 items-center text-lg  mx-4 max-h-[72px] ">
              <div className=" w-24 ">
                <Link href="/">
                  <ResponsiveImage
                    src={logo}
                    alt="aidroo logo image"
                    width={500}
                    height={300}
                  />
                </Link>
              </div>

              <div className="flex gap-4 items-center ">
                <div className="w-9 h-9 relative bg-[#002A64] rounded-md cursor-pointer p-1">
                  <ResponsiveImage
                    src={search}
                    alt="Icon 1"
                    width={500}
                    height={300}
                    onClick={() => setOpen(!open)}
                  />
                </div>

                <SheetTrigger asChild>
                  <div className="w-8 h-8 relative  ring rounded-md cursor-pointer">
                    <ResponsiveImage
                      src={humber}
                      width={500}
                      height={300}
                      alt="Icon 1"
                    />
                  </div>
                </SheetTrigger>
              </div>
            </div>

            <form
              className={` flex gap-4 ${inputFieldHowHide} justify-center pb-4 transform duration-500`}
            >
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className="bg-white dark:bg-dark"
              />

              <div className=" flex items-center justify-center  bg-primary_color p-1 rounded-md   cursor-pointer w-[3.2rem] ">
                <IconImage src={filter} alt="Icon 1" size={30} />
              </div>
              <div className=" flex items-center justify-center  bg-primary_color p-1 rounded-md   cursor-pointer w-[3.2rem] ">
                <IconImage src={search} alt="Icon 1" size={24} />
              </div>
            </form>
            <SheetContent>
              <SheetHeader className=" w-full flex justify-center items-center h-24 bg-[#002A64]">
                <div className="w-32">
                  <Link href="/">
                    <ResponsiveImage
                      src={logo}
                      alt="aidroo logo image"
                      width={500}
                      height={300}
                    />
                  </Link>
                </div>
              </SheetHeader>
              {/* menu */}

              <Accordion
                type="single"
                collapsible
                className="w-full px-8 space-y-4 mt-4 text-sm"
              >
                <div className="flex justify-center items-center">
                  <Button
                    variant="hover"
                    className="w-1/2 mx-auto ring-2 ring-primary_color ring-offset-2 h-8  md:h-auto lg:h-auto"
                  >
                    {/* <IconImage src={jobHiring} size={24} /> */}
                    <span> Explore Job</span>
                  </Button>
                </div>
                <div className="flex items-center gap-4 border-b pb-4">
                  <IconImage src={businessCase} size={28} alt="icon" />
                  <span>For Business</span>
                </div>
                <div className="flex items-center gap-4 border-b pb-4">
                  <IconImage src={category} size={24} alt="icon" />
                  <span>Categories</span>
                </div>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-4 no-underline  ">
                      <IconImage src={pageIcon} size={24} alt="icon" />
                      <span>Pages</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-10">
                    <ul className="collapse-content space-y-2   ">
                      <li> Terms of service</li>
                      <li> Privacy Policy </li>
                      <li> Events</li>
                      <li>Blogs</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <div className="flex items-center gap-4 border-b pb-4 ">
                  <IconImage src={businessIcon} size={24} alt="icon" />
                  <span className=""> Business Pricing Plan</span>
                </div>
                <div className="flex items-center gap-4 collapse-content border-b pb-4 ">
                  <IconImage src={helpIcon} size={24} alt="icon" />
                  <span> Help and Support</span>
                </div>
                <div className="flex  gap-4  pt-40">
                  <Button
                    variant="hover"
                    className=" w-1/2  mx-auto ring-2 ring-primary_color ring-offset-2 h-8  md:h-auto lg:h-auto"
                  >
                    Login
                  </Button>
                </div>
              </Accordion>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
