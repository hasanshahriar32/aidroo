import OptionSelect from "@/components/OptionSelect/OptionSelect";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import IconImage from "@/components/IconImage/IconImage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { options } from "@/constant";
import { profilePic, search } from "@/exportImage";
import Image from "next/image";

export default function Business_plan() {
  return (
    <div className="  rounded-lg  space-y-6">
      <div className=" flex flex-col justify-center items-center space-y-8  ">
        <div className="border  p-4 rounded-md  w-fit  ">
          <Dialog>
            <DialogTrigger asChild>
              <h1 className="text-primary_color  text-xl font-semibold cursor-pointer">
                Create a Business Profile
              </h1>
            </DialogTrigger>

            <DialogContent className="  sm:h-2/3 overflow-hidden overflow-y-auto ">
              <DialogHeader>
                <div className="flex items-center justify-star gap-4    mt-4">
                  <IconImage
                    src={profilePic}
                    size={100}
                    className="rounded-full"
                  />

                  <div className="space-y-4">
                    <Label
                      for="uploadFile1"
                      className="flex bg-primary_color hover:bg-gray-700 text-white text-base  outline-none rounded w- px-2 py-3  cursor-pointer mx-auto font-[sans-serif] justify-center"
                    >
                      Change Photo
                      <Input
                        type="file"
                        id="uploadFile1"
                        className="w-24  hidden"
                      />
                    </Label>
                    <Button variant="hover" className="w-fit" size="lg">
                      Remove Photo
                    </Button>
                  </div>
                </div>
              </DialogHeader>
              <form className="space-y-6">
                <Input
                  type="text"
                  placeholder="Business Name"
                  className="bg-white dark:bg-gray-800  h-10"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="username"
                    className="bg-white dark:bg-gray-800  h-10"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white dark:bg-gray-800  h-10"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect
                    label="country"
                    className="border-none"
                    options={options}
                  />
                  <OptionSelect label="country" options={options} />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="password"
                    placeholder="Create Password"
                    className="bg-white dark:bg-gray-800  h-10"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-white dark:bg-gray-800  h-10"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect label="country" options={options} />
                  <OptionSelect label="country" options={options} />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="City"
                    className="bg-white dark:bg-gray-800  h-10"
                  />
                  <Input
                    type="text"
                    placeholder="Address"
                    className="bg-white dark:bg-gray-800  h-10"
                  />
                </div>
              </form>

              <div className="flex items-center justify-center pt-2">
                <Button
                  variant="hover"
                  className="h-10 w-full    duration-300 "
                >
                  Create Job
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className=" border flex overflow-hidden h-14 p-1 rounded-md w-96 ">
          <input
            type="text"
            placeholder="Search your business"
            className="h-10 focus:outline-none  px-4 w-full "
          />
          <Image
            src={search}
            width={500}
            height={300}
            className="bg-primary_color w-[42px] p-2 rounded-md"
          />
        </div>
        <div className="w-[450px] lg:w-[800px] overflow-hidden   overflow-x-auto space-y-6">
          <Table className="w-[790px] ">
            <TableHeader className="w-fit h-14 ">
              <TableRow>
                <TableHead className="w-fit text-sm">Profile Name</TableHead>
                <TableHead>
                  <OptionSelect
                    label="Category"
                    options={options}
                    className="text-sm"
                  />
                </TableHead>
                <TableHead>
                  <OptionSelect
                    label="Country"
                    options={options}
                    className="text-sm"
                  />
                </TableHead>
                <TableHead className="text-right text-sm">Status</TableHead>
                <TableHead className="text-right text-sm">Varified</TableHead>
                <TableHead className="text-right text-sm">
                  Top Guarented
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 5, 6].map((item) => (
                <TableRow key={item}>
                  <TableCell className="font-medium text-sm">
                    Microsoft comapany
                  </TableCell>
                  <TableCell>
                    <OptionSelect
                      label="Appliance"
                      options={options}
                      className="text-sm"
                    />
                  </TableCell>
                  <TableCell className="text-center">Bangladesh</TableCell>
                  <TableCell className="flex flex-col gap-1">
                    <Badge>Approved</Badge> <Badge>Pending</Badge>
                    <Badge>Banned</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox className="h-6 w-6" />
                  </TableCell>
                  <TableCell>
                    <div className=" h-14 flex items-center justify-center gap-6 ">
                      <Checkbox className="h-6 w-6" />

                      <Checkbox className="h-6 w-6" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
}
