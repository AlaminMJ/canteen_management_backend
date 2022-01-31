import joi from "joi";
import { ProductList } from "../models";
const productListControler = {};
// add product
productListControler.add = async (req, res, next) => {
  //  validation product data

  const productListSchema = joi.object({
    name: joi.string().required(),
    imgurl: joi.string().required(),
    unit: joi.string().required(),
  });
  const { error } = productListSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { name, imgurl, unit } = req.body;
  const newProductList = new ProductList({ name, imgurl, unit });
  try {
    const result = await newProductList.save();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
// delete product
productListControler.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await ProductList.findByIdAndDelete(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
// update product
productListControler.update = async (req, res, next) => {
  const { id } = req.params;
  //  validation product data
  const productSchema = joi.object({
    name: joi.string(),
    imgurl: joi.string(),
    unit: joi.string(),
  });
  const { error } = productSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { name, imgurl, unit } = req.body;
  try {
    const result = await ProductList.findByIdAndUpdate(
      id,
      {
        $set: { name, imgurl, unit },
      },
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
productListControler.getOne = async (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const result = await ProductList.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
// productListControler.getOne = async (req, res, next) => {
//   const { date } = req.params;
//   try {
//     const result = await ProductList.find({ date });
//     return res.status(200).json(result);
//   } catch (error) {
//     return next(error);
//   }
// };
productListControler.getAll = async (req, res, next) => {
  try {
    const result = await ProductList.find();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default productListControler;
