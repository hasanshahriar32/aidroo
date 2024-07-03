import OptionSelect from "@/components/OptionSelect/OptionSelect";
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
import { options } from "@/constant";
import { search } from "@/exportImage";
import Image from "next/image";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Business_plan() {
  return (
    <div className="  rounded-lg  space-y-6">
      <div className=" flex flex-col justify-center items-center space-y-8  ">
        <div className="border  p-4 rounded-md  w-fit  ">
          <h1 className="text-primary_color  text-xl font-semibold">
            Create a Business Profile
          </h1>
        </div>
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
          />
        </div>
        <div className="w-[450px] lg:w-[800px] overflow-hidden   overflow-x-auto">
          <Table className="w-[790px] ">
            <TableHeader className="w-fit h-14 ">
              <TableRow>
                <TableHead className="w-fit">Profile Name</TableHead>
                <TableHead>
                  <OptionSelect
                    label="Category"
                    options={options}
                    className="text-lg"
                  />
                </TableHead>
                <TableHead>
                  <OptionSelect
                    label="Country"
                    options={options}
                    className="text-lg"
                  />
                </TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Varified</TableHead>
                <TableHead className="text-right">Top Guarented</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
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
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
