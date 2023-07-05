import { Router } from "express";

import { validateSchema } from "../middlewares/schema-middleware";
import { bookSchema } from "../schemas/book-schema";
import { reviewSchema } from "../schemas/review-schema";

import * as controller from "./../controllers/books-controller";

const bookRouter = Router();

bookRouter.get("/books", controller.getBooks);
bookRouter.get("/books/:id", controller.getBook);
bookRouter.post("/books", validateSchema(bookSchema), controller.createBook);
bookRouter.post("/books/reviews", validateSchema(reviewSchema), controller.reviewBook);

export default bookRouter;