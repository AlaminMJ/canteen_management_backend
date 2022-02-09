import mongoose from "mongoose";
const ShoeSchema = new mongoose.Schema(
  {
    date: { type:String, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Shoe", ShoeSchema);
