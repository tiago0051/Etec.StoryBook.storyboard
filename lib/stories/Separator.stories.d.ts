import type { StoryObj } from "@storybook/react";
import { SeparatorExample } from "@/examples/SeparatorExample";
declare const meta: {
    title: string;
    component: typeof SeparatorExample;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
