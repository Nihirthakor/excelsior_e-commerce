const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller.js");

const uploade = require("../middleware/uploadProduct.js");

router.post(
  "/create",
  uploade.single("image"),
  productController.createProduct,
);



router.get("/getAllProduct", productController.getAllProduct);

router.get("/getSingle/:id", productController.getSingleProduct);

router.delete("/deleteProduct/:id", productController.deleteProduct);

router.put("/updateProduct/:id",uploade.single("image"), productController.updateProduct);






module.exports = router;
