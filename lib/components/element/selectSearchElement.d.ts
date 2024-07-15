import React from "react";
import { Command } from "../ui/command";
export interface SelectSearchContentProps {
    children: React.ReactNode;
    emptyMessage?: string;
    inputPlaceholder?: string;
    buttonRef: React.RefObject<HTMLButtonElement>;
    onSelect: () => void;
}
export interface SelectSearchItemProps extends React.ComponentPropsWithoutRef<typeof Command.Item> {
    children: React.ReactNode;
}
export interface SelectSearchProps {
    children: React.ReactNode;
    trigger: React.ReactNode;
}
declare function SelectSearchRoot({ children, trigger }: SelectSearchProps): React.JSX.Element;
export declare const SelectSearch: {
    Root: typeof SelectSearchRoot;
    Item: React.ForwardRefExoticComponent<SelectSearchItemProps & React.RefAttributes<HTMLDivElement>>;
};
export {};
