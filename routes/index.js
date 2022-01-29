import { Router } from "express";
import {
  productListControler,
  productController,
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
router.post("/productlists", productListControler.addProduct);
router.delete("/productlists/:id", productListControler.removeProduct);
router.patch("/productlists/:id", productListControler.updateProduct);
router.get("/productlists/:id", productListControler.oneProduct);
router.get("/productlists", productListControler.allProduct);
// product
router.post("/products", productController.addProduct);
router.delete("/products", productController.addProduct);
router.patch("/products", productController.addProduct);
router.get("/products", productController.addProduct);
router.get("/products", productController.addProduct);
// return
router.post("/returns", returnController.add);
router.delete("/returns", returnController.add);
router.put("/returns", returnController.add);
router.get("/returns", returnController.add);
router.get("/returns", returnController.add);
// requsiton
router.post("/requsitions", requsitionController.add);
router.delete("/requsitions", requsitionController.add);
router.put("/requsitions", requsitionController.add);
router.get("/requsitions", requsitionController.add);
router.get("/requsitions", requsitionController.add);
// bill
router.post("/bills", billController.add);
router.delete("/bills", billController.add);
router.put("/bills", billController.add);
router.get("/bills", billController.add);
router.get("/bills", billController.add);
// manpower
router.post("/manpowers", manpowerController.add);
router.delete("/manpowers", manpowerController.add);
router.put("/manpowers", manpowerController.add);
router.get("/manpowers", manpowerController.add);
router.get("/manpowers", manpowerController.add);
export default router;
