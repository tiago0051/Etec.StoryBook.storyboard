import React, { ReactNode } from "react";
import { Button } from "./button";
import { BsArrowLeft } from "react-icons/bs";

interface HeaderProps {
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
  onBackClick?: () => void;
}

export function Header({
  children,
  onBackClick,
  subtitle,
  title,
}: HeaderProps) {
  return (
    <div className="twp">
      {onBackClick && (
        <Button
          variant="link"
          size="none"
          type="button"
          className="flex gap-3 text-foreground/60 hover:text-foreground mb-5"
          onClick={() => onBackClick()}
        >
          <BsArrowLeft size={16} />
          Voltar
        </Button>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="font-lato font-semibold text-3xl text-foreground mb-1">
            {title}
          </h1>
          <p className="font-lato font-semibold text-base text-foreground/60">
            {subtitle}
          </p>
        </div>

        {children && (
          <div className="sm:max-w-xs w-full flex justify-end">{children}</div>
        )}
      </div>
    </div>
  );
}
