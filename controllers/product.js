import joi from "joi";
import { Product } from "../models";
const productControler = {};

productControler.add = async (req, res, next) => {
  const { id } = req.params;
  const productSchema = joi.object({
    price: joi.number().required(),
    quantity: joi.number().required()
  });
  const { error } = productSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { price, quantity } = req.body;
  const newProduct = new Product({ product: id, price, quantity });
  try {
    const result = await newProduct.save();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
// delete
productControler.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Product.findByIdAndDelete(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
productControler.update = async (req, res, next) => {
  const { id } = req.params;
  //  validation product data
  const productSchema = joi.object({
    price: joi.number().required(),
    quentity: joi.number().required()
  });
  const { error } = joi.valid(productSchema, req.body);
  if (error) {
    return next(error);
  }
  const { product, price, quentity } = req.body;
  try {
    const result = await Product.findByIdAndUpdate(id, {
      $set: { price, quentity }
    });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
productControler.getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Product.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
productControler.getAll = async (req, res, next) => {
  try {
    const result = await Product.find();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default productControler;
