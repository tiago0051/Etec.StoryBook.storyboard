import React from "react";
export interface SelectSearchContentProps {
    children: React.ReactNode;
    emptyMessage?: string;
    inputPlaceholder?: string;
    buttonRef: React.RefObject<HTMLButtonElement>;
    onChange: (value: string) => void;
    onSelect: (index: number) => void;
    value: string;
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
    onSelect: (index: number) => void;
    required?: boolean;
    trigger: React.ReactNode;
    value: string;
}
declare function SelectSearchRoot({ children, onChange, onSelect, trigger, value, className, disabled, emptyMessage, error, inputPlaceholder, label, required, }: SelectSearchProps): React.JSX.Element;
export declare const SelectSearch: {
    Root: typeof SelectSearchRoot;
    ItemSkeleton: {
        (): React.JSX.Element;
        displayName: string;
    };
};
export {};
