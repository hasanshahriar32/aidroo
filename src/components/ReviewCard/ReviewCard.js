import IconImage from "@/components/IconImage/IconImage";
import Rating from "@/components/Rating/Rating";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";

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

import reviewVerifiedIcon from "@/public/icons/reviewverified.svg";
import profileImage from "@/public/images/profile.jpg";
import { AiFillLike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { FaReply } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export default function ReviewCard() {
  return (
    <div className=" space-y-4">
      <Card>
        <CardHeader className="flex">
          <div className="flex gap-4 items-center mb-2">
            <div>
              <IconImage
                src={profileImage}
                size={70}
                className="rounded-full ring-1 ring-offset-2"
                alt="profile
                            pic"
              />
            </div>
            <div className="space-y-2">
              <div className="flex gap-6 items-center">
                <h1 className="text-2xl">Jhon </h1>
                <IconImage src={varifiedBadgePersional} size={24} />
              </div>

              <p>San Fransico, USA </p>
              <span className="flex gap-4">
                <div className="flex gap-2">
                  <IconImage src={followerIcon} size={24} /> <span>0</span>
                </div>
                <div className="flex gap-2">
                  <IconImage src={reviewsIcon} size={24} /> <span>0</span>
                </div>
              </span>
            </div>
          </div>
          <div className=" w-full md:w-64 border" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between  items-center -mt-10">
            <div className="flex gap-2">
              <Rating value={4} />
            </div>
            <p>August 12,2023</p>
            <div className="w-24 ">
              <ResponsiveImage
                src={reviewVerifiedIcon}
                width={500}
                height={300}
                alt="verified image"
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl">I would Highly recommended</h1>
            <p className="text-gray-500 text-md tracking-tight leading-5 mt-2">
              I had a seamless experience with Panacea. Other companies denied
              me credit due to not providing evidence of income. Other financial
              institutions that are supposedly for medical professionals do not
              understand our process.
            </p>
          </div>
          <div className="flex gap-4">
            <IconImage src={profileImage} size={100} alt="review image" />
            <IconImage src={profileImage} size={100} alt="review image" />
          </div>
          <div className=" w-full   border" />
        </CardContent>
        <CardFooter>
          <div className=" w-full flex justify-between items-center">
            <div className="flex gap-10">
              <div className="flex gap-2 items-center">
                <AiFillLike />
                <span>0</span>
              </div>
              <div className="flex gap-2 items-center">
                <FcLike />
                <span>0</span>
              </div>
              <div className="flex gap-2 items-center border p-1 rounded shadow">
                <CiShare2 />
                <span>0</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <FaReply />
              <span>Replay</span>
            </div>

            <IconImage src={reportIcon} size={24} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
