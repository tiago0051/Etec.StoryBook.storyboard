import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "eteg-text-sm eteg-font-medium eteg-peer-disabled:cursor-not-allowed eteg-peer-disabled:opacity-70 eteg-font-lato eteg-text-border data-[error=true]:eteg-text-destructive eteg-relative"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  >
    {children}
    <span
      className="eteg-text-xl eteg-font-bold eteg-text-destructive eteg-absolute eteg-hidden aria-required:eteg-inline -eteg-top-2 eteg-px-1"
      aria-required={props["aria-required"]}
    >
      *
    </span>
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
