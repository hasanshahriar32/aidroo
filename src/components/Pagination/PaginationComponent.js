import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({ className }) {
  return (
    <Pagination className=" md:w-fit p-2 rounded-md ">
      <PaginationContent className="text-sm">
        <PaginationItem>
          <PaginationPrevious href="#" className={className} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className={className}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className={className}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className={className} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
