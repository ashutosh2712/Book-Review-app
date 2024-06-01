import express from "express";
import bookRouter from "./routes/books.mjs";
import userRouter from "./routes/users.mjs";
const app = express();

app.use(express.json());
app.use(bookRouter);
app.use(userRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express Server started..");
  console.log(`Listening to ${PORT}`);
  console.log("http://localhost:3000/");
});
