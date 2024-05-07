import * as React from "react";
import { IconType } from "react-icons";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: IconType;
}
declare const InputText: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { InputText };
