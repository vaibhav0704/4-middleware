import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { makeResponse } from "libs/make-response";
import { ResponseError } from "libs/response-error.interface";

export function validationData(Schema: any) {
  const f = async (
    _req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    let object = new Schema();
    Object.keys(_req.body).map(key => {
      object[key] = _req.body[key];
    })
    const errors = await validate(object, {
      skipMissingProperties: false,
    });

    if (errors.length) {
      const err: ResponseError[] = [];


      errors.forEach(error => {
        if (error.constraints) {
          Object.values(error.constraints).forEach(msg => {
            err.push({ message: msg });
          })
        }
      });

      _res.send(makeResponse(
        null,
        'request validation failed',
        err
      ))
        .status(400);

    } else {
      next();
    }
  }

  return f;
}