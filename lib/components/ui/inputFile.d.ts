import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
    valueText?: string;
    label?: string;
    error?: string;
    onRemove?: () => void;
    icon?: IconType;
}
export declare function InputFile({ valueText, label, error, onRemove, className, icon: Icon, ...props }: InputFileProps): React.JSX.Element;
export {};
