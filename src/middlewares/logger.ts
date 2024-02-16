import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date();

  console.log('Request Logger: ', {
    TimeStamp: date,
    Method: `${req.method}: ${req.path}`,
    access_token: req.headers.authorization
  });

  next();
}