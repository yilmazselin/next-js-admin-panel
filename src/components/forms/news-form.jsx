import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Input from "./Input";
import { Button } from "flowbite-react";

const NewsForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      author: "",
      category: "",
      tags: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Bu alan zorunludur"),
      content: Yup.string().required("Bu alan zorunludur"),
      author: Yup.string().required("Bu alan zorunludur"),
      category: Yup.string().required("Bu alan zorunludur"),
      tags: Yup.string().required("Bu alan zorunludur"),
    }),
    onSubmit: async (values) => {
      try {
        const requestBody = {
          title: values.title,
          content: values.content,
          author: values.author,
          category: values.category,
          tags: values.tags,
        };
        const request = await fetch("/api/news/create", {
          body: JSON.stringify(requestBody),
          method: "POST",
        });
        if (request.status === 200) {
          router.push("/news/list");
        }
      } catch (error) {
        console.log("CATCH", error);
      }
    },
  });
  return (
    <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
      <div className="flex flex-wrap  mb-6">
        <Input
          name="title"
          label="Haber Başlığı"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          errors={
            formik.touched.title && formik.errors.title && formik.errors.title
          }
        />
        <Input
          name="content"
          label="Haber İçeriği"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.content}
          errors={
            formik.touched.content &&
            formik.errors.content &&
            formik.errors.content
          }
        />
        <Input
          name="author"
          label="İçerik Sahibi"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
          errors={
            formik.touched.author &&
            formik.errors.author &&
            formik.errors.author
          }
        />
        <Input
          name="category"
          label="Haber Katerogirisi"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
          errors={
            formik.touched.category &&
            formik.errors.category &&
            formik.errors.category
          }
        />
        <Input
          name="tags"
          label="Haber Etiketleri"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tags}
          errors={
            formik.touched.tags && formik.errors.tags && formik.errors.tags
          }
        />
      </div>
      <Button size={"sm"} color={"success"} type="submit">
        Oluştur
      </Button>
    </form>
  );
};

export default NewsForm;
