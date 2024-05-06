import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationElementProps {
  amountPages: number;
  changePage: (page: number) => void;
  page: number;
}

export function PaginationElement({
  amountPages,
  changePage,
  page,
}: PaginationElementProps) {
  const nextPage = page + 1 < amountPages ? page + 1 : amountPages;
  const previousPage = page - 1 > 1 ? page - 1 : 1;
  const lastPage = amountPages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => changePage(previousPage)} />
        </PaginationItem>

        {page > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => changePage(1)}>1</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {page + 1 < amountPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {page < amountPages && (
          <PaginationLink onClick={() => changePage(lastPage)}>
            {lastPage}
          </PaginationLink>
        )}

        <PaginationItem>
          <PaginationNext onClick={() => changePage(nextPage)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
