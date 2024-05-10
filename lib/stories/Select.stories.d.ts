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
export declare const Label: Story;
export declare const LabelRequired: Story;
export declare const Error: Story;
export declare const Placeholder: Story;
export declare const Disabled: Story;
