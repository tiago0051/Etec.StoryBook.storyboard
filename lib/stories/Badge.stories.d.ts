import type { StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";
declare const meta: {
    title: string;
    component: typeof Badge;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Primary: Story;
export declare const Destructive: Story;
export declare const Outline: Story;
export declare const Secondary: Story;
