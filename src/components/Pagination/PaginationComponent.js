import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent() {
  return (
    <div className=" ">
      <Pagination className="border w-fit p-2 rounded-md ">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="border" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="border" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
