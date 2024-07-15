import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import React__default, { ReactNode, InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "outlineSecondary" | "secondary" | "ghost" | "link" | null | undefined;
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

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: IconType;
    inputClassName?: string;
}
declare const InputText: React.ForwardRefExoticComponent<InputTextProps & React.RefAttributes<HTMLInputElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;

interface TableCellDropDownProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    isOpen: boolean;
    colSpan: number;
}
interface TableCellStatusProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    status: boolean;
}
declare const Table: {
    Root: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
    Header: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
    Body: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
    Footer: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
    Head: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
    Row: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
    RowDropDown: React.ForwardRefExoticComponent<TableCellDropDownProps & React.RefAttributes<HTMLTableCellElement>>;
    Cell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
    CellStatus: React.ForwardRefExoticComponent<TableCellStatusProps & React.RefAttributes<HTMLTableCellElement>>;
    Caption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
};

interface PaginationProps extends React__default.ComponentProps<"nav"> {
    amountPages: number;
    changePage: (page: number) => void;
    page: number;
}
declare function Pagination({ amountPages, changePage, page, className, }: PaginationProps): React__default.JSX.Element;

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
    selected: boolean;
}

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
declare function SelectRoot({ className, children, disabled, error, label, onValueChange, placeholder, required, value, }: SelectRootElementProps): React__default.JSX.Element;
declare const Select: {
    Root: typeof SelectRoot;
    Item: React__default.ForwardRefExoticComponent<SelectItemProps & React__default.RefAttributes<HTMLDivElement>>;
    SkeletonItem: {
        (): React__default.JSX.Element;
        displayName: string | undefined;
    };
};

declare function Skeleton({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): React__default.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "primary" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;

interface ComboboxRootProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactElement[];
}
declare function ComboboxRoot({ children, ...props }: ComboboxRootProps): React.JSX.Element;
declare const Combobox: {
    Root: typeof ComboboxRoot;
    Item: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
};

declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Dialog: {
    Root: React.FC<DialogPrimitive.DialogProps>;
    Portal: React.FC<DialogPrimitive.DialogPortalProps>;
    Overlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Close: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
    Trigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Header: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Title: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
};

declare const AlertDialog: {
    Root: React.FC<AlertDialogPrimitive.AlertDialogProps>;
    Portal: React.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
    Overlay: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Header: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Title: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    Action: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Cancel: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
};

declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    inputClassName?: string;
}
declare const InputDate: React.ForwardRefExoticComponent<InputDateProps & React.RefAttributes<HTMLInputElement>>;

declare const Avatar: {
    Root: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Image: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
    Fallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
};

interface InputPhoneProps extends React__default.DetailedHTMLProps<React__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string;
    label?: string;
    value?: string;
    onChangeValue?: (value: string) => void;
}
declare const InputPhone: React__default.ForwardRefExoticComponent<Omit<InputPhoneProps, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

interface CommandDialogProps extends DialogProps {
}
declare const Command: {
    Root: React__default.ForwardRefExoticComponent<Omit<{
        children?: React__default.ReactNode;
    } & Pick<Pick<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        label?: string | undefined;
        shouldFilter?: boolean | undefined;
        filter?: ((value: string, search: string, keywords?: string[] | undefined) => number) | undefined;
        defaultValue?: string | undefined;
        value?: string | undefined;
        onValueChange?: ((value: string) => void) | undefined;
        loop?: boolean | undefined;
        disablePointerSelection?: boolean | undefined;
        vimBindings?: boolean | undefined;
    } & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
    Dialog: ({ children, ...props }: CommandDialogProps) => React__default.JSX.Element;
    Input: React__default.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React__default.DetailedHTMLProps<React__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React__default.InputHTMLAttributes<HTMLInputElement>> & {
        ref?: React__default.Ref<HTMLInputElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
        value?: string | undefined;
        onValueChange?: ((search: string) => void) | undefined;
    } & React__default.RefAttributes<HTMLInputElement>, "ref"> & React__default.RefAttributes<HTMLInputElement>>;
    List: React__default.ForwardRefExoticComponent<Omit<{
        children?: React__default.ReactNode;
    } & Pick<Pick<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        label?: string | undefined;
    } & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
    Empty: React__default.ForwardRefExoticComponent<Omit<{
        children?: React__default.ReactNode;
    } & Pick<Pick<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
    Group: React__default.ForwardRefExoticComponent<Omit<{
        children?: React__default.ReactNode;
    } & Omit<Pick<Pick<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
        heading?: React__default.ReactNode;
        value?: string | undefined;
        forceMount?: boolean | undefined;
    } & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
    Item: React__default.ForwardRefExoticComponent<Omit<{
        children?: React__default.ReactNode;
    } & Omit<Pick<Pick<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
        disabled?: boolean | undefined;
        onSelect?: ((value: string) => void) | undefined;
        value?: string | undefined;
        keywords?: string[] | undefined;
        forceMount?: boolean | undefined;
    } & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
    Shortcut: {
        ({ className, ...props }: React__default.HTMLAttributes<HTMLSpanElement>): React__default.JSX.Element;
        displayName: string;
    };
    Separator: React__default.ForwardRefExoticComponent<Omit<Pick<Pick<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        alwaysRender?: boolean | undefined;
    } & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
};

interface SelectSearchContentProps {
    children: React__default.ReactNode;
    emptyMessage?: string;
    inputPlaceholder?: string;
    buttonRef: React__default.RefObject<HTMLButtonElement>;
    onChange: (value: string) => void;
    onSelect: () => void;
    value: string;
}
interface SelectSearchItemProps extends React__default.ComponentPropsWithoutRef<typeof Command.Item> {
    children: React__default.ReactNode;
}
interface SelectSearchProps {
    children: React__default.ReactNode;
    className?: string;
    disabled?: boolean;
    emptyMessage?: string;
    error?: string;
    inputPlaceholder?: string;
    label?: string;
    onChange: (value: string) => void;
    required?: boolean;
    trigger: React__default.ReactNode;
    value: string;
}
declare function SelectSearchRoot({ children, onChange, trigger, value, className, disabled, emptyMessage, error, inputPlaceholder, label, required, }: SelectSearchProps): React__default.JSX.Element;
declare const SelectSearch: {
    Root: typeof SelectSearchRoot;
    Item: React__default.ForwardRefExoticComponent<SelectSearchItemProps & React__default.RefAttributes<HTMLDivElement>>;
    ItemSkeleton: React__default.ForwardRefExoticComponent<Omit<Omit<{
        children?: React__default.ReactNode;
    } & Omit<Pick<Pick<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React__default.HTMLAttributes<HTMLDivElement>> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React__default.HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
        disabled?: boolean | undefined;
        onSelect?: ((value: string) => void) | undefined;
        value?: string | undefined;
        keywords?: string[] | undefined;
        forceMount?: boolean | undefined;
    } & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
};

export { AlertDialog, Avatar, Badge, type BadgeProps, Button, Checkbox, Combobox, Command, type CommandDialogProps, Dialog, Header, InputDate, type InputDateProps, InputFile, InputPhone, type InputPhoneProps, InputText, type InputTextProps, Label, Pagination, Select, SelectSearch, type SelectSearchContentProps, type SelectSearchItemProps, type SelectSearchProps, Separator, Skeleton, Table, badgeVariants };
