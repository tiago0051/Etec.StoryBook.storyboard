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
      <div className="relative twp">
        {label && (
          <Label
            data-error={!!error}
            htmlFor={props.name}
            className="block mb-3"
          >
            {label}{" "}
            {props.required && (
              <span className="text-xl font-bold text-destructive leading-3">
                *
              </span>
            )}
          </Label>
        )}
        <input
          type={type}
          data-error={!!error}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-transparent px-4 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground text-foreground data-[error=true]:border-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="absolute -bottom-5 text-xs text-destructive">
            {error}
          </span>
        )}
      </div>
    );
  }
);
InputText.displayName = "InputText";

export { InputText };
