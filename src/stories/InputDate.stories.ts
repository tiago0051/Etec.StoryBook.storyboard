import type { Meta, StoryObj } from "@storybook/react";
import { InputDate } from "@/components/ui/inputDate";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/InputDate",
  component: InputDate,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof InputDate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Button",
    value: "teste",
  },
};

export const Error: Story = {
  args: {
    error: "This is an error",
    label: "Button",
    value: "teste",
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: "Button",
    value: "teste",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "teste",
    label: "Button",
  },
};
