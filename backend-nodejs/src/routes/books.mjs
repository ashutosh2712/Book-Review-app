import { Router } from "express";
import mongoose from "mongoose";
// import { Books } from "../utils/constant.mjs";
import multer from "multer";
import path from "path";
import { Books } from "../../mongoose/schemas/Books.mjs";
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
router.post("/api/books", upload.single("image"), async (request, response) => {
  const { title, author, genre, description } = request.body;

  const image = request.file.filename;

  // const image = "../uploads" + request.file.filename;

  const newBook = new Books({
    title,
    author,
    genre,
    description,
    image,
    user_reviews: [],
    average_rating: 0,
  });
  try {
    const savedBook = await newBook.save();
    return response.status(201).send(savedBook);
  } catch (err) {
    console.error(err);
    return response.statusCode(400);
  }
});

router.get("/api/books", async (request, response) => {
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

router.post("/api/books/:id/reviews", async (request, response) => {
  const { id } = request.params;
  const { rating, review } = request.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ err: "Invalid Book Id" });
  }

  if (!rating && !review) {
    return response.status(400).send({ err: "Review and rating are required" });
  }

  try {
    const book = await Books.findById(id);

    if (!book) {
      return response.status(404).send({ err: "Book Not Found" });
    }
    book.user_reviews.push(review);
    // book.average_rating
    const totalReviews = book.user_reviews.length;
    const newAvgRating =
      (book.average_rating * (totalReviews - 1) + rating) / totalReviews;
    book.average_rating = newAvgRating > 5 ? 5 : newAvgRating;

    await book.save();
    response.status(200).send({ message: "Review added successfully" });
  } catch (err) {
    response.status(500).send({ err: err.message });
  }
});

router.patch(
  "/api/books/:id/image",
  upload.single("image"),
  async (request, response) => {
    try {
      const { id } = request.params;
      const image = request.file.filename;

      const updatedBook = await Books.findByIdAndUpdate(
        id,
        { image },
        { new: true, runValidators: true }
      );

      if (!updatedBook) {
        return response.status(404).send({ err: "Book Not Found" });
      }

      response.status(200).send(updatedBook);
    } catch (err) {
      response.status(500).send({ err: err.message });
    }
  }
);
export default router;
