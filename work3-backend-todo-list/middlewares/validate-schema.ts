import { ZodError, type z } from "zod";
import express, { type Request, type Response } from "express";

export const createValidateSchema = (schema: z.ZodSchema<any>) => {
  return (req: Request, res: Response, next: Function) => {
    try {
      schema.parse(req.body);
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        return res.status(400).json(e.errors);
      }
      next(e);
    }
  };
};
