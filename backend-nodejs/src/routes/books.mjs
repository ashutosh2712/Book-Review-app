import { Router } from "express";
import { Books } from "../utils/constant.mjs";

const router = Router();

router.get("/api/books", (request, response) => {
  console.log(request.query);
  const { author, genre, title } = request.query;
  let filteredBooks = Books;
  if (author) {
    filteredBooks = filteredBooks.filter((book) =>
      book.author.includes(author)
    );
  }
  if (genre) {
    filteredBooks = filteredBooks.filter((book) => book.genre.includes(genre));
  }
  if (title) {
    filteredBooks = filteredBooks.filter((book) => book.title.includes(title));
  }

  response.status(200).send(filteredBooks);
});

router.get("/api/books/:id", (request, response) => {
  const parseId = parseInt(request.params.id);
  if (isNaN(parseId)) {
    return response.status(400).send({ err: "Invalid Book Id" });
  }
  const findbook = Books.find((book) => book._id === parseId);
  if (!findbook) {
    return response.status(404).send({ err: "Book Not found" });
  }

  return response.send(findbook);
});
export default router;
