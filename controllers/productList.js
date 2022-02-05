import joi from "joi";
import multer from "multer";
import path from "path";
import fs from "fs";
import { ProductList } from "../models";
const productListControler = {};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    // 3746674586-836534453.png
    cb(null, uniqueName);
  }
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 }
}).single("image"); // 5mb

// add product
productListControler.add = async (req, res, next) => {
  //  validation product data
  handleMultipartData(req, res, (error) => {
    if (error) {
      return next(CustomErrorHandler.serverError(err.message));
    }
    const filePath = req.file.path;
  
  const productListSchema = joi.object({
    name: joi.string().required(),
    unit: joi.string().required()
  });
  const { error } = productListSchema.validate(req.body);
  if (error) {
    // Delete the uploaded file
    fs.unlink(`${appRoot}/${filePath}`, (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
    });

    return next(error);
    // rootfolder/uploads/filename.png
  }
  const { name, imgurl, unit } = req.body;
  const newProductList = new ProductList({ name, imgurl: filePath, unit });
  try {
    const result = await newProductList.save();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }});
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
    unit: joi.string()
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
        $set: { name, imgurl, unit }
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
