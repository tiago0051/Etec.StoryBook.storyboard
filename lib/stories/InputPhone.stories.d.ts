/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<import("@/components/ui/inputPhone").InputPhoneProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Error: Story;
export declare const Disabled: Story;
