import { InputFile } from "@/components/ui/inputFile";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FiFile } from "react-icons/fi";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/InputFile",
  component: InputFile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { type: "boolean", control: "boolean" },
    error: { type: "string", control: "text" },
    required: { type: "boolean", control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof InputFile>;

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
  },
};

export const Error: Story = {
  args: {
    error: "This is an error",
    label: "Button",
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: "Button",
  },
};
export const Icon: Story = {
  args: {
    icon: FiFile,
    label: "Button",
  },
};
