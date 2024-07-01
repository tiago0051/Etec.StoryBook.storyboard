import React, { useState } from "react";
import { Combobox } from "@/components/element/comboboxElement";

const items = [
  {
    id: 0,
    name: "Test",
  },
  {
    id: 1,
    name: "Test2",
  },
  {
    id: 2,
    name: "Test3",
  },
];

export function ComboboxExample() {
  const [textFilter, setTextFilter] = useState("");
  const itemsFiltered = items.filter((item) =>
    item.name.toLowerCase().includes(textFilter.toLowerCase())
  );

  return (
    <Combobox.Root
      onChange={(e) => setTextFilter(e.currentTarget.value)}
      value={textFilter}
      placeholder="Search item"
    >
      {itemsFiltered.map((item) => (
        <Combobox.Item key={item.id}>{item.name}</Combobox.Item>
      ))}
    </Combobox.Root>
  );
}
