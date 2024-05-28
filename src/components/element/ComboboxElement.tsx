import * as React from "react";

import { Button, ButtonProps } from "../ui/button";
import { Popover } from "@/components/ui/popover";
import { FiSearch } from "react-icons/fi";
import { InputText } from "../ui/inputText";
import { cn } from "@/lib/utils";
interface PopOverContentProps {
  children: React.ReactNode;
  width?: string;
}

const PopOverContent = ({ children, width }: PopOverContentProps) => {
  React.useEffect(() => {
    const element = document.getElementById("popover");

    if (width) element!.style.width = `${width}px`;
  }, []);
  return <div className="eteg-grid eteg-w-96">{children}</div>;
};

interface ComboboxRootProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

function ComboboxRoot({ children, ...props }: ComboboxRootProps) {
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
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild onClick={(e) => e.preventDefault()}>
          <div
            className="eteg-relative eteg-border eteg-border-input eteg-rounded-md eteg-overflow-hidden"
            ref={divRef}
          >
            <InputText
              icon={FiSearch}
              inputClassName="eteg-border-none"
              onKeyDown={(e) => {
                setValue(e.currentTarget.value);
                if (e.key === "Enter") openPopover(e.currentTarget.value);
              }}
              {...props}
            />
            <Button
              className="eteg-absolute eteg-right-0 eteg-top-0 eteg-rounded-none eteg-w-32"
              onClick={() => openPopover(value)}
            >
              Buscar
            </Button>
          </div>
        </Popover.Trigger>
        <Popover.Content
          className="p-0 popover eteg-box-border"
          id="popover"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <PopOverContent width={width}>{children}</PopOverContent>
        </Popover.Content>
      </Popover.Root>
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

ComboboxItem.displayName = "ComboboxItem";

export const Combobox = {
  Root: ComboboxRoot,
  Item: ComboboxItem,
};
