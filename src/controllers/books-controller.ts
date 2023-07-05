import { Request, Response } from "express";
import httpStatus from "http-status";

import { isIdValid } from "../utils/id-validator";
import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import * as bookService from "./../services/book-service";

export async function getBooks(req: Request, res: Response) {
  const books = await bookService.getBooks();
  res.send(books);
}

export async function getBook(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  const book = await bookService.getBook(id);
  res.send(book);
}

export async function createBook(req: Request, res: Response) {
  const book = req.body as CreateBook;
  await bookService.createBook(book);
  res.sendStatus(httpStatus.CREATED);
}

export async function reviewBook(req: Request, res: Response) {
  const review = req.body as CreateReview;

  if (!isIdValid(review.bookId)) return res.sendStatus(httpStatus.BAD_REQUEST);

  await bookService.reviewBook(review);
  res.sendStatus(httpStatus.OK);
}