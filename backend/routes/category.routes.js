const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category.controller.js");

const uploade = require("../middleware/upload.js");

router.post(
  "/craete",
  uploade.single("image"),
  categoryController.createCategory,
);

router.get("/", categoryController.getAllCategory);

router.put(
  "/update/category/:id",
  uploade.single("image"),
  categoryController.updateCategory,
);

router.get("/getSingle/:id", categoryController.getSingle);

router.delete("/delete/:id", categoryController.deleteCategory);



module.exports = router;
