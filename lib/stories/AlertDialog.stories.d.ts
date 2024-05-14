import type { StoryObj } from "@storybook/react";
import { AlertDialogExample } from "@/examples/AlertDialogExample";
declare const meta: {
    title: string;
    component: typeof AlertDialogExample;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
