import mongoose from "mongoose";
const { Schema } = mongoose;
const RequsitionSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    productList: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        returnQuantity: { type: Number, default: 0 },
      },
    ],
  },
  { timestamp: true }
);

export default mongoose.model("Requsition", RequsitionSchema);
