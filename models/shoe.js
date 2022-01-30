import mongoose from "mongoose";
const ShoeSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Shoe", ShoeSchema);
