import { Router } from "express";
import {
  productListControler,
  userController,
  billController,
  returnController,
  requsitionController,
  manpowerController
} from "../controllers";
const router = Router();
router.get("/", (req, res, next) => {
  res.send("ok vai thik ace sob.");
});

router.post("/register", userController.register);
router.post("/login", userController.login);
// productList
router.post("/products", productListControler.addProduct);
router.delete("/products/:id", productListControler.removeProduct);
router.patch("/products/:id", productListControler.updateProduct);
router.get("/products/:id", productListControler.oneProduct);
router.get("/products", productListControler.allProduct);

export default router;
