import type { StoryObj } from "@storybook/react";
import { Skeleton } from "..";
declare const meta: {
    title: string;
    component: typeof Skeleton;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
