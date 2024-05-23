import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";
import { FiX } from "react-icons/fi";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "eteg-fixed eteg-inset-0 eteg-z-50 eteg-bg-black/80 eteg- data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "eteg-fixed eteg-left-[50%] eteg-top-[50%] eteg-z-50 eteg-grid eteg-w-full eteg-max-w-lg eteg-translate-x-[-50%] eteg-translate-y-[-50%] eteg-gap-4 eteg-border eteg-bg-background eteg-px-6 eteg-pt-10 eteg-pb-8 eteg-shadow-lg eteg-duration-200 data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0 data-[state=closed]:eteg-zoom-out-95 data-[state=open]:eteg-zoom-in-95 data-[state=closed]:eteg-slide-out-to-left-1/2 data-[state=closed]:eteg-slide-out-to-top-[48%] data-[state=open]:eteg-slide-in-from-left-1/2 data-[state=open]:eteg-slide-in-from-top-[48%] sm:eteg-rounded-lg twp",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="eteg-absolute eteg-right-4 eteg-top-4 eteg-rounded-sm eteg-ring-offset-background focus:eteg-outline-none disabled:eteg-pointer-events-none data-[state=open]:eteg-bg-accent data-[state=open]:eteg-text-muted-foreground hover:eteg-text-destructive twp">
        <FiX size={24} />
        <span className="eteg-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "eteg-flex eteg-flex-col eteg-space-y-1.5 eteg-text-center sm:eteg-text-left twp",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "eteg-flex eteg-flex-col-reverse sm:eteg-flex-row sm:eteg-justify-end sm:eteg-space-x-4 twp",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "eteg-text-2xl sm:eteg-text-3xl eteg-font-semibold eteg-leading-none eteg-tracking-tight eteg-text-foreground eteg-max-w-[95%]",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "eteg-text-base sm:eteg-text-lg eteg-text-foreground/55 eteg-text-left",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export const Dialog = {
  Root: DialogRoot,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Close: DialogClose,
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
};
