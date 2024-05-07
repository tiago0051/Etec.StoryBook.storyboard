import React from "react";
interface PaginationProps extends React.ComponentProps<"nav"> {
    amountPages: number;
    changePage: (page: number) => void;
    page: number;
}
export declare function Pagination({ amountPages, changePage, page, className, }: PaginationProps): React.JSX.Element;
export {};
