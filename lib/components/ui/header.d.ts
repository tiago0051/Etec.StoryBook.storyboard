import React, { ReactNode } from "react";
interface HeaderProps {
    title: ReactNode;
    subtitle: ReactNode;
    children?: ReactNode;
    onBackClick?: () => void;
}
export declare function Header({ children, onBackClick, subtitle, title, }: HeaderProps): React.JSX.Element;
export {};
