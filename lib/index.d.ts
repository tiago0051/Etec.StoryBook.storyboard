import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import React__default, { ReactNode, InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';
import * as LabelPrimitive from '@radix-ui/react-label';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "none" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface HeaderProps {
    title: ReactNode;
    subtitle: ReactNode;
    children?: ReactNode;
    onBackClick?: () => void;
}
declare function Header({ children, onBackClick, subtitle, title, }: HeaderProps): React__default.JSX.Element;

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
    valueText?: string;
    label?: string;
    error?: string;
    onRemove?: () => void;
    icon?: IconType;
}
declare function InputFile({ valueText, label, error, onRemove, className, icon: Icon, ...props }: InputFileProps): React__default.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
declare const InputText: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;

interface TableRowDropDownProps extends React.HTMLAttributes<HTMLTableRowElement> {
    isOpen: boolean;
}
declare const Table: {
    Root: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
    Header: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
    Body: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
    Footer: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
    Head: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
    Row: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
    RowDropDown: React.ForwardRefExoticComponent<TableRowDropDownProps & React.RefAttributes<HTMLTableRowElement>>;
    Cell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
    Caption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
};

export { Button, type ButtonProps, Header, InputFile, type InputProps, InputText, Label, Table, buttonVariants };
