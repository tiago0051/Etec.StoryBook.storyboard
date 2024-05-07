import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SelectRoot = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "eteg-flex eteg-h-12 eteg-w-full eteg-items-center eteg-justify-between eteg-rounded-md eteg-border eteg-border-input eteg-bg-transparent eteg-px-3 eteg-py-2 eteg-text-sm placeholder:eteg-text-muted-foreground eteg-text-secondary focus:eteg-outline-none disabled:eteg-cursor-not-allowed disabled:eteg-opacity-50 [&>span]:eteg-line-clamp-1 font-inter twp",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <FiChevronDown className="eteg-h-4 eteg-w-4 eteg-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "eteg-flex eteg-cursor-default eteg-items-center eteg-justify-center eteg-py-1",
      className
    )}
    {...props}
  >
    <FiChevronUp className="eteg-h-4 eteg-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "eteg-flex eteg-cursor-default eteg-items-center eteg-justify-center eteg-py-1",
      className
    )}
    {...props}
  >
    <FiChevronDown className="eteg-h-4 eteg-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "eteg-relative eteg-z-50 eteg-max-h-96 eteg-min-w-[8rem] eteg-overflow-hidden eteg-rounded-md eteg-border eteg-border-input eteg-bg-popover eteg-text-popover-foreground eteg-shadow-md data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0 data-[state=closed]:eteg-zoom-out-95 data-[state=open]:eteg-zoom-in-95 data-[side=bottom]:eteg-slide-in-from-top-2 data-[side=left]:eteg-slide-in-from-right-2 data-[side=right]:eteg-slide-in-from-left-2 data-[side=top]:eteg-slide-in-from-bottom-2 twp",
        position === "popper" &&
          "data-[side=bottom]:eteg-translate-y-1 data-[side=left]:eteg--translate-x-1 data-[side=right]:eteg-translate-x-1 data-[side=top]:eteg--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "eteg-p-1",
          position === "popper" &&
            "eteg-h-[var(--radix-select-trigger-height)] eteg-w-full eteg-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "eteg-py-1.5 eteg-pl-8 eteg-pr-2 eteg-text-sm eteg-font-semibold",
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  selected: boolean;
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, selected, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    data-selected={!!selected}
    className={cn(
      "eteg-relative eteg-flex eteg-w-full eteg-cursor-default eteg-select-none eteg-items-center eteg-rounded-sm eteg-h-12 eteg-px-2 eteg-text-sm eteg-outline-none focus:eteg-bg-accent focus:eteg-text-accent-foreground data-[disabled]:eteg-pointer-events-none data-[disabled]:eteg-opacity-50 data-[selected=true]:eteg-text-accent-foreground",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("eteg--mx-1 eteg-my-1 eteg-h-px eteg-bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export const Select = {
  Root: SelectRoot,
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollUpButton,
};
