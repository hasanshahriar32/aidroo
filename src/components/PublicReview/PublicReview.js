import IconImage from "@/components/IconImage/IconImage";
import Rating from "@/components/Rating/Rating";

import { Progress } from "@/components/ui/progress";

import { options } from "@/constant";
import topplacementBadge from "@/public/icons/topplacement.svg";
import OptionSelect from "../OptionSelect/OptionSelect";
import PaginationComponent from "../Pagination/PaginationComponent";
import ReviewCard from "../ReviewCard/ReviewCard";
import WriteReview from "../WriteReview/WriteReview";
export default function PublicReview() {
  return (
    <div className="col-span-1 space-y-6">
      {/* write review  */}
      <WriteReview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 rounded-md p-4">
        <div className="flex flex-col justify-center items-center space-y-2">
          <IconImage src={topplacementBadge} size={70} alt="image" />
          <h1>Overall Rating</h1>
          <div className="flex gap-1">
            <Rating value={4} />
          </div>
          <h1>
            <span>200</span> Reviews
          </h1>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].reverse().map((index) => (
            <div key={index} className="flex gap-8 items-center">
              <h1 className="text-xl">{index} Stars</h1>
              <Progress value={index * 20} className="w-[60%] " />
            </div>
          ))}
        </div>
      </div>
      {/* filter */}
      <div className="flex justify-between px-4 gap-8">
        <OptionSelect label="country" options={options} />
        <OptionSelect label="country" options={options} />
      </div>
      {/* reviews card */}
      <ReviewCard />
      <PaginationComponent />
    </div>
  );
}
