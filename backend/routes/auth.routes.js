const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller.js");
const validate = require("../middleware/validation.middleware.js");
const {
  registerSchema,
  loginSchema,
} = require("../validations/auth.validation.js");

const authmiddleware = require("../middleware/auth.middleware.js");
const isAdmin = require("../middleware/adminMiddleware.js");

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);

router.get("/singleUser/:id", authController.singleUser);

router.get("/allUser", authmiddleware, isAdmin, authController.allUser);

router.delete(
  "/deleteUser/:id",
  authmiddleware,
  isAdmin,
  authController.deleteUser,
);



module.exports = router;
