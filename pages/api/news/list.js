import axios from "axios";

export default async function handler(req, res) {
  try {
    const request = await axios.get("http://localhost:8080/api/news/get");
    if (request.data.Success === true) {
      res.status(200).json(request.data.news);
    } else {
      throw new Error(request.data.errorMessage);
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
