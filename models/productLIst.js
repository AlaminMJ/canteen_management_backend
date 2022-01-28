import mongoose from "mongoose";

const ProductListSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    unit: { type: String, required: true }, 
    img_url: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("productList", ProductListSchema);
