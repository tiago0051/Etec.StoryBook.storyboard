import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
export declare const Dialog: {
    Root: React.FC<DialogPrimitive.DialogProps>;
    Portal: React.FC<DialogPrimitive.DialogPortalProps>;
    Overlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Close: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
    Trigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Header: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Title: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
};
