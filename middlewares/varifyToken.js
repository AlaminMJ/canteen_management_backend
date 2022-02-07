import jwt from "jsonWebToken";
import { jwt_secret } from "../config";
const varifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token || token.startWith("bearer")) {
    const realToken = token.split(" ")[1];
    try {
      const re = await jwt.sing(realToken, jwt_secret);
      req.user = re;
    } catch (error) {
      return next(error);
    }
  }
};

export default varifyToken;
