import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  borrowedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  returnedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export const User = mongoose.model("User", userSchema);
