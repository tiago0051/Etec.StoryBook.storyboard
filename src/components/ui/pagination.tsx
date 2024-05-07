import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMoreHorizontal,
} from "react-icons/fi";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(
      "eteg-mx-auto eteg-flex eteg-w-full eteg-justify-center twp",
      className
    )}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "eteg-flex eteg-flex-row eteg-items-center eteg-gap-2",
      className
    )}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    data-active={!!isActive}
    className={cn(
      buttonVariants({
        variant: isActive ? "secondary" : "ghost",
      }),
      "data-[active=true]:eteg-rounded-full eteg-w-6 eteg-h-6 data-[active=false]:eteg-text-muted-foreground eteg-text-xs eteg-font-lato eteg-p-0",
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("eteg-gap-1 eteg-pl-2.5", className)}
    {...props}
  >
    <FiChevronLeft className="h-4 w-4" />
    {/* <span>Previous</span> */}
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("eteg-gap-1 eteg-pr-2.5", className)}
    {...props}
  >
    {/* <span>Next</span> */}
    <FiChevronRight className="eteg-h-4 eteg-w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "eteg-flex eteg-h-6 eteg-w-6 eteg-items-end eteg-justify-center eteg-text-muted-foreground",
      className
    )}
    {...props}
  >
    <FiMoreHorizontal className="eteg-text-sm" />
    {/* <span className="sr-only">More pages</span> */}
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
