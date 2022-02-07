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
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("image"); // 5mb

// add product
productListControler.add = async (req, res, next) => {
  //  validation product data
  handleMultipartData(req, res, async (error) => {
    if (error) {
      return next(error);
    }

    const filePath = req.file.path;
    const { name, imgurl, unit } = req.body;
    const newProductList = new ProductList({ name, imgurl: filePath, unit });
    try {
      const result = await newProductList.save();
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  });
};

// delete product
productListControler.delete = async (req, res, next) => {
  const document = await Product.findOneAndRemove({ _id: req.params.id });
  if (!document) {
    return next(new Error("Nothing to delete"));
  }
  // image delete
  const imagePath = document.imageurl;
  fs.unlink(`${appRoot}/${imagePath}`, (err) => {
    if (err) {
      return next(err);
    }
    return res.json(document);
  });
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

productListControler.getAll = async (req, res, next) => {
  try {
    const result = await ProductList.find();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default productListControler;
