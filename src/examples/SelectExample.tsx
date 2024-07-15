import { Select } from "@/components/element/selectElement";
import React, { useEffect, useState } from "react";

interface SelectExampleProps {
  disabled?: boolean;
  error?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export function SelectExample({
  disabled,
  error,
  label,
  placeholder,
  required,
}: SelectExampleProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <Select.Root
      disabled={disabled}
      label={label}
      error={error}
      placeholder={placeholder}
      required={required}
    >
      {loading ? (
        <Select.SkeletonItem />
      ) : (
        <>
          <Select.Item selected value="light">
            Light
          </Select.Item>
          <Select.Item selected={false} value="dark">
            Dark
          </Select.Item>
          <Select.Item selected={false} value="system">
            System
          </Select.Item>
        </>
      )}
    </Select.Root>
  );
}
