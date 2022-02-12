import express from "express";
import cors from "cors";
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

// error middleware
app.use(errorHandler);
// app.use(varifyToken);
// Server Listing
app.get("/", (req, res) => {
  res.send("ok vai");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});
