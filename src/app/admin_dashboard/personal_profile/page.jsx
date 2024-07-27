import PaginationComponent from "@/components/Pagination/PaginationComponent";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WriteReview from "@/components/WriteReview/WriteReview";
import { search } from "@/exportImage";
import Image from "next/image";
// function shortenString(str, maxLength) {
//   if (str.length > maxLength) {
//     return str.slice(0, maxLength - 3) + "...";
//   }
//   return str;
// }

// let str =
//   "Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur";
export default function PersonalProfile() {
  return (
    <div className="  rounded-lg  space-y-6">
      <div className=" flex flex-col justify-center items-center space-y-8  ">
        <div className=" border flex overflow-hidden h-14 p-1 rounded-md w-96 ">
          <input
            type="text"
            placeholder="Search your business"
            className="h-12 focus:outline-none  px-4 w-full "
          />
          <Image
            src={search}
            width={500}
            height={300}
            className="bg-primary_color w-[42px] p-2 rounded-md"
            alt=""
          />
        </div>

        <div className="w-[450px] lg:w-[800px] overflow-hidden   overflow-x-auto space-y-6">
          <Table className="w-[790px]  ">
            <TableHeader className="w-fit h-14 ">
              <TableRow>
                <TableHead className="w-fit text-sm"> Profile Name </TableHead>
                <TableHead className="text-sm">Country</TableHead>

                <TableHead className="text-sm">Status</TableHead>
                <TableHead className="text-sm">Hiring</TableHead>
                <TableHead className="text-sm">Varified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium max-w-44">
                  Microsoft comapany ,Microsoft comapany
                </TableCell>
                <TableCell className="max-w-44 overflow-auto">
                  Bangladesh
                </TableCell>

                <TableCell className=" ">
                  <div className="flex flex-col gap-4">
                    <Badge>Approved</Badge>
                    <Badge>Delete</Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div>
                    <h1>Total Hires :5</h1>
                    <h1>Active : 2</h1>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Checkbox className="h-6 w-6" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <PaginationComponent />
          {/* write review and create user */}
          <WriteReview />
        </div>
      </div>
    </div>
  );
}
