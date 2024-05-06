import React from "react";
interface PaginationProps {
    amountPages: number;
    changePage: (page: number) => void;
    page: number;
}
export declare function Pagination({ amountPages, changePage, page }: PaginationProps): React.JSX.Element;
export {};
