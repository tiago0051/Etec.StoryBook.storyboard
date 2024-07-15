import React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
export interface CommandDialogProps extends DialogProps {
}
export declare const Command: {
    Root: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        label?: string | undefined;
        shouldFilter?: boolean | undefined;
        filter?: ((value: string, search: string, keywords?: string[] | undefined) => number) | undefined;
        defaultValue?: string | undefined;
        value?: string | undefined;
        onValueChange?: ((value: string) => void) | undefined;
        loop?: boolean | undefined;
        disablePointerSelection?: boolean | undefined;
        vimBindings?: boolean | undefined;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Dialog: ({ children, ...props }: CommandDialogProps) => React.JSX.Element;
    Input: React.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & {
        ref?: React.Ref<HTMLInputElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
        value?: string | undefined;
        onValueChange?: ((search: string) => void) | undefined;
    } & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
    List: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        label?: string | undefined;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Empty: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
        heading?: React.ReactNode;
        value?: string | undefined;
        forceMount?: boolean | undefined;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<{
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
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Shortcut: {
        ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
        displayName: string;
    };
    Separator: React.ForwardRefExoticComponent<Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    } & {
        asChild?: boolean | undefined;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        alwaysRender?: boolean | undefined;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
