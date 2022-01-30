import mongoose from "mongoose";
const BillSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now() },
    billList: { type: Array, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Bill", BillSchema);
