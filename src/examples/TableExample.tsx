import React from "react";
import { Table } from "@/components/ui/table";

export function TableExample() {
  return (
    <Table.Root>
      <Table.Caption>A list of your recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>INVOICE</Table.Head>
          <Table.Head>STATUS</Table.Head>
          <Table.Head>METHOD</Table.Head>
          <Table.Head className="eteg-text-right">AMOUNT</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Karin Cristina M</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell className="eteg-text-right">$250.00</Table.Cell>
        </Table.Row>
        <Table.RowDropDown colSpan={4} isOpen>
          <p className="eteg-text-foreground eteg-font-lato eteg-font-semibold">
            Amount: <span className="eteg-font-normal">4</span>
          </p>
          <p className="eteg-text-foreground eteg-font-lato eteg-font-semibold">
            Customer: <span className="eteg-font-normal">Robert</span>
          </p>
        </Table.RowDropDown>
        <Table.Row>
          <Table.Cell>Karin Cristina M</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell className="eteg-text-right">$250.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Karin Cristina M</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell className="eteg-text-right">$250.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
