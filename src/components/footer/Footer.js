"use client";
import logo from "@/asserts/aidroo-logo.svg";
import { footerLinks } from "@/constant";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconImage from "../IconImage/IconImage";
import { ThemeToggle } from "../ThemeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Footer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Ensure this code only runs on the client
    const updateFooter = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 640) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }
    };

    updateFooter();
    window.addEventListener("resize", updateFooter);

    return () => {
      window.removeEventListener("resize", updateFooter);
    };
  }, []);

  return (
    <div className="patenBackgroundImage h-fit pt-14 bg-[#f3fcff] dark:bg-dark">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {footerLinks.length > 0 &&
            footerLinks.map((footerLink, index) => (
              <div key={index} className="flex flex-col">
                {open ? (
                  <>
                    <h1 className="text-xl font-bold pb-2">
                      {footerLink.title}
                    </h1>
                    {footerLink.links.length > 0 && (
                      <ul className=" ">
                        {footerLink.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.title ? (
                              <Link
                                href={link.link}
                                className="hover:text-blue-500 text-sm"
                              >
                                {link.title}
                              </Link>
                            ) : link.image ? (
                              <Image
                                src={link.image}
                                width={150}
                                height={75}
                                alt={link.image}
                                className="mt-4"
                              />
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full px-8 space-y-2 mt-4"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-4 no-underline text-lg ">
                          {footerLink.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        {footerLink.links.length > 0 && (
                          <ul className=" space-y-2">
                            {footerLink.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                {link.title ? (
                                  <Link href={link.link} className="  text-sm">
                                    {link.title}
                                  </Link>
                                ) : link.image ? (
                                  <Image
                                    src={link.image}
                                    width={150}
                                    height={75}
                                    alt={link.image}
                                    className="mt-4"
                                  />
                                ) : null}
                              </li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className=" flex-col md:flex items-center   max-w-[1280px] mx-auto px-8  ">
        <IconImage
          src={logo}
          size={84}
          alt="aidroo logo"
          className="ms-32 md:ms-0 "
        />
        <ThemeToggle />
        <p className="font-semibold text-center">
          `Copyrights Allrights Reserved `
          <span className="text-secondary-A100"> Aidroo</span> 2023-2024
        </p>
      </div>
    </div>
  );
}
