import React, { MouseEvent, InputHTMLAttributes, useRef } from "react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { Label } from "./label";

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  valueText?: string;
  label?: string;
  error?: string;
  onRemove?: () => void;
  icon?: IconType;
}

export function InputFile({
  valueText,
  label,
  error,
  onRemove,
  className,
  icon: Icon,
  ...props
}: InputFileProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClickText(e: MouseEvent) {
    e.preventDefault();

    const { files } = inputRef.current!;

    if (files!.length === 1) {
      const file = files![0];

      if (file) {
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name ? "Arquivo" : "";
        link.target = "_blank";
        link.click();
      }
    }
  }

  return (
    <div className="relative twp">
      {label && (
        <Label data-error={!!error} htmlFor={props.name} className="block mb-3">
          {label}{" "}
          {props.required && (
            <span className="text-xl font-bold text-destructive leading-3">
              *
            </span>
          )}
        </Label>
      )}
      <div
        data-disabled={props.disabled}
        data-error={!!error}
        className={cn(
          "h-12 border border-input grid grid-flow-col gap-3 rounded-md px-5 disabled:cursor-not-allowed data-[disabled=true]:bg-muted data-[error=true]:border-destructive",
          className
        )}
      >
        <button
          className="grid grid-flow-col items-center gap-1 border-none bg-transparent text-muted-foreground"
          onClick={(e) => handleClickText(e)}
          type="button"
        >
          {Icon && <Icon size={16} />}
          <p className="truncate text-sm font-lato">
            {valueText || "Nenhum arquivo selecionado"}
          </p>
        </button>
        <input
          className="hidden peer/input"
          {...props}
          type="file"
          ref={inputRef}
        />
        <button
          type="button"
          className="text-sm bg-secondary h-7 rounded-md text-secondary-foreground w-32 self-center"
          onClick={(e) => {
            if (valueText) {
              e.preventDefault();
              inputRef.current!.value = "";
              onRemove && onRemove();
            } else {
              inputRef.current!.click();
            }
          }}
        >
          {valueText ? "Remover" : "Selecionar"}
        </button>
      </div>
      {error && (
        <span className="absolute -bottom-5 text-xs text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}
