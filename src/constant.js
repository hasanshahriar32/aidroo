import Appliance from "@/asserts/categories-icons/Appliance.svg";
import Artsanddesign from "@/asserts/categories-icons/Artsand-designs.svg";
import Automotive from "@/asserts/categories-icons/Automotive.svg";
import Beauty from "@/asserts/categories-icons/Beauty.svg";
import Education from "@/asserts/categories-icons/Education.svg";
import Technology from "@/asserts/categories-icons/Electronics.svg";
import Entertainment from "@/asserts/categories-icons/Entertainment.svg";
import Finance from "@/asserts/categories-icons/Finance.svg";
import Food from "@/asserts/categories-icons/Food.svg";
import Fitness from "@/asserts/categories-icons/Health.svg";
import insurance from "@/asserts/categories-icons/insurance.svg";
import Jewellery from "@/asserts/categories-icons/Jewellery.svg";
import Law from "@/asserts/categories-icons/Law.svg";
import Medical from "@/asserts/categories-icons/Medical.svg";
import Organisation from "@/asserts/categories-icons/Organisation.svg";
import Pet from "@/asserts/categories-icons/pet.svg";
import RealEstate from "@/asserts/categories-icons/RealEstate.svg";
import Shopping from "@/asserts/categories-icons/Shopping.svg";
import Sports from "@/asserts/categories-icons/Sports.svg";
import TravelsandHotels from "@/asserts/categories-icons/TravelsandHotels.svg";
import applePlay from "@/public/icons/apple.svg";
import googlePlay from "@/public/icons/google.svg";

// TOKEN_SECRET=srikanto
// TOKEN_SECRET_EXPIRE=1d

// DATABASE_URL=mysql://root:password@localhost:3306/db
import {
  crossmark,
  guaranteedbadge,
  plaimedbadge,
  tikmark,
  topplacement,
  verifiedIcon,
} from "./exportImage";

export const categories = [
  { name: "Finance", src: Finance },
  { name: "Real Estate", src: RealEstate },
  { name: "Automotive", src: Automotive },
  { name: "Technology", src: Technology },
  { name: " Medical", src: Medical },
  { name: "Appliance", src: Appliance },

  { name: "Beauty", src: Beauty },
  { name: "Food", src: Food },
  { name: "Fitness", src: Fitness },
  { name: "Law", src: Law },
  { name: "Pet", src: Pet },
  { name: "Shopping", src: Shopping },
  { name: "Education", src: Education },
  { name: "Arts and design", src: Artsanddesign },
  { name: "Entertainment", src: Entertainment },
  { name: "Insurance", src: insurance },
  { name: "Jewelry", src: Jewellery },

  { name: "Organization", src: Organisation },
  { name: "Sports", src: Sports },
  { name: "Travels Hotels", src: TravelsandHotels },

  // { title: "Business", src: categoryIcon13 },
];

export const footerLinks = [
  {
    title: "Company Info",
    links: [
      {
        title: "About Aidroo",
        link: "#",
      },
      {
        title: "Contact Us",
        link: "#",
      },
      {
        title: "Trust & Safety",
        link: "#",
      },
      {
        title: "Terms & Service",
        link: "#",
      },
      {
        title: "Privacy Policy",
        link: "#",
      },
      {
        title: "Our Pricing Plan",
        link: "#",
      },
      {
        title: "Our Pricing Plan",
        link: "#",
      },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      {
        title: "Join Aidrooo",

        link: "#",
      },
      {
        title: "Aidroo Blogs",
        link: "#",
      },
      {
        title: "Events",
        link: "#",
      },
      {
        title: "Contacts Guidlines",
        link: "#",
      },
      {
        title: "Support",
        link: "#",
      },
      {
        title: "Manage Cookies",
        link: "#",
      },
    ],
  },
  {
    title: "Aidroo for Business",
    links: [
      {
        title: "Business Login",

        link: "#",
      },
      {
        title: "Claim your Business Profile",
        link: "#",
      },
      {
        title: "Ads on Aidroo",
        link: "#",
      },
      {
        title: "Profile Guidlines",
        link: "#",
      },
      {
        title: "Business Support",
        link: "#",
      },
      {
        title: "Business Blogs",
        link: "#",
      },
    ],
  },
  {
    title: "Aidroo for Mobile",
    links: [
      {
        title: "Download the Aidroo app to manage your business",

        link: "#",
      },
      {
        image: " ",
        link: "#",
      },
    ],
  },
];

export const businessOur = [
  {
    day: "Sat",
    time: " 9.00 AM - 10.00 PM",
    open: false,
  },
  {
    day: "Sun",
    time: " 9.00 AM - 10.00 PM",
    open: true,
  },
  {
    day: "Mon",
    time: " 9.00 AM - 10.00 PM",
    open: true,
  },
  {
    day: "Tues",
    time: " 9.00 AM - 10.00 PM",
    open: true,
  },
  {
    day: "Wed",
    time: " 9.00 AM - 10.00 PM",
    open: true,
  },
  {
    day: "Thur",
    time: " 9.00 AM - 10.00 PM",
    open: true,
  },
  {
    day: "Fri",
    time: " 9.00 AM - 10.00 PM",
    open: false,
  },
];
export const faqContent = [
  {
    title: "Satur",

    description: " 9.00 AM - 10.00 PM",
  },
  {
    title: "Sun",
    description: " 9.00 AM - 10.00 PM",
    open: true,
  },
  {
    title: "Mon",
    description: " 9.00 AM - 10.00 PM",
  },
  {
    title: "Tues",
    description: " 9.00 AM - 10.00 PM",
  },
  {
    title: "Wednes",
    description: " 9.00 AM - 10.00 PM",
  },
  {
    title: "Thurs",
    description: " 9.00 AM - 10.00 PM",
  },
  {
    title: "Fri",
    description: " 9.00 AM - 10.00 PM",
  },
];
export const businessSidebarOptions = [
  {
    name: "Business info",
    href: "/business_dashboard/business_info",
  },

  {
    name: "Timeline",
    href: "/business_dashboard/schedule",
  },
  {
    name: "Security",
    href: "/business_dashboard/security",
  },
  {
    name: "Business Plan",
    href: "/business_dashboard/business_plan",
  },
];
export const adminDashboardSidebarLinks = [
  {
    name: "Categories",
    href: "/admin_dashboard/categories",
  },

  {
    name: "Business Profile",
    href: "/admin_dashboard/business_profile",
  },
  {
    name: "Personal Profile",
    href: "/admin_dashboard/personal_profile",
  },
  {
    name: "Review",
    href: "/admin_dashboard/reviews",
  },
];

