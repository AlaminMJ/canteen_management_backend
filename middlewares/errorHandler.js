import { ValidationError } from "joi";
import { CustomErrorHandler } from "../services";
const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = { message: err.message };
  if (err instanceof ValidationError) {
    statusCode = 403;
    data = { message: err.message };
  }
  if (err instanceof CustomErrorHandler) {
    statusCode = err.status;
    data = { message: err.message };
  }

  return res.status(statusCode).json(data);
};

export default errorHandler;
