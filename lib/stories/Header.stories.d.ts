import { Header } from "@/components/ui/header";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: typeof Header;
    parameters: {};
    tags: string[];
    argTypes: {};
    args: {
        onBackClick: import("@vitest/spy").Mock<[], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
