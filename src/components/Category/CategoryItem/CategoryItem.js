import circle from "@/asserts/categories-icons/Circle.svg";
import Image from "next/image";
import Link from "next/link";

export default function CategoryItem({ category }) {
  return (
    <div className="flex flex-wrap   ">
      <div className="container  ">
        <Link className="card    shadow-md" href="#">
          <div className="relative flex justify-center   top-[10%]">
            <Image
              src={circle}
              width={145}
              height={120}
              alt="Category icon"
              className="flex mx-auto hover:opacity-15 "
            />
            <div className="absolute top-[17%] flex flex-col justify-center items-center">
              <Image
                src={category}
                width={55}
                height={40}
                alt="Category icon"
                className=" p-2   "
              />
              <h1>Finance</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
{
  /* <ResponsiveImage
            src={category}
            width={1920}
            height={1080}
            alt="Category icon"
          /> */
}
