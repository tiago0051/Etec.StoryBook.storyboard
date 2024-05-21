import type { StoryObj } from "@storybook/react";
import { AvatarExample } from "@/examples/AvatarExample";
declare const meta: {
    title: string;
    component: typeof AvatarExample;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
