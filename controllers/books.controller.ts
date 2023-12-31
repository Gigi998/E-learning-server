import { Request, Response } from "express";
import bookService from "../services/book.service";

const getAllBooks = async ({ query }: any, res: Response) => {
  const books = await bookService.getAllBooks(query);
  if (!books) return res.status(204).json({ message: "No books in db" });
  return res.status(201).json(books);
};

const addNewBook = async ({ body: { title } }: Request, res: Response) => {
  try {
    const newBook = await bookService.addNewBook(title);
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
  }
};

const deleteBook = async ({ body: { id } }: Request, res: Response) => {
  const bookFounded = await bookService.findBookById(id);
  if (!bookFounded) return res.status(403).json({ message: "There is no book mathes your id" });

  await bookService.deleteBook(id);

  return res.status(200).json({ message: "Book deleted" });
};

const getSingleBook = async ({ params: { id } }: Request, res: Response) => {
  const bookFounded = await bookService.findBookById(id);
  if (!bookFounded) return res.status(403).json({ message: "There is no book mathes your id" });

  return res.status(201).json(bookFounded);
};

export { getAllBooks, addNewBook, deleteBook, getSingleBook };
