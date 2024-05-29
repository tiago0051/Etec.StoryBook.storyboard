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
    <div className="eteg-relative twp">
      {label && (
        <Label
          data-error={!!error}
          htmlFor={props.name}
          className="eteg-block eteg-mb-3"
        >
          {label}{" "}
          {props.required && (
            <span className="eteg-text-xl eteg-font-bold eteg-text-destructive eteg-leading-3">
              *
            </span>
          )}
        </Label>
      )}
      <div
        data-disabled={props.disabled}
        data-error={!!error}
        className={cn(
          "eteg-h-12 eteg-border eteg-border-input eteg-grid eteg-grid-flow-col eteg-gap-3 eteg-rounded-md eteg-px-5 disabled:eteg-cursor-not-allowed data-[disabled=true]:eteg-bg-muted data-[error=true]:eteg-border-destructive",
          className
        )}
      >
        <button
          className="eteg-grid eteg-grid-flow-col eteg-items-center eteg-gap-1 eteg-border-none eteg-bg-transparent eteg-text-muted-foreground"
          onClick={(e) => handleClickText(e)}
          type="button"
        >
          {Icon && <Icon size={16} />}
          <p className="eteg-truncate eteg-text-sm eteg-font-lato">
            {valueText || "Nenhum arquivo selecionado"}
          </p>
        </button>
        <input
          className="eteg-hidden eteg-peer/input"
          {...props}
          type="file"
          ref={inputRef}
        />
        <button
          type="button"
          className="eteg-text-sm eteg-bg-secondary eteg-h-7 eteg-rounded-md eteg-text-secondary-foreground eteg-w-32 eteg-self-center"
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
        <span className="eteg-absolute -eteg-bottom-[18px] eteg-text-xs eteg-text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}
