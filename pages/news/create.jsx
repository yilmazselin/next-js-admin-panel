import React from "react";
import MainLayout from "../../src/components/MainLayout";
import NewsForm from "../../src/components/forms/news-form";

const Create = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-9">
        <h5 className="mb-1 text-2xl">Kategori Oluştur</h5>
        <p className="mb-5 text-slate-500">
          Haberi bu alandan oluşturabilirsiniz...
        </p>
        <NewsForm />
      </div>
    </MainLayout>
  );
};

export default Create;
