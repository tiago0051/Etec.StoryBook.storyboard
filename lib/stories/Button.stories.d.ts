/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("@/components/ui/button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            type: "string";
            options: string[];
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<[event: import("react").MouseEvent<HTMLButtonElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Outline: Story;
export declare const Tertiary: Story;
export declare const Ghost: Story;
export declare const Link: Story;
export declare const Destructive: Story;
export declare const Disabled: Story;
