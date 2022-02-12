import express from "express";
import { PORT } from "./config";
import cors from "cors";
import path from "path";
import mainRoute from "./routes";
import conn from "./db/conn";
import { errorHandler, varifyToken } from "./middlewares";
const app = express();
// database connect
conn();
// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", mainRoute);
global.appRoot = path.resolve(__dirname);
// error middleware
app.use(errorHandler);
// app.use(varifyToken);
// Server Listing
app.get("/", (req, res) => {
  res.send("ok vai");
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is runing on ${PORT}`);
});
//
