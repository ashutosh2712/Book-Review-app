import { Router } from "express";
import mongoose from "mongoose";
// import { Books } from "../utils/constant.mjs";
import { Books } from "../../mongoose/schemas/Books.mjs";
const router = Router();

router.post("/api/books", async (request, response) => {
  const { body } = request;
  const newBook = new Books(body);
  try {
    const savedBook = await newBook.save();
    return response.status(201).send(savedBook);
  } catch (err) {
    console.log(err);
    return response.statusCode(400);
  }
});

router.get("/api/books", async (request, response) => {
  console.log(request.query);
  const { author, genre, title } = request.query;
  const query = {};
  if (author) {
    query.author = new RegExp(author, "i");
  }
  if (genre) {
    query.genre = new RegExp(genre, "i");
  }
  if (title) {
    query.title = new RegExp(title, "i");
  }

  try {
    const filteredBooks = await Books.find(query);
    response.status(200).send(filteredBooks);
  } catch (err) {
    response.status(500).send({ message: err.message });
  }
});

router.get("/api/books/:id", async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ err: "Invalid Book Id" });
  }
  try {
    const book = await Books.findById(id);
    if (!book) {
      return response.status(404).send({ err: "Book Not Found" });
    }
    return response.send(book);
  } catch (err) {
    return response.status(500).send({ err: err.message });
  }
});
export default router;
