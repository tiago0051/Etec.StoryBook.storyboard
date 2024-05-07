import type { StoryObj } from "@storybook/react";
import { SelectExample } from "@/examples/SelectExample";
declare const meta: {
    title: string;
    component: typeof SelectExample;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
