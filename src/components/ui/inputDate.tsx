import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputDateProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputClassName?: string;
}

const InputDate = React.forwardRef<HTMLInputElement, InputDateProps>(
  (
    { className, type = "date", label, error, inputClassName, ...props },
    ref
  ) => {
    return (
      <div className={cn("eteg-relative twp", className)}>
        {label && (
          <Label
            data-error={!!error}
            htmlFor={props.name}
            className="eteg-block eteg-mb-3 peer"
            aria-required={!!props.required}
          >
            {label}
          </Label>
        )}

        <div className="eteg-relative eteg-flex eteg-items-center">
          <input
            type={type}
            data-error={!!error}
            className={cn(
              "eteg-flex eteg-h-12 eteg-w-full eteg-rounded-md eteg-border eteg-border-input eteg-bg-transparent eteg-px-4 eteg-text-sm placeholder:text-muted-foreground disabled:eteg-cursor-not-allowed disabled:eteg-bg-muted disabled:eteg-text-muted-foreground eteg-text-foreground data-[error=true]:eteg-border-destructive focus:eteg-outline-none",
              inputClassName
            )}
            ref={ref}
            {...props}
          />
        </div>

        {error && (
          <span className="eteg-absolute eteg--bottom-5 eteg-text-xs eteg-text-destructive">
            {error}
          </span>
        )}
      </div>
    );
  }
);
InputDate.displayName = "InputDate";

export { InputDate };
