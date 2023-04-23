import axios from "axios";

export default async function handler(req, res) {
  try {
    const requestBody = JSON.parse(req.body);
    //requestBody frontend tarafından ( kullanıcıdan ) alınan veriler
    const { title, content, author, category, tags } = requestBody;

    //backende gönderilen veriler Sol taraf backend nasıl karşılıyor ise o şekilde olmalı. Sağ taraf kullanıcıdan nasıl alındıysa o şekilde olmalı.
    const request = await axios.post("http://localhost:8080/api/news/create", {
      title,
      content,
      author,
      category,
      tags,
    });

    if (request.data.status === "success") {
      res.status(200).json(request.data);
    } else {
      throw new Error("error");
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
