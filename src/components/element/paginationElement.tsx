import React from "react";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationProps {
  amountPages: number;
  changePage: (page: number) => void;
  page: number;
}

export function Pagination({ amountPages, changePage, page }: PaginationProps) {
  const nextPage = page + 1 < amountPages ? page + 1 : amountPages;
  const previousPage = page - 1 > 1 ? page - 1 : 1;
  const lastPage = amountPages;

  return (
    <PaginationComponent>
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
    </PaginationComponent>
  );
}
