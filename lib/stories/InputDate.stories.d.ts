/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("@/components/ui/inputDate").InputDateProps & import("react").RefAttributes<HTMLInputElement>>;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Disabled: Story;
export declare const Error: Story;
export declare const Required: Story;
export declare const Placeholder: Story;
