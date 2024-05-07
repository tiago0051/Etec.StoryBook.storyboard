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
          className="eteg-flex eteg-gap-3 eteg-text-foreground/60 eteg-hover:text-foreground eteg-mb-5"
          onClick={() => onBackClick()}
        >
          <BsArrowLeft size={16} />
          Voltar
        </Button>
      )}
      <div className="eteg-flex eteg-flex-col sm:eteg-flex-row sm:eteg-justify-between sm:eteg-items-center eteg-gap-4">
        <div>
          <h1 className="eteg-font-lato eteg-font-semibold eteg-text-3xl eteg-text-foreground eteg-mb-1">
            {title}
          </h1>
          <p className="eteg-font-lato eteg-font-semibold eteg-text-base eteg-text-foreground/60">
            {subtitle}
          </p>
        </div>

        {children && (
          <div className="sm:eteg-max-w-xs eteg-w-full eteg-flex eteg-justify-end">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
