import React from "react";

import { FiChevronDown, FiSearch } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { InputText } from "../ui/inputText";
import { Popover } from "../ui/popover";
import { Command } from "../ui/command";
import { Button } from "../ui/button";

export interface SelectSearchContentProps {
  children: React.ReactNode;
  emptyMessage?: string;
  inputPlaceholder?: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onSelect: () => void;
}

const SelectSearchContent = ({
  buttonRef,
  children,
  emptyMessage,
  inputPlaceholder,
  onSelect,
}: SelectSearchContentProps) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width + 32);
    });

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <Popover.Content
      style={{ width: `${width}px` }}
      className="eteg-p-0 twp eteg-border-input"
    >
      <Command.Root>
        <InputText
          icon={FiSearch}
          inputClassName="eteg-border-x-transparent eteg-rounded-none eteg-border-t-transparent"
          placeholder={inputPlaceholder}
        />
        <Command.Empty>{emptyMessage}</Command.Empty>
        <Command.List>
          <Command.Group onSelect={() => onSelect()}>{children}</Command.Group>
        </Command.List>
      </Command.Root>
    </Popover.Content>
  );
};

SelectSearchContent.displayName = "SelectSearchContent";

export interface SelectSearchItemProps
  extends React.ComponentPropsWithoutRef<typeof Command.Item> {
  children: React.ReactNode;
}

const SelectSearchItem = React.forwardRef<
  React.ElementRef<typeof Command.Item>,
  SelectSearchItemProps
>(({ className, ...props }) => (
  <Command.Item {...props} className={cn("eteg-h-12 eteg-px-2", className)} />
));

SelectSearchItem.displayName = "SelectSearchItem";

export interface SelectSearchProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

function SelectSearchRoot({ children, trigger }: SelectSearchProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const [open, setOpen] = React.useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="eteg-w-full eteg-justify-between twp eteg-border-input eteg-text-secondary"
          ref={buttonRef}
        >
          {trigger}
          <FiChevronDown className="eteg-ml-2 eteg-h-4 eteg-w-4 eteg-shrink-0 eteg-opacity-50" />
        </Button>
      </Popover.Trigger>
      <SelectSearchContent
        buttonRef={buttonRef}
        onSelect={() => {
          setOpen(false);
        }}
      >
        {children}
      </SelectSearchContent>
    </Popover.Root>
  );
}

export const SelectSearch = {
  Root: SelectSearchRoot,
  Item: SelectSearchItem,
};
