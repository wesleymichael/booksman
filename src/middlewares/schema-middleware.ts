import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import httpStatus from "http-status";

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false })
    if (validation.error) {
      const errors = validation.error.details.map(detail => detail.message)
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors)
    }

    next();
  }
}