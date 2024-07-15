import React from "react";

import { FiChevronDown, FiSearch } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { InputText } from "../ui/inputText";
import { Popover } from "../ui/popover";
import { Command } from "../ui/command";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";

export interface SelectSearchContentProps {
  children: React.ReactNode;
  emptyMessage?: string;
  inputPlaceholder?: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onChange: (value: string) => void;
  onSelect: (index: number) => void;
  value: string;
}

const SelectSearchContent = ({
  buttonRef,
  children,
  emptyMessage,
  inputPlaceholder,
  onChange,
  onSelect,
  value,
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
          onChange={(event) => onChange(event.currentTarget.value)}
          value={value}
        />
        <Command.Empty>{emptyMessage}</Command.Empty>
        <Command.List>
          <Command.Group>
            {React.Children.map(children, (child, index) => (
              <Command.Item
                onSelect={() => onSelect(index)}
                className="eteg-h-12 eteg-px-2"
              >
                {child}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Root>
    </Popover.Content>
  );
};

SelectSearchContent.displayName = "SelectSearchContent";

const SelectSearchSkeletonItem = () => (
  <Skeleton className="eteg-h-5 eteg-w-full" />
);

SelectSearchSkeletonItem.displayName = "SelectSearchSkeletonItem";

export interface SelectSearchProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  emptyMessage?: string;
  error?: string;
  inputPlaceholder?: string;
  label?: string;
  onChange: (value: string) => void;
  onSelect: (index: number) => void;
  required?: boolean;
  trigger: React.ReactNode;
  value: string;
}

function SelectSearchRoot({
  children,
  onChange,
  onSelect,
  trigger,
  value,
  className,
  disabled = false,
  emptyMessage,
  error,
  inputPlaceholder,
  label,
  required = false,
}: SelectSearchProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const [open, setOpen] = React.useState(false);

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

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            data-error={!!error}
            className="eteg-w-full eteg-justify-between twp eteg-border-input eteg-text-secondary data-[error=true]:eteg-border-destructive"
            ref={buttonRef}
            disabled={disabled}
          >
            {trigger}
            <FiChevronDown className="eteg-ml-2 eteg-h-4 eteg-w-4 eteg-shrink-0 eteg-opacity-50" />
          </Button>
        </Popover.Trigger>
        <SelectSearchContent
          buttonRef={buttonRef}
          value={value}
          onChange={onChange}
          onSelect={(index) => {
            setOpen(false);
            onSelect(index);
          }}
          emptyMessage={emptyMessage}
          inputPlaceholder={inputPlaceholder}
          children={children}
        />
      </Popover.Root>

      {error && (
        <span className="eteg-absolute -eteg-bottom-[18px] eteg-text-xs eteg-text-destructive eteg-left-0">
          {error}
        </span>
      )}
    </div>
  );
}

export const SelectSearch = {
  Root: SelectSearchRoot,
  ItemSkeleton: SelectSearchSkeletonItem,
};
