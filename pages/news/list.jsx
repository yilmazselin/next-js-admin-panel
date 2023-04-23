"use client";
import React, { useEffect, useState } from "react";
import CreateTable from "../../src/components/CreateTable";
import MainLayout from "../../src/components/MainLayout";

const List = () => {
  const [newsList, setNewsList] = useState([]);

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

  const actions = [
    {
      name: "Edit",
      color: "warning",
      size: "xs",
      type: "modal",
      click: (d) => {
        console.log("d", d);
        alert("Edit");
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

  const getAllNews = async () => {
    try {
      const request = await fetch("/api/news/list");
      if (request.status === 200) {
        const newsData = await request.json();

        //backendden gelen cevap formatlanması için formatNewsData fonksiyonuna gönderildi.
        const formattedData = formatNewsData(newsData);
        setNewsList(formattedData);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const formatNewsData = (data) => {
    const result = data.reduce((acc, current) => {
      acc.push({
        id: current._id,
        newsImage: "",
        category: current.category,
        title: current.title,
        newsOwner: current.author,
      });
      return acc;
    }, []);
    return result;
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto p-9">
        <h5 className="mb-1 text-2xl">Haberleri Listele</h5>
        <p className="mb-5 text-slate-500">
          Haberlerinizi bu alandan görüntüleyebilirsiniz...
        </p>
        <CreateTable actions={actions} columns={columns} data={newsList} />
      </div>
    </MainLayout>
  );
};

export default List;
