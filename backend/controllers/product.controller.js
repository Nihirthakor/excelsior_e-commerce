const { success } = require("zod");
const serviceProduct = require("../services/product.service.js");
const prisma = require("../config/prisma.js");

const createProduct = async (req, res) => {
  try {
    const { name, slug, description, price, stock, categoryId } = req.body;

    const image = req.file ? `/uploads/products/${req.file.filename}` : null;

    const product = await serviceProduct.createProduct({
      name,
      slug,
      description,
      price,
      stock,
      image,
      categoryId,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await serviceProduct.getAllProduct();

    res.status(200).json({
      success: true,
      message: "All products fetched successfully",
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await serviceProduct.getSingleProduct(id);

    res.status(200).json({
      message: "this is single product",
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await serviceProduct.deleteProduct(id);

    res.status(200).json({
      message: "product deleted successfuly",
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, description, price, stock, categoryId } = req.body;

    const image = req.file ? `/uploads/products/${req.file.filename}` : null;

    const product = await serviceProduct.updateProduct(id, {
      name,
      slug,
      description,
      price,
      stock,
      image,
      categoryId,
    });
    res.status(200).json({
      message: "product update successfuly",
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
