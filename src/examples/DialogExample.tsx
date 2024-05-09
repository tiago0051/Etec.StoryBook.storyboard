import React from "react";
import { Button, Dialog } from "..";

export function DialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog example</Dialog.Title>
          <Dialog.Description>Dialog example description</Dialog.Description>
        </Dialog.Header>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            urna non massa dictum dictum. Etiam sollicitudin nulla non volutpat
            placerat. Fusce fermentum, lectus eu viverra pretium, libero sapien
            semper.
          </p>
        </div>
        <Dialog.Footer>
          <Button>Save</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
