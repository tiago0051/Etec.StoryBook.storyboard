import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "eteg-inline-flex eteg-items-center eteg-rounded-md eteg-border eteg-px-2.5 eteg-h-5 eteg-text-sm eteg-transition-colors focus:eteg-outline-none eteg-font-lato twp",
  {
    variants: {
      variant: {
        default:
          "eteg-border-transparent eteg-bg-badge eteg-text-badge-foreground hover:eteg-bg-badge/80",
        primary:
          "eteg-border-transparent eteg-bg-primary eteg-text-primary-foreground hover:eteg-bg-primary/80",
        secondary:
          "eteg-border-transparent eteg-bg-secondary eteg-text-secondary-foreground hover:eteg-bg-secondary/80",
        destructive:
          "eteg-border-transparent eteg-bg-destructive eteg-text-destructive-foreground hover:eteg-bg-destructive/80",
        outline: "eteg-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
