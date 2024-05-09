import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "eteg-inline-flex eteg-items-center eteg-justify-center eteg-whitespace-nowrap eteg-rounded-md eteg-text-sm eteg-font-medium eteg-ring-offset-background eteg-transition-colors eteg-focus-visible:outline-none eteg-focus-visible:ring-2 eteg-focus-visible:ring-ring eteg-focus-visible:ring-offset-2 disabled:eteg-pointer-events-none disabled:eteg-opacity-50 twp",
  {
    variants: {
      variant: {
        default:
          "eteg-bg-primary eteg-text-primary-foreground eteg-hover:bg-primary-hover",
        destructive:
          "eteg-bg-destructive eteg-text-destructive-foreground eteg-hover:bg-destructive-hover",
        outline:
          "eteg-border eteg-border-primary eteg-bg-transparent eteg-text-primary eteg-hover:bg-accent eteg-hover:text-primary-foreground eteg-hover:bg-primary",
        secondary:
          "eteg-bg-secondary eteg-text-secondary-foreground eteg-hover:bg-secondary-hover",
        ghost: "eteg-text-primary eteg-hover:text-primary-hover",
        link: "eteg-text-primary eteg-underline-offset-4 eteg-hover:underline eteg-hover:text-primary-hover",
      },
      size: {
        default: "eteg-h-12 eteg-px-4 eteg-py-2",
        sm: "eteg-h-9 eteg-rounded-md eteg-px-3",
        lg: "eteg-h-11 eteg-rounded-md eteg-px-8",
        icon: "eteg-h-10 eteg-w-10",
        none: "eteg-h-min eteg-w-min",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
