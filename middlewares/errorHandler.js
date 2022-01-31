import { ValidationError } from "joi";
import { CustomeError } from "../services";
const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = { message: "Internal server error" };
  if (err instanceof ValidationError) {
    statusCode = 403;
    data = { message: err.message };
  }
  if (err instanceof CustomeError) {
    statusCode = err.status;
    data = { message: err.message };
  }

  return res.status(statusCode).json(data);
};
export default errorHandler;
