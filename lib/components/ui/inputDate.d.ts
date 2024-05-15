import * as React from "react";
export interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    inputClassName?: string;
}
declare const InputDate: React.ForwardRefExoticComponent<InputDateProps & React.RefAttributes<HTMLInputElement>>;
export { InputDate };
