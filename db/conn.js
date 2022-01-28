import mongoose from "mongoose";
import { DB_URL } from "../config";
const conn = () => {
  mongoose.connect(
    DB_URL,
    // process
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DB connect successful.");
      }
    }
  );
};

export default conn;
