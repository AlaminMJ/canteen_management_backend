import mongoose from "mongoose";
const { Schema } = mongoose;
const ProductSchema = new mongoose.Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "ProductList" },
    price: { type: Number, min: 0, required: true },
    quantity: { type: Number, min: 0, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
