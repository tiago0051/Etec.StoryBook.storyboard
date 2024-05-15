import * as React from "react";
import { IconType } from "react-icons";
export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: IconType;
    inputClassName?: string;
}
declare const InputText: React.ForwardRefExoticComponent<InputTextProps & React.RefAttributes<HTMLInputElement>>;
export { InputText };
