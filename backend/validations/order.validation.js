const { body, param } = require("express-validator");

const createOrderValidation = [
  body("items")
    .isArray({ min: 1 })
    .withMessage("Order must contain at least one product"),

  body("items.*.productId")
    .isInt({ min: 1 })
    .withMessage("Valid productId is required"),

  body("items.*.quantity")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),
];

const orderIdValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("Valid order ID is required"),
];

const updateOrderStatusValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("Valid order ID is required"),

  body("status")
    .isIn([
      "PENDING",
      "PAID",
      "PROCESSING",
      "COMPLETED",
      "CANCELLED",
    ])
    .withMessage("Invalid order status"),
];

module.exports = {
  createOrderValidation,
  orderIdValidation,
  updateOrderStatusValidation,
};