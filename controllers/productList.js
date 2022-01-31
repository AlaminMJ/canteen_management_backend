import joi from "joi";

const productListControler = {};
// add product
productListControler.add = (req, res, next) => {
  //  validation product data
  const productSchema = joi.object({
    productName: joi.string().required(),
    imgurl: joi.string().required(),
    unite: joi.string.required()
  });
  const { error } = joi.valid(productSchema, req.body);
  if (error) {
    return next(error);
  }
};
// delete product
productListControler.delete = async (req, res, next) => {
  const { id } = req.query;
};
// update product
productListControler.update= (req, res, next) => {};
productListControler.getOne = (req, res, next) => {};
productListControler.getAll = (req, res, next) => {};

export default productListControler;
