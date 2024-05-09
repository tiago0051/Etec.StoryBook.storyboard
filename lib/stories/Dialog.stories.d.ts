import type { StoryObj } from "@storybook/react";
import { DialogExample } from "@/examples/DialogExample";
declare const meta: {
    title: string;
    component: typeof DialogExample;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
