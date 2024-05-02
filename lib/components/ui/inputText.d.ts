import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
declare const InputText: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { InputText };
