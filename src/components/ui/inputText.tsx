import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="eteg-relative twp">
        {label && (
          <Label
            data-error={!!error}
            htmlFor={props.name}
            className="eteg-block eteg-mb-3"
          >
            {label}{" "}
            {props.required && (
              <span className="eteg-text-xl eteg-font-bold eteg-text-destructive eteg-leading-3">
                *
              </span>
            )}
          </Label>
        )}
        <input
          type={type}
          data-error={!!error}
          className={cn(
            "eteg-flex eteg-h-12 eteg-w-full eteg-rounded-md eteg-border eteg-border-input eteg-bg-transparent eteg-px-4 eteg-text-sm eteg-placeholder:text-muted-foreground eteg-disabled:cursor-not-allowed eteg-disabled:bg-muted eteg-disabled:text-muted-foreground eteg-text-foreground data-[error=true]:eteg-border-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="eteg-absolute eteg--bottom-5 eteg-text-xs eteg-text-destructive">
            {error}
          </span>
        )}
      </div>
    );
  }
);
InputText.displayName = "InputText";

export { InputText };
