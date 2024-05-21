import React from "react";
import { Avatar } from "@/components/ui/avatar";

export function AvatarExample() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/shadcn.png" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  );
}
