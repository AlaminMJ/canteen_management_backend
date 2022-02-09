import mongoose from "mongoose";

const ProductListSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productCode: { type: Number, required: true },
    unit: { type: String, required: true },
    imgurl: { type: String },
  },
  { timestamps: true }
);
// ok
export default mongoose.model("ProductList", ProductListSchema);
