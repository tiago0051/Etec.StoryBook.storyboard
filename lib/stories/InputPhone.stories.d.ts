import type { StoryObj } from "@storybook/react";
import { InputPhone } from "@/components/ui/inputPhone";
declare const meta: {
    title: string;
    component: typeof InputPhone;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
