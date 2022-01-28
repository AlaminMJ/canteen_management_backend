import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    unit: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    quentity: { type: Number, min: 0, required: ture },
    purces_date: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("product", ProductSchema);
