import mongoose from "mongoose";

const ProductListSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    unit: { type: String, required: true },
    imgurl: { type: String, required: true },
  },
  { timestamps: true }
);
// ok
export default mongoose.model("ProductList", ProductListSchema);
//  name: joi.string().required(),
//   imgurl: joi.string().required(),
//   unit: joi.string().required(),
