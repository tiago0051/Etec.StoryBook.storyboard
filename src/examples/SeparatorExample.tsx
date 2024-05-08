import React from "react";
import { Separator } from "@/components/ui/separator";

export function SeparatorExample() {
  return (
    <div className="twp">
      <div className="eteg-space-y-1">
        <h4 className="eteg-text-sm eteg-font-medium eteg-leading-none">
          Radix Primitives
        </h4>
        <p className="eteg-text-sm eteg-text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="eteg-my-4" />
      <div className="eteg-flex h-5 eteg-items-center eteg-space-x-4 eteg-text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" className="h-5" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
