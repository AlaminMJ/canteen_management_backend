import mongoose from "mongoose";
const RequsitionSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    productList: { type: Array, required: ture },
  },
  { timestamps: true }
);

export default mongoose.model("Requsition", RequsitionSchema);
