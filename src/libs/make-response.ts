import { ResponseError } from "./response-error.interface";

export const makeResponse = (
  data: any,
  message = 'Success',
  error?: ResponseError[]
) => ({
  data,
  message,
  error,
});

