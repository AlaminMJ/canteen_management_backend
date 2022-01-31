import { Router } from "express";
import {
  productListControler,
  userController,
  billController,
  requsitionController,
  manpowerController,
  shoeController,
  productControler,
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
router.patch("/productlists/:id", productListControler.update);
router.get("/productlists/:id", productListControler.getOne);
router.get("/productlists", productListControler.getAll);
// product
router.post("/products/:id", productControler.add);
// router.delete("/products", productControler.delete);
// router.patch("/products", productControler.update);
router.get("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Product.findById(id).populate(
      "product",
      "_id name unit"
    );
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
});
// router.get("/products",productControler.getOne);

// // requsiton
// router.post("/requsitions", requsitionController.add);
// router.delete("/requsitions", requsitionController.delete);
// router.put("/requsitions", requsitionController.update);
// router.get("/requsitions", requsitionController.getOne);
// router.get("/requsitions", requsitionController.getAll);
// // bill
// router.post("/bills", billController.add);
// router.delete("/bills", billController.delete);
// router.put("/bills", billController.update);
// router.get("/bills", billController.getOne);
// router.get("/bills", billController.getAll);
// // manpower
// router.post("/manpowers", manpowerController.add);
// router.delete("/manpowers", manpowerController.delete);
// router.put("/manpowers", manpowerController.update);
// router.get("/manpowers", manpowerController.getOne);
// router.get("/manpowers", manpowerController.getAll);
// // shoe
// router.post("/shoes", shoeController.add);
// router.delete("/shoes", shoeController.delete);
// router.put("/shoes", shoeController.update);
// router.get("/shoes", shoeController.getOne);
// router.get("/shoes", shoeController.getAll);

export default router;
