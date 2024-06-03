import express from "express";
import bookRouter from "./routes/books.mjs";
import userRouter from "./routes/users.mjs";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

//databse connection
mongoose
  .connect("mongodb://localhost:27017/book_review")
  .then(console.log("Connected to mongoDb database!"))
  .catch((err) => console.log(`Error connecting to Db:${err}`));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bookRouter);
app.use(userRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express Server started..");
  console.log(`Listening to ${PORT}`);
  console.log("http://localhost:3000/");
});
