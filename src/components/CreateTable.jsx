import { Table } from "flowbite-react";
import React from "react";
import ActionButtons from "./buttons/ActionButtons";

const CreateTable = ({ columns, filters, actions, data, options }) => {
  return (
    <Table hoverable={true}>
      <Table.Head>
        {columns.map((item) => {
          return <Table.HeadCell key={item.field}>{item.name}</Table.HeadCell>;
        })}
        {actions && (
          <Table.HeadCell className="sticky right-0 bg-gray-50">
            Aksiyonlar
          </Table.HeadCell>
        )}
      </Table.Head>
      <Table.Body>
        {data &&
          data.map((dataItem, index) => {
            return (
              <Table.Row key={index} className="group">
                {columns.map((columnItem) => {
                  const { field } = columnItem;
                  const content = dataItem[field].toString();
                  return (
                    <Table.Cell key={columnItem.field}>
                      {content}
                      {/* {columnItem.copy && <CopyButton text={content} />} */}
                    </Table.Cell>
                  );
                })}
                {actions && (
                  <Table.Cell className="sticky right-0">
                    <ActionButtons actions={actions} data={dataItem} />
                  </Table.Cell>
                )}
              </Table.Row>
            );
          })}
      </Table.Body>
    </Table>
  );
};

export default CreateTable;
