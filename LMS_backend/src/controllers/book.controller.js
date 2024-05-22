import { Book } from "../models/book.model.js";
import { User } from "../models/user.model.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const borrowBookById = async (req, res) => {
  const userId = req.body.userId;
  const bookId = req.params.id;

  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    if (book.stock < 1) {
      return res.status(400).send({ message: "Book out of stock" });
    }

    user.borrowedBooks.push(bookId);
    book.stock -= 1;

    await user.save();
    await book.save();

    res.status(200).send({ message: "Book borrowed successfully", user });
  } catch (error) {
    res.status(500).send({ message: "Error borrowing book", error });
  }
};

const returnBookById = async (req, res) => {
  const userId = req.body.userId;
  const bookId = req.params.id;

  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    const bookIndex = user.borrowedBooks.indexOf(bookId);
    if (bookIndex === -1) {
      return res.status(400).send({ message: "Book not borrowed by the user" });
    }

    user.borrowedBooks.splice(bookIndex, 1);
    book.stock += 1;

    await user.save();
    await book.save();

    res.status(200).send({ message: "Book returned successfully", user });
  } catch (error) {
    res.status(500).send({ message: "Error returning book", error });
  }
};

export {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  borrowBookById,
  returnBookById,
};
