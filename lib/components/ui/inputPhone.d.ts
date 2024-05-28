import React from "react";
interface InputPhoneProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string;
    label?: string;
    value?: string;
    onChangeValue?: (value: string) => void;
}
export declare function InputPhone({ value, onChangeValue, error, label, ...props }: InputPhoneProps): React.JSX.Element;
export {};
