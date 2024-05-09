import React from "react";
import { Select } from "@/components/ui/select";

interface SelectExampleProps {
  disabled?: boolean;
}

export function SelectExample({ disabled }: SelectExampleProps) {
  return (
    <Select.Root disabled={disabled}>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="Theme" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item selected value="light">
          Light
        </Select.Item>
        <Select.Item selected={false} value="dark">
          Dark
        </Select.Item>
        <Select.Item selected={false} value="system">
          System
        </Select.Item>
      </Select.Content>
    </Select.Root>
  );
}
