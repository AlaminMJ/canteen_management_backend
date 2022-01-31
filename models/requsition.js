import mongoose from "mongoose";
const RequsitionSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    productList: [
      {
        product: { type: mongoose.type.objectId, ref: "Product" },
        quantity: { type: Number, required: true },
        returnQuantity: { type: Number, default: 0 }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Requsition", RequsitionSchema);
