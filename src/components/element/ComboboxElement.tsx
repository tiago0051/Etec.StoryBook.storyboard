"use client";

import * as React from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiSearch } from "react-icons/fi";
import { InputText } from "../ui/inputText";
import { cn } from "@/lib/utils";

interface ComboboxRootProps {
  children: React.ReactNode;
  width?: string;
}

const PopOverContent = ({ children, width }: ComboboxRootProps) => {
  React.useEffect(() => {
    const element = document.getElementById("popover");

    if (width) element!.style.width = `${width}px`;
  }, []);
  return <div className="eteg-grid eteg-w-96">{children}</div>;
};

function ComboboxRoot({ children }: ComboboxRootProps) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const width = divRef.current?.parentElement?.clientWidth.toString();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  function openPopover(searchValue: string) {
    const searchValueFormatted = searchValue.trim();

    if (searchValueFormatted.length > 0) {
      setOpen(true);
    } else setOpen(false);
  }

  return (
    <div className="twp">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild onClick={(e) => e.preventDefault()}>
          <div
            className="eteg-grid eteg-grid-cols-6 eteg-border eteg-border-input eteg-rounded-md eteg-overflow-hidden"
            ref={divRef}
          >
            <InputText
              icon={FiSearch}
              inputClassName="eteg-border-none"
              className="eteg-col-span-4"
              onKeyDown={(e) => {
                setValue(e.currentTarget.value);
                if (e.key === "Enter") openPopover(e.currentTarget.value);
              }}
            />
            <Button
              className="eteg-col-span-2 -eteg-ml-1 eteg-z-10 eteg-rounded-e-none"
              onClick={() => openPopover(value)}
            >
              Buscar
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 popover eteg-box-border"
          id="popover"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <PopOverContent width={width}>{children}</PopOverContent>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const ComboboxItem = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        variant="ghost"
        className={cn(
          "eteg-text-left eteg-block eteg-text-foreground/60",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

ComboboxItem.displayName = "BomboboxItem";

export const Combobox = {
  Root: ComboboxRoot,
  Item: ComboboxItem,
};
