/* eslint-disable react-refresh/only-export-components */
import * as React from "react";

import { cn } from "@/lib/utils";

const TableRoot = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto twp">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
TableRoot.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "[&_tr]:border-b [&_tr]:border-b-input [&_tr]:border-t-transparent",
      className
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:first-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors data-[state=selected]:bg-muted border-t-input border-t",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

interface TableRowDropDownProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  isOpen: boolean;
}

const TableRowDropDown = React.forwardRef<
  HTMLTableRowElement,
  TableRowDropDownProps
>(({ className, isOpen, ...props }, ref) => (
  <Table.Row className="border-t-0">
    <Table.Cell colSpan={4} className="py-0">
      <div
        data-open={isOpen}
        className={cn(
          "grid h-0 grid-cols-1 gap-4 overflow-hidden rounded-md bg-muted-foreground/25 px-8 py-0 transition-all data-[open=true]:h-min data-[open=true]:py-6 sm:grid-cols-2 md:grid-cols-3",
          className
        )}
        ref={ref}
        {...props}
      />
    </Table.Cell>
  </Table.Row>
));
TableRowDropDown.displayName = "TableRowDropDown";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "py-6 space-x-4 text-left text-sm text-foreground align-middle font-semibold font-lato [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "py-6 text-sm text-foreground/80 [&:first-child]:pl-0 [&:last-child]:pr-0 align-middle px-4",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  RowDropDown: TableRowDropDown,
  Cell: TableCell,
  Caption: TableCaption,
};
