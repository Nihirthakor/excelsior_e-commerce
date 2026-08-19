const orderService = require("../services/order.service.js");

// CREATE ORDER
const createOrder = async (req, res) => {
  console.log("Create order controller reached");
  console.log("User:", req.user);
  console.log("Body:", req.body);
  try {
    const { items } = req.body;

    const order = await orderService.createOrder(req.user.id, items);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GET MY ORDERS
const getMyOrders = async (req, res) => {
  try {
    const orders = await orderService.getMyOrders(req.user.id);

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ORDER BY ID
const getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(
      Number(req.params.id),
      req.user.id,
      req.user.role,
    );

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(error.message.includes("authorized") ? 403 : 404).json({
      success: false,
      message: error.message,
    });
  }
};

// ADMIN - GET ALL ORDERS
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ADMIN - UPDATE ORDER STATUS
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await orderService.updateOrderStatus(
      Number(req.params.id),
      status,
    );

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// CANCEL ORDER
const cancelOrder = async (req, res) => {
  try {
    const order = await orderService.cancelOrder(
      Number(req.params.id),
      req.user.id,
      req.user.role,
    );

    res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
};
