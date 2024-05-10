import React, { ReactNode } from "react";
import { Select as SelectComp } from "../ui/select";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

interface SelectRootElementProps {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  error?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

function SelectRoot({
  className,
  children,
  disabled,
  error,
  label,
  placeholder,
  required,
}: SelectRootElementProps) {
  return (
    <div className={cn("eteg-relative twp", className)}>
      {label && (
        <Label
          data-error={!!error}
          className="eteg-block eteg-mb-3 peer"
          aria-required={!!required}
        >
          {label}
        </Label>
      )}
      <SelectComp.Root required={required} disabled={disabled}>
        <SelectComp.Trigger
          data-error={!!error}
          className="data-[error=true]:eteg-border-destructive"
        >
          <SelectComp.Value placeholder={placeholder} />
        </SelectComp.Trigger>

        <SelectComp.Content>{children}</SelectComp.Content>
      </SelectComp.Root>

      {error && (
        <span className="eteg-absolute eteg--bottom-5 eteg-text-xs eteg-text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

export const Select = {
  Root: SelectRoot,
  SearchItem: SelectComp.SearchItem,
  Item: SelectComp.Item,
};
