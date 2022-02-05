import express from "express";
import { PORT } from "./config";
import cors from "cors";
import path from "path";
import mainRoute from "./routes";
import conn from "./db/conn";
import { errorHandler } from "./middlewares";
const app = express();
conn();
// middlewares

app.use(express.json());
app.use(cors());
app.use("/api", mainRoute);
global.appRoot = path.resolve(__dirname);
// error middleware
app.use(errorHandler);
// Server Listing
app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});
