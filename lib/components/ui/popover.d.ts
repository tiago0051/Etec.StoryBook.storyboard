import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
export declare const Popover: {
    Root: React.FC<PopoverPrimitive.PopoverProps>;
    Trigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
