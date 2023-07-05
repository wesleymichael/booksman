import joi from "joi";

import { CreateReview } from "../protocols/review";

const REQUIRED_REVIEW_LENGTH = 100;

export const reviewSchema = joi.object<CreateReview>({
  bookId: joi.number().required(),
  grade: joi.number().min(0).max(10).required(),
  review: joi.string().min(REQUIRED_REVIEW_LENGTH).required()
});