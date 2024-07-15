import React from "react";
import { Command } from "../ui/command";
export interface SelectSearchContentProps {
    children: React.ReactNode;
    emptyMessage?: string;
    inputPlaceholder?: string;
    buttonRef: React.RefObject<HTMLButtonElement>;
    onChange: (value: string) => void;
    onSelect: () => void;
    value: string;
}
export interface SelectSearchItemProps extends React.ComponentPropsWithoutRef<typeof Command.Item> {
    children: React.ReactNode;
}
export interface SelectSearchProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    emptyMessage?: string;
    error?: string;
    inputPlaceholder?: string;
    label?: string;
    onChange: (value: string) => void;
    required?: boolean;
    trigger: React.ReactNode;
    value: string;
}
declare function SelectSearchRoot({ children, onChange, trigger, value, className, disabled, emptyMessage, error, inputPlaceholder, label, required, }: SelectSearchProps): React.JSX.Element;
export declare const SelectSearch: {
    Root: typeof SelectSearchRoot;
    Item: React.ForwardRefExoticComponent<SelectSearchItemProps & React.RefAttributes<HTMLDivElement>>;
    ItemSkeleton: React.ForwardRefExoticComponent<Omit<Omit<{
        children?: React.ReactNode;
    } & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
        disabled?: boolean | undefined;
        onSelect?: ((value: string) => void) | undefined;
        value?: string | undefined;
        keywords?: string[] | undefined;
        forceMount?: boolean | undefined;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export {};
