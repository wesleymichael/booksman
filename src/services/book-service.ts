import { notFoundError } from "../errors/not-found";
import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import * as booksRepository from "./../repositories/books-repository";

export async function getBooks() {
  return await booksRepository.getBooks();
}

export async function getBook(id: number) {
  const book = await booksRepository.getBook(id);
  if (!book) {
    throw notFoundError();
  }

  return book;
}

export async function createBook(book: CreateBook) {
  return await booksRepository.createBook(book);
}

export async function reviewBook(review: CreateReview) {
  await getBook(review.bookId); // check if the book exists

  return await booksRepository.reviewBook(review);
}