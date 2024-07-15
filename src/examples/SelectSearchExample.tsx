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
  const items = new Array(5)
    .fill({})
    .map((_v, index) => ({ name: `Teste${index + 1}` }));

  const [searchText, setSearchText] = useState("");
  const [itemSelected, setItemSelected] = useState<{
    name: string;
  } | null>(null);

  return (
    <SelectSearch.Root
      onChange={setSearchText}
      onSelect={(index) => setItemSelected(items[index])}
      value={searchText}
      trigger={<p>{itemSelected?.name}</p>}
      error={error}
      label={label}
      required={required}
      inputPlaceholder={placeholder}
      emptyMessage="Teste"
      disabled={disabled}
    >
      {items.map((value) => (
        <p key={value.name}>{value.name}</p>
      ))}
      <SelectSearch.ItemSkeleton />
    </SelectSearch.Root>
  );
}
