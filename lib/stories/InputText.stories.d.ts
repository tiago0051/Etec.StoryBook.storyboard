/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("@/components/ui/inputText").InputProps & import("react").RefAttributes<HTMLInputElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        disabled: {
            type: "boolean";
            control: "boolean";
        };
        error: {
            type: "string";
            control: "text";
        };
        required: {
            type: "boolean";
            control: "boolean";
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<[event: import("react").MouseEvent<HTMLInputElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Disabled: Story;
export declare const Error: Story;
export declare const Required: Story;
export declare const Placeholder: Story;
