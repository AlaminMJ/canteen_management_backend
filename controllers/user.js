import Joi from "joi";
import bcript from "bcrypt";
import { User } from "../models";

const userController = {};
userController.register = async (req, res, next) => {
  const userSchame = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    confrimPassword: Joi.ref("password"),
  });

  const { error } = await userSchame.validateAsync(req.body);
  if (error) {
    return next(error);
  }
  const { name, email, password } = req.body;
  const hashPassword = await bcript.hash(password, 10);

  const user = new User({ name, email, password: hashPassword });
  try {
    const result = await user.save();
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

userController.login = async (req, res, next) => {
  const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = await userSchema.validateAsync(req.body);
  if (error) {
    return next(error);
  }
  const { email, password } = req.body;
  try {
    const result = await User.findOne({ email });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default userController;
