import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { IconType } from "react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: IconType;
}

const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, icon: Icon, ...props }, ref) => {
    return (
      <div className={cn("eteg-relative twp", className)}>
        {label && (
          <Label
            data-error={!!error}
            htmlFor={props.name}
            className="eteg-block eteg-mb-3"
          >
            {label}
            {/* {props.required && (
              <span className="eteg-text-xl eteg-font-bold eteg-text-destructive eteg-leading-3">
                *
              </span>
            )} */}
          </Label>
        )}

        <div className="eteg-relative eteg-flex eteg-items-center peer">
          {Icon && (
            <Icon
              size={18}
              className="eteg-absolute eteg-left-4 eteg-text-muted-foreground"
            />
          )}

          <input
            type={type}
            data-error={!!error}
            data-icon={!!Icon}
            className="eteg-flex eteg-h-12 eteg-w-full eteg-rounded-md eteg-border eteg-border-input eteg-bg-transparent eteg-px-4 eteg-text-sm placeholder:text-muted-foreground eteg-disabled:cursor-not-allowed eteg-disabled:bg-muted eteg-disabled:text-muted-foreground eteg-text-foreground data-[error=true]:eteg-border-destructive data-[icon=true]:eteg-pl-12 focus:eteg-outline-none"
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
InputText.displayName = "InputText";

export { InputText };
