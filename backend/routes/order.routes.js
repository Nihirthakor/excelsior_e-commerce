const express = require("express");

const router = express.Router();

const orderController = require("../controllers/order.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const validate = require("../middleware/validation.middleware.js");

const {
  createOrderValidation,
  orderIdValidation,
  updateOrderStatusValidation,
} = require("../validations/order.validation.js");

// Create order
router.post(
  "/",
  authMiddleware,
//   ...createOrderValidation,
//   validate,
  orderController.createOrder,
);

// Get logged-in user's orders
router.get("/my-orders", authMiddleware, orderController.getMyOrders);

// ADMIN routes — put before "/:id"
router.get("/admin/all", authMiddleware, orderController.getAllOrders);

router.patch(
  "/admin/:id/status",
  authMiddleware,
  ...updateOrderStatusValidation,
  validate,
  orderController.updateOrderStatus,
);

// Cancel order
router.patch(
  "/:id/cancel",
  authMiddleware,
  ...orderIdValidation,
  validate,
  orderController.cancelOrder,
);

// Get one order — keep dynamic route last
router.get(
  "/:id",
  authMiddleware,
  ...orderIdValidation,
  validate,
  orderController.getOrderById,
);

module.exports = router;
