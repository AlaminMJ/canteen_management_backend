import { Shoe } from "../models";
import joi from "joi";
const shoeController = {};
shoeController.add = async (req, res, next) => {
  const shoeScema = joi.object({
    id: joi.string().requried(),
    name: joi.string().requried(),
    date: joi.date().requried()
  });
  const { error } = shoeScema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { id, name, date } = req.body;
  const newshoe = new Shoe({ id, name, date });
  try {
    const result = await newshoe.save();
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

shoeController.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Shoe.findByIdAndDelete(id);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
// update
shoeController.update = async (req, res, next) => {
  const shoeScema = joi.object({
    id: joi.string(),
    name: joi.string(),
    date: joi.date()
  });
  const { error } = shoeScema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { id, name, date } = req.body;
  try {
    const result = await Shoe.findbyIdupdate({}, { $set: { id, name, date } });
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

shoeController.getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Shoe.find({ id }).short("date", -1);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
shoeController.getAll = async (req, res, next) => {
  try {
    const result = await Shoe.find({});
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default shoeController;
