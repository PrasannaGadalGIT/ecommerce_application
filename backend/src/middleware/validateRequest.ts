import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorMessages = result.error;
    return res.status(400).json({ message: 'Validation failed', errors: errorMessages });
  }
  req.body = result.data;
  next();
};
