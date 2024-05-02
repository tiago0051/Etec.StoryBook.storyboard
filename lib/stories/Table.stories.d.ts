import type { StoryObj } from "@storybook/react";
import { TableExample } from "./TableExample";
declare const meta: {
    title: string;
    component: typeof TableExample;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
