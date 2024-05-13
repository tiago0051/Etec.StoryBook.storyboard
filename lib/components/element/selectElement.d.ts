import React, { ReactNode } from "react";
interface SelectRootElementProps {
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    error?: string;
    label?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    value?: string;
}
declare function SelectRoot({ className, children, disabled, error, label, onValueChange, placeholder, required, value, }: SelectRootElementProps): React.JSX.Element;
export declare const Select: {
    Root: typeof SelectRoot;
    SearchItem: React.ForwardRefExoticComponent<import("../..").InputProps & React.RefAttributes<HTMLInputElement>>;
    Item: React.ForwardRefExoticComponent<import("../ui/select").SelectItemProps & React.RefAttributes<HTMLDivElement>>;
};
export {};
