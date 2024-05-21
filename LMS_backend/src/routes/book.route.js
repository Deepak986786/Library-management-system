import { Router } from "express";
import {
  deleteBookById,
  getAllBooks,
  updateBookById,
  addBook,
  getBookById,
} from "../controllers/book.controller.js";

const bookRoute = Router();
bookRoute.route("/getAll").get(getAllBooks);
bookRoute.route("/getBookById/:id").get(getBookById);
bookRoute.route("/addBook").post(addBook);
bookRoute.route("/deleteBookById/:id").delete(deleteBookById);
bookRoute.route("/updateBook/:id").put(updateBookById);

export default bookRoute;
