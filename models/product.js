import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    product: { type: mongoose.type.ObjectId, ref: "ProductList" },
    unit: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    quentity: { type: Number, min: 0, required: true },
    purces_date: { type: Date, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("product", ProductSchema);
