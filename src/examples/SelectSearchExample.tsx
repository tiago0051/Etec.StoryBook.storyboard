import React, { useState } from "react";
import { SelectSearch } from "@/components/element/selectSearchElement";

interface SelectSearchExampleProps {
  placeholder?: string;
  required?: boolean;
  label?: string;
  error?: string;
  disabled?: boolean;
}

export function SelectSearchExample({
  label,
  placeholder,
  required,
  error,
  disabled,
}: SelectSearchExampleProps) {
  const [searchText, setSearchText] = useState("");

  return (
    <SelectSearch.Root
      onChange={setSearchText}
      value={searchText}
      trigger={<p>Teste</p>}
      error={error}
      label={label}
      required={required}
      inputPlaceholder={placeholder}
      emptyMessage="Teste"
      disabled={disabled}
    >
      <SelectSearch.Item>Teste</SelectSearch.Item>
      <SelectSearch.ItemSkeleton />
    </SelectSearch.Root>
  );
}
