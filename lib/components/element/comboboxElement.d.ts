import * as React from "react";
import { ButtonProps } from "../ui/button";
interface ComboboxRootProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
}
declare function ComboboxRoot({ children, ...props }: ComboboxRootProps): React.JSX.Element;
export declare const Combobox: {
    Root: typeof ComboboxRoot;
    Item: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
};
export {};
