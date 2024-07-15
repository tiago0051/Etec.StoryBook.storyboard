import React from "react";
import { SelectSearch } from "@/components/element/selectSearchElement";

export function SelectSearchExample() {
  return (
    <SelectSearch.Root trigger={<p>Teste</p>}>
      <SelectSearch.Item>Teste</SelectSearch.Item>
    </SelectSearch.Root>
  );
}
