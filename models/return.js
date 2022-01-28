import mongoose from "mongoose";
const ReturnSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    billList: { type: Array, required: ture },
  },
  { timestamps: true }
);

export default mongoose.model("Return", ReturnSchema);
