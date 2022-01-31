import mongoose from "mongoose";
const BillSchema = new mongoose.Schema(
  {
    date: { type: Date, require: true },
    billList: [
      {
        billName: { type: String, require: true },
        amount: { type: Number, require: true }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Bill", BillSchema);
