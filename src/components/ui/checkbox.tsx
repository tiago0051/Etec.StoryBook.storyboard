import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import { FiCheck } from "react-icons/fi";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "eteg-peer eteg-h-5 eteg-w-5 eteg-shrink-0 eteg-rounded-sm eteg-border eteg-border-checkbox eteg-ring-offset-background focus-visible:eteg-outline-none focus-visible:eteg-ring-2 focus-visible:eteg-ring-ring focus-visible:eteg-ring-offset-2 disabled:eteg-cursor-not-allowed disabled:eteg-opacity-50 data-[state=checked]:eteg-bg-checkbox data-[state=checked]:eteg-text-checkbox-foreground twp",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "eteg-flex eteg-items-center eteg-justify-center eteg-text-current"
      )}
    >
      <FiCheck size={18} className="eteg-stroke-[3px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
