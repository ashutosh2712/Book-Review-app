import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: mongoose.Schema.Types.String },
  author: { type: mongoose.Schema.Types.String },
  genre: { type: mongoose.Schema.Types.String },
  description: { type: mongoose.Schema.Types.String },
  average_rating: { type: mongoose.Schema.Types.Number },
  user_reviews: { type: mongoose.Schema.Types.Array },
  image: { type: mongoose.Schema.Types.String },
});

export const Books = mongoose.model("Books", bookSchema);
