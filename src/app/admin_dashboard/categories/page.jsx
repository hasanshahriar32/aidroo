import OptionSelect from "@/components/OptionSelect/OptionSelect";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { options } from "@/constant";

export default function Categories() {
  return (
    <div className=" ">
      {/* category */}
      <div className="grid grid-cols-2 gap-10 border  rounded-lg p-10">
        <div className="space-y-6  w-64">
          <Input
            type="text"
            placeholder="Type category name"
            className="h-12"
          />
          <Button variant="hover" size="lg">
            Create
          </Button>
        </div>
        <div className="space-y-4  w-full">
          <div className="border  p-4 rounded-md">
            <h1 className="text-primary_color  text-xl font-semibold">
              Category List
            </h1>
          </div>

          <ul className="ms-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item}>Resturant </li>
            ))}
          </ul>
          <PaginationComponent />
        </div>
      </div>
      {/* sub category */}
      <div className="grid grid-cols-2 gap-10 border  rounded-lg p-10">
        <div className="space-y-6  w-64">
          <Input
            type="text"
            placeholder="Type sub category name"
            className="h-12"
          />
          <OptionSelect options={options} label="Sub category" />
          <Button variant="hover" size="lg">
            Create
          </Button>
        </div>
        <div className="space-y-4  w-full">
          <div className="border  p-4 rounded-md">
            <h1 className="text-primary_color  text-xl font-semibold">
              Category List
            </h1>
          </div>

          <ul className="ms-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item}>Resturant </li>
            ))}
          </ul>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
}