export const scheduleOptions = [
  {
    value: "09.00 Am",
    label: "09.00 Am",
  },
  {
    value: "10.00 Am",
    label: "10.00 Am",
  },
  {
    value: "11.00 Am",
    label: "11.00 Am",
  },

  {
    value: "12.00 Pm",
    label: "12.00 Pm",
  },
  {
    value: "01.00 Pm",
    label: "01.00 Pm",
  },
  {
    value: "02.00 Pm",
    label: "02.00 Pm",
  },
  {
    value: "03.00 Pm",
    label: "03.00 Pm",
  },
  {
    value: "04.00 Pm",
    label: "04.00 Pm",
  },
  {
    value: "05.00 Pm",
    label: "05.00 Pm",
  },
  {
    value: "06.00 Pm",
    label: "06.00 Pm",
  },
  {
    value: "07.00 Pm",
    label: "07.00 Pm",
  },
  {
    value: "08.00 Pm",
    label: "08.00 Pm",
  },
];
export const options = [
  {
    value: "09.00 Am",
    label: "09.00 Am",
  },
  {
    value: "10.00 Am",
    label: "10.00 Am",
  },
  {
    value: "11.00 Am",
    label: "11.00 Am",
  },

  {
    value: "12.00 Pm",
    label: "12.00 Pm",
  },
  {
    value: "01.00 Pm",
    label: "01.00 Pm",
  },
  {
    value: "02.00 Pm",
    label: "02.00 Pm",
  },
  {
    value: "03.00 Pm",
    label: "03.00 Pm",
  },
  {
    value: "04.00 Pm",
    label: "04.00 Pm",
  },
  {
    value: "05.00 Pm",
    label: "05.00 Pm",
  },
  {
    value: "06.00 Pm",
    label: "06.00 Pm",
  },
  {
    value: "07.00 Pm",
    label: "07.00 Pm",
  },
  {
    value: "08.00 Pm",
    label: "08.00 Pm",
  },
];
export const country = [
  "at", // Austria
  "au", // Australia
  "bd", // Bangladesh
  "be", // Belgium
  "ca", // Canada
  "dk", // Denmark
  "ee", // Estonia
  "fi", // Finland
  "fr", // France
  "de", // Germany
  "in", // India
  "lu", // Luxembourg
  "mx", // Mexico
  "nl", // Netherlands
  "sa", // Saudi Arabia
  "es", // Spain
  "se", // Sweden
  "ch", // Switzerland
  "tr", // Turkey
  "us", // United States
  "gb", // United Kingdom
];

export const countries = [
  { name: "Austria", code: "AT", phone: 43 },
  { name: "Australia", code: "AU", phone: 61 },
  { name: "Bangladesh", code: "BD", phone: 880 },
  { name: "Belgium", code: "BE", phone: 32 },
  { name: "Canada", code: "CA", phone: 1 },
  { name: "Denmark", code: "DK", phone: 45 },
  { name: "Estonia", code: "EE", phone: 372 },
  { name: "Finland", code: "FI", phone: 358 },
  { name: "France", code: "FR", phone: 33 },
  { name: "Germany", code: "DE", phone: 49 },
  { name: "India", code: "IN", phone: 91 },
  { name: "Luxembourg", code: "LU", phone: 352 },
  { name: "Mexico", code: "MX", phone: 52 },
  { name: "Netherlands", code: "NL", phone: 31 },
  { name: "Saudi Arabia", code: "SA", phone: 966 },
  { name: "Spain", code: "ES", phone: 34 },
  { name: "Sweden", code: "SE", phone: 46 },
  { name: "Switzerland", code: "CH", phone: 41 },
  { name: "Turkey", code: "TR", phone: 90 },
  { name: "United States", code: "US", phone: 1 },
  { name: "United Kingdom", code: "GB", phone: 44 },
];

export const priceplan = [
  {
    title: "Claimed Badge",
    image: plaimedbadge,
  },
  {
    title: "Top Placement",
    image: topplacement,
  },
  {
    title: "Verified Badge",
    image: verifiedIcon,
  },
  {
    title: "Guaranteed Badge",
    image: guaranteedbadge,
  },
  {
    title: "Featured ",
    image: crossmark,
  },
  {
    title: "50 reviews   Invitation",
    image: tikmark,
  },
  {
    title: "Claimed Badge",
    image: tikmark,
  },
];

export const font18bold = "text-[20px]  font-semibold";
export const font18 = "text-[18px]";
export const font16 = "text-[16px] ";
export const font14 = "text-[14px] ";
export const font12 = "text-[12px] ";

export { applePlay, googlePlay };
