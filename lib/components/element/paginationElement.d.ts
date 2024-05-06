import React from "react";
interface PaginationElementProps {
    amountPages: number;
    changePage: (page: number) => void;
    page: number;
}
export declare function PaginationElement({ amountPages, changePage, page, }: PaginationElementProps): React.JSX.Element;
export {};
