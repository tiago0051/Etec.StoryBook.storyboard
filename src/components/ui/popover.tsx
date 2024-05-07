import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "eteg-z-50 eteg-w-72 eteg-rounded-md eteg-border eteg-bg-popover eteg-p-4 eteg-text-popover-foreground eteg-shadow-md eteg-outline-none data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0 data-[state=closed]:eteg-zoom-out-95 data-[state=open]:eteg-zoom-in-95 data-[side=bottom]:eteg-slide-in-from-top-2 data-[side=left]:eteg-slide-in-from-right-2 data-[side=right]:eteg-slide-in-from-left-2 data-[side=top]:eteg-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
