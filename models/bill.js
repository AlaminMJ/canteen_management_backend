import mongoose from "mongoose";
const BillSchema = new mongoose.Schema(
  {
    date: { type: Date, default: date.now() },
    billList: { type: Array, required: ture },
  },
  { timestamps: true }
);

export default mongoose.model("Bill", BillSchema);
