import React from "react";
import CreateTable from "../../src/components/CreateTable";
import MainLayout from "../../src/components/MainLayout";

const List = () => {
  const columns = [
    {
      name: "Haber Başlığı",
      field: "title",
    },
    {
      name: "Haber Sahibi",
      field: "newsOwner",
    },
    {
      name: "Kategori",
      field: "category",
    },
    {
      name: "Haber Görseli",
      field: "newsImage",
    },
  ];

  const data = [
    {
      id: 0,
      newsImage: "örnek haber görseli",
      category: "örnek haber kategorisi",
      title: "örnek haber başlığı",
      newsOwner: "örnek haber sahibi",
    },
  ];

  const actions = [
    {
      name: "Edit",
      color: "warning",
      size: "xs",
      type: "modal",
      click: (d) => {
        alert(d);
      },
    },
    {
      name: "Delete",
      color: "failure",
      size: "xs",
      type: "modal",
      confirmOptions: {
        title: "Emin misiniz",
        content: "Siliniyor...",
      },
      click: (d) => {
        alert(d);
      },
    },
  ];

  return (
    <MainLayout>
      <CreateTable actions={actions} columns={columns} data={data} />
    </MainLayout>
  );
};

export default List;
