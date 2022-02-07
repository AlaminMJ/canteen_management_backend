import { Router } from "express";
import { auth } from "../middlewares";
import {
  productListControler,
  userController,
  billController,
  requsitionController,
  manpowerController,
  shoeController,
  productControler
} from "../controllers";
import Product from "../models/product";
const router = Router();
router.get("/", (req, res, next) => {
  res.send("ok vai thik ace sob.");
});

router.post("/register", userController.register);
router.post("/login", userController.login);
// productList
router.post("/productlists", productListControler.add);
router.delete("/productlists/:id", productListControler.delete);
// router.patch("/productlists/:id", productListControler.update);
router.get("/productlists/:id", productListControler.getOne);
router.get("/productlists", productListControler.getAll);
// // product
// router.post("/products/:id", productControler.add);
// // router.delete("/products", productControler.delete);
// // router.patch("/products", productControler.update);
// router.get("/products/:id", products.getOne);
// // router.get("/products",productControler.getOne);

// // // requsiton
// router.post("/requsitions", requsitionController.add);
// router.delete("/requsitions/:id", requsitionController.delete);
// router.put("/requsitions/:id", requsitionController.update);
// router.get("/requsitions/:id", requsitionController.getOne);
// router.get("/requsitions", requsitionController.getAll);
// // // bill
// router.post("/bills", billController.add);
// router.delete("/bills/:id", billController.delete);
// router.put("/bills/:id", billController.update);
// router.get("/bills/:id", billController.getOne);
// router.get("/bills", billController.getAll);
// // // manpower
// router.post("/manpowers", manpowerController.add);
// router.delete("/manpowers/:id", manpowerController.delete);
// router.put("/manpowers/:id", manpowerController.update);
// router.get("/manpowers/:id", manpowerController.getOne);
// router.get("/manpowers", manpowerController.getAll);
// // // shoe
// router.post("/shoes", shoeController.add);
// router.delete("/shoes/:id", shoeController.delete);
// router.put("/shoes/:id", shoeController.update);
// router.get("/shoes/:id", shoeController.getOne);
// router.get("/shoes", shoeController.getAll);

export default router;
