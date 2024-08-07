/* eslint-disable react-refresh/only-export-components */
import * as React from "react";

import { cn } from "@/lib/utils";

const TableRoot = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="eteg-relative eteg-w-full eteg-overflow-auto twp">
    <table
      ref={ref}
      className={cn("eteg-w-full eteg-caption-bottom eteg-text-sm", className)}
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
      "[&_tr]:eteg-border-b [&_tr]:eteg-border-b-table-line eteg-border-t-table-line [&_tr]:eteg-border-t-transparent",
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
    className={cn("[&_tr:first-child]:eteg-border-0", className)}
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
      "eteg-border-t eteg-bg-muted/50 eteg-font-medium [&>tr]:last:eteg-border-b-0",
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
      "eteg-transition-colors data-[state=selected]:eteg-bg-muted eteg-border-t-table-line eteg-border-t",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

interface TableCellDropDownProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  isOpen: boolean;
  colSpan: number;
}

const TableRowDropDown = React.forwardRef<
  HTMLTableCellElement,
  TableCellDropDownProps
>(({ className, isOpen, children, ...props }, ref) => (
  <Table.Row className="eteg-border-t-0">
    <Table.Cell className="eteg-py-0" {...props}>
      <div
        data-open={isOpen}
        className={cn(
          "eteg-grid data-[open=true]:eteg-mb-4 eteg-h-0 eteg-grid-cols-1 eteg-gap-4 eteg-overflow-hidden eteg-rounded-md eteg-bg-table-dropdown eteg-px-8 eteg-py-0 eteg-transition-all data-[open=true]:eteg-h-min data-[open=true]:eteg-py-6 sm:eteg-grid-cols-2 md:eteg-grid-cols-3",
          className
        )}
        ref={ref}
      >
        {children}
      </div>
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
      "eteg-py-6 eteg-space-x-4 eteg-text-left eteg-text-sm eteg-text-foreground eteg-align-middle eteg-font-semibold eteg-font-lato [&:has([role=checkbox])]:eteg-pr-0",
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
      "eteg-py-6 eteg-text-sm eteg-font-lato eteg-text-foreground/80 [&:last-child]:eteg-pr-0 eteg-align-middle eteg-pr-4",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

interface TableCellStatusProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  status: boolean;
}

const TableCellStatus = React.forwardRef<
  HTMLTableCellElement,
  TableCellStatusProps
>(({ status, className, ...props }, ref) => (
  <td
    ref={ref}
    data-status={status}
    className={cn(
      "eteg-py-6 eteg-text-sm eteg-font-lato eteg-text-foreground/80 [&:last-child]:eteg-pr-0 eteg-align-middle eteg-pr-4 eteg-text-muted-foreground data-[status=true]:eteg-text-primary",
      className
    )}
    {...props}
  />
));
TableCellStatus.displayName = "TableCellStatus";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "eteg-mt-4 eteg-text-sm eteg-text-muted-foreground",
      className
    )}
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
  CellStatus: TableCellStatus,
  Caption: TableCaption,
};
