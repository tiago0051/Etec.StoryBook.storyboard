import React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";

import { cn } from "@/lib/utils";
import { FiSearch } from "react-icons/fi";
import { Dialog } from "./dialog";

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "eteg-flex eteg-h-full eteg-w-full eteg-flex-col eteg-overflow-hidden eteg-rounded-md eteg-bg-popover eteg-text-popover-foreground twp",
      className
    )}
    {...props}
  />
));
CommandRoot.displayName = CommandPrimitive.displayName;

export interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content className="eteg-overflow-hidden eteg-p-0 eteg-shadow-lg">
        <CommandRoot className="[&_[cmdk-group-heading]]:eteg-px-2 [&_[cmdk-group-heading]]:eteg-font-medium [&_[cmdk-group-heading]]:eteg-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:eteg-pt-0 [&_[cmdk-group]]:eteg-px-2 [&_[cmdk-input-wrapper]_svg]:eteg-h-5 [&_[cmdk-input-wrapper]_svg]:eteg-w-5 [&_[cmdk-input]]:eteg-h-12 [&_[cmdk-item]]:eteg-px-2 [&_[cmdk-item]]:eteg-py-3 [&_[cmdk-item]_svg]:eteg-h-5 [&_[cmdk-item]_svg]:eteg-w-5">
          {children}
        </CommandRoot>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="eteg-flex eteg-items-center eteg-border-b eteg-px-3"
    cmdk-input-wrapper=""
  >
    <FiSearch className="eteg-mr-2 eteg-h-4 eteg-w-4 eteg-shrink-0 eteg-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "eteg-flex eteg-h-11 eteg-w-full eteg-rounded-md eteg-bg-transparent eteg-py-3 eteg-text-sm eteg-outline-none placeholder:eteg-text-muted-foreground disabled:eteg-cursor-not-allowed disabled:eteg-opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "eteg-max-h-[300px] eteg-overflow-y-auto eteg-overflow-x-hidden",
      className
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="eteg-py-6 eteg-text-center eteg-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "eteg-overflow-hidden eteg-p-1 eteg-text-foreground [&_[cmdk-group-heading]]:eteg-px-2 [&_[cmdk-group-heading]]:eteg-py-1.5 [&_[cmdk-group-heading]]:eteg-text-xs [&_[cmdk-group-heading]]:eteg-font-medium [&_[cmdk-group-heading]]:eteg-text-muted-foreground",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("eteg--mx-1 eteg-h-px eteg-bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "eteg-relative eteg-flex eteg-cursor-default eteg-select-none eteg-items-center eteg-rounded-sm eteg-px-2 eteg-py-1.5 eteg-text-sm eteg-outline-none aria-selected:eteg-bg-accent aria-selected:eteg-text-accent-foreground data-[disabled=true]:eteg-pointer-events-none data-[disabled=true]:eteg-opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "eteg-ml-auto eteg-text-xs eteg-tracking-widest eteg-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export const Command = {
  Root: CommandRoot,
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator,
};
