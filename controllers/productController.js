import joi from "joi";

const productControler = {};
// add product
productControler.addProduct = (req, res, next) => {
  //  validation product data
  const productSchema = joi.object({
    productName: joi.string().required(),
    imgurl: joi.string().required(),
    unite: joi.string.required(),
  });
  const { error } = joi.valid(productSchema, req.body);
  if (error) {
    return next(error);
  }
};
// delete product
productControler.removeProduct = (req, res, next) => {
  const { id } = req.query;
  
};
// update product
productControler.updateProduct = (req, res, next) => {};
productControler.oneProduct = (req, res, next) => {};
productControler.allProduct = (req, res, next) => {};

export default productControler;
