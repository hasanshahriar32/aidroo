import IconImage from "@/components/IconImage/IconImage";
import Rating from "@/components/Rating/Rating";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import followerIcon from "@/public/icons/follower.svg";
import reportIcon from "@/public/icons/report-icon.svg";
import reviewsIcon from "@/public/icons/reviews.svg";
import varifiedBadgePersional from "@/public/icons/verified-badgey-persional.svg";

import { font14, font16, font18, font18bold } from "@/constant";
import reviewVerifiedIcon from "@/public/icons/reviewverified.svg";
import profileImage from "@/public/images/profile.jpg";
import { AiFillLike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { FaReply } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export default function ReviewCard() {
  return (
    <Card className="">
      <CardHeader className="flex">
        <div className="flex gap-4 items-center mb-2">
          <div>
            <IconImage
              src={profileImage}
              size={70}
              className="rounded-full ring-1 ring-offset-2"
              alt="profile pic"
            />
          </div>
          <div className="">
            <div className="flex gap-6 items-center">
              <h1 className={`${font18bold}`}>Jhon </h1>
              <IconImage src={varifiedBadgePersional} size={16} />
            </div>

            <p className={`${font14} text-gray-500`}>San Fransico, USA </p>
            <span className="flex gap-4">
              <div className="flex gap-2 items-center text-[18px]">
                <IconImage src={followerIcon} size={18} />{" "}
                <span className={`${font14}`}>0</span>
              </div>
              <div className="flex gap-2 items-center text-[18px]">
                <IconImage src={reviewsIcon} size={18} />
                <span className={`${font14}`}>0</span>
              </div>
            </span>
          </div>
        </div>
        <hr className=" w-full  " />
      </CardHeader>
      <CardContent className="  mt-2">
        <div className="flex justify-between gap-4  items-center -mt-10 text-sm">
          <div className="flex gap-1 ms-4">
            <Rating value={4} size={18} />
          </div>
          {/* <p className={`${font12}`}>August 12,2023</p> */}

          <div className="w-24">
            <IconImage
              src={reviewVerifiedIcon}
              alt="verified image"
              size={70}
            />
          </div>
        </div>
        <div className="space-y-1">
          <h1 className={`${font18}`}>I would Highly recommended</h1>
          <p className={`${font16} text-gray-500  `}>
            I had a seamless experience with Panacea. Other companies denied me
            credit due to not providing evidence of income. Other financial
            institutions that are supposedly for medical professionals do not
            understand our process.
          </p>
        </div>
        <div className="flex gap-4 mt-3">
          <IconImage src={profileImage} size={100} alt="review image" />
          <IconImage src={profileImage} size={100} alt="review image" />
        </div>
        <hr className=" w-full  mt-4 " />
      </CardContent>
      <CardFooter>
        <div className=" w-full  flex justify-between  items-center  ">
          <div className="flex gap-2 md:gap-4  ">
            <div className="flex gap-1   items-center border py-[2px] px-1 rounded shadow">
              <AiFillLike />
              <span>0</span>
            </div>
            <div className="flex gap-1 py-[2px] px-1 items-center border   rounded shadow">
              <FcLike />
              <span>0</span>
            </div>
            <div className="flex gap-1   items-center border py-[2px] px-1 rounded shadow">
              <CiShare2 />
              <span>0</span>
            </div>
          </div>
          <div className="flex gap-1 w-8 h-6 items-center text-sm">
            <FaReply className="text-gray-500" />
            <span className="text-sm">Replay</span>
          </div>

          <IconImage src={reportIcon} size={18} />
        </div>
      </CardFooter>
    </Card>
  );
}
