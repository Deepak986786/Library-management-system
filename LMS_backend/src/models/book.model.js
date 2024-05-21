import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  title: String,
  price: Number,
  author: String,
  description: String,
  image: String,
  category: String,
  rating: Number,
  stock: Number,
});

export const Book = mongoose.model("Book", bookSchema);
