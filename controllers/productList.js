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
  });

};

// delete product
productListControler.delete = async (req, res, next) => {
  const document = await Product.findOneAndRemove({ _id: req.params.id });
  if (!document) {
      return next(new Error('Nothing to delete'));
  }
  // image delete
  const imagePath = document.imageurl;
  // http://localhost:5000/uploads/1616444052539-425006577.png
  // approot/http://localhost:5000/uploads/1616444052539-425006577.png
  fs.unlink(`${appRoot}/${imagePath}`, (err) => {
      if (err) {
          return next(CustomErrorHandler.serverError());
      }
      return res.json(document);
  });
};

// update product
productListControler.update = async (req, res, next) => {
  handleMultipartData(req, res, async (err) => {
    if (err) {
        return next(CustomErrorHandler.serverError(err.message));
    }
    let filePath;
    if (req.file) {
        filePath = req.file.path;
    }

    // validation
    const productSchema = joi.object({
      name: joi.string(),
      unit: joi.string()
    });
    const { error } = productSchema.validate(req.body);
    if (error) {
        // Delete the uploaded file
        if (req.file) {
            fs.unlink(`${appRoot}/${filePath}`, (err) => {
                if (err) {
                    return next(
                        CustomErrorHandler.serverError(err.message)
                    );
                }
            });
        }

        return next(error);
        // rootfolder/uploads/filename.png
    }

    const { name, unite } = req.body;
    let document;
    try {
        document = await Product.findOneAndUpdate(
            { _id: req.params.id },
            {
                name,
                unite,
                ...(req.file && { image: filePath }),
            },
            { new: true }
        );
    } catch (err) {
        return next(err);
    }
    res.status(201).json(document);
});





   
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
