import joi from "joi";
import { Requsition } from "../models";
const requsitionController = {};
requsitionController.add = async (req, res, next) => {
  const requsitionShcema = joi.object({
    date: joi.date().requried(),
    productList: joi.array().items({
      product: joi.string().requried(),
      quantity: joi.number().requried()
    })
  });

  // validation
  const { error } = requsitionShcema.validation(req.body);
  if (error) {
    return next(error);
  }
  const { date, productList } = req.body;
  const newRequsition = new Requsition({ date, productList });
  try {
    const result = await newRequsition.save();
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

requsitionController.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Requsition.findByIdAndDelete(id);
    return res.status(200).json(result);
  } catch (error) {
    return;
  }
};
requsitionController.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Requsition.findByIdAndUpdate(id, { $set: {} });
    return res.status(200).json(result);
  } catch (error) {
    return;
  }
};
requsitionController.getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Requsition.findById(id);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};
requsitionController.getAll = async (req, res, next) => {
  try {
    const result = await Requsition.find({}).limit(10).sort({ created_at: 1 });
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};
requsitionController.getByDate = async (req, res, next) => {
  const { date } = req.query;
  try {
    const result = await Requsition.find({ date });
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};
export default requsitionController;
