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
router.post("/productlists", productListControler.add);
router.delete("/productlists/:id", productListControler.delete);
router.patch("/productlists/:id", productListControler.update);
router.get("/productlists/:id", productListControler.getOne);
router.get("/productlists", productListControler.getAll);
// product
router.post("/products", productController.add);
router.delete("/products", productController.delete);
router.patch("/products", productController.update);
router.get("/products", productController.getOne);
router.get("/products", productController.getAll);
// return
router.post("/returns", returnController.add);
router.delete("/returns", returnController.delete);
router.put("/returns", returnController.update);
router.get("/returns", returnController.getOne);
router.get("/returns", returnController.getAll);
// requsiton
router.post("/requsitions", requsitionController.add);
router.delete("/requsitions", requsitionController.delete);
router.put("/requsitions", requsitionController.update);
router.get("/requsitions", requsitionController.getOne);
router.get("/requsitions", requsitionController.getAll);
// bill
router.post("/bills", billController.add);
router.delete("/bills", billController.delete);
router.put("/bills", billController.update);
router.get("/bills", billController.getOne);
router.get("/bills", billController.getAll);
// manpower
router.post("/manpowers", manpowerController.add);
router.delete("/manpowers", manpowerController.delete);
router.put("/manpowers", manpowerController.update);
router.get("/manpowers", manpowerController.getOne);
router.get("/manpowers", manpowerController.getAll);
export default router;
