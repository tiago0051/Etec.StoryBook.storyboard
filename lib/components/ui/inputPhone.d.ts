import React from "react";
export interface InputPhoneProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string;
    label?: string;
    value?: string;
    onChangeValue?: (value: string) => void;
}
declare const InputPhone: React.ForwardRefExoticComponent<Omit<InputPhoneProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { InputPhone };
