import { Manpower } from "../models";
import joi from "joi";
const manpowerController = {};
manpowerController.add = async (req, res, next) => {
  const manpowerSchema = joi.object({
    date: joi.date(),
    manpowerList: joi.array().items({})
  });
  const { error } = manpowerSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { date, manpowerList } = req.body;
  const newmanpowerList = new Manpower(date, manpowerList);
  try {
    const result = await newmanpowerList.save();
    return res.status(200).json({ success: true, result: result });
  } catch (error) {
    return next(error);
  }
};
manpowerController.delete = async (req, res, next) => {
  try {
    const result = await Manpower.findByIdAndDelet(req.params.id);
    return res.status(200).json({ success: true, result });
  } catch (error) {
    return next(error);
  }
};
manpowerController.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Manpower.findByIdAndUpdate(id, { $set: req.body });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
manpowerController.getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Manpower.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
manpowerController.getAll = async (req, res, next) => {
  try {
    const result = await Manpower.find();
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
export default manpowerController;
