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
      <div className="container mx-auto p-9">
        <h5 className="mb-1 text-2xl">Haberleri Listele</h5>
        <p className="mb-5 text-slate-500">
          Haberlerinizi bu alandan görüntüleyebilirsiniz...
        </p>
        <CreateTable actions={actions} columns={columns} data={data} />
      </div>
    </MainLayout>
  );
};

export default List;
