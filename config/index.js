import dotenv from "dotenv";
dotenv.config();
export const { PORT, DEBUG_MODE, DB_URL, jwt_secret } = process.env;
