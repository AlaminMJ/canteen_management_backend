import joi from "joi";
import { Bill } from "../models";
const billController = {};
billController.add = async (req, res, next) => {
  const billShcema = joi.object({
    date: joi.date().required(),
    billList: joi.array().items({
      billName: joi.string().required(),
      amount: joi.number().required()
    })
  });
  const { error } = billShcema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { date, billList } = req.body;
  const newBill = new Bill({ date, billList });
  try {
    const result = await newBill.save();
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};
billController.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Bill.fineByIdAndDelete(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

billController.update = async (req, res, next) => {
  const { id } = req.params;
  const billShcema = joi.object({
    date: joi.date().required(),
    billList: joi.array().items({
      billName: joi.string().required(),
      amount: joi.number().required()
    })
  });
  const { error } = billShcema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { date, billList } = req.body;

  try {
    const result = await Bill.fineByIdAndDelete(id, {
      $set: { date, billList }
    });
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};
billController.getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Bill.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
billController.getAll = async (req, res, next) => {
  try {
    const result = await Bill.find({});
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
billController.getAll = async (req, res, next) => {
  const { date } = req.qurey;
  try {
    const result = await Bill.find({ date });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default billController;
