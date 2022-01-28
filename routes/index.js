import { Router } from "express";
import { productControler, userController } from "../controllers";
const router = Router();
router.get("/", (req, res, next) => {
  res.send("ok vai thik ace sob.");
});

router.post("/register", userController.register);
router.post("/login", userController.login);
// product
router.post("/products", productControler.addProduct);
router.delete("/products/:id", productControler.removeProduct);
router.patch("/products/:id", productControler.updateProduct);
router.get("/products/:id", productControler.oneProduct);
router.get("/products", productControler.allProduct);

export default router;
