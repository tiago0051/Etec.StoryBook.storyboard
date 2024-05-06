import type { StoryObj } from "@storybook/react";
import { PaginationElement } from "@/components/element/paginationElement";
declare const meta: {
    title: string;
    component: typeof PaginationElement;
    parameters: {};
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
