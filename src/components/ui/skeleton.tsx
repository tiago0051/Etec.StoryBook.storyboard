import React from "react";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "eteg-animate-pulse eteg-rounded-md eteg-bg-input/30 eteg-h-4",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
