import type { StoryObj } from "@storybook/react";
import { SelectSearchExample } from "@/examples/SelectSearchExample";
declare const meta: {
    title: string;
    component: typeof SelectSearchExample;
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
