import joi from "joi";

import { ProductList } from "../models";
const productListControler = {};

// add product
productListControler.add = async (req, res, next) => {
  console.log(req.body);
  //  validation product data
  const productListScema = joi.object({
    productName: joi.string().required(),
    productCode: joi.string().required(),
    unit: joi.string().required(),
    imgurl: joi.string().required(),
  });
  const { error } = await productListScema.validateAsync(req.body);
  if (error) {
    return next(error);
  }

  const { productName, productCode, unit, imgurl } = req.body;
  const newProductList = new ProductList({
    productName,
    productCode,
    unit,
    imgurl,
  });
  try {
    const result = await newProductList.save();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

// delete product
productListControler.delete = async (req, res, next) => {};

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

productListControler.getAll = async (req, res, next) => {
  try {
    const result = await ProductList.find();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default productListControler;
