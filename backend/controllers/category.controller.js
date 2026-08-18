const { success } = require("zod");
const categoryService = require("../services/category.service.js");

const createCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;

    const image = req.file ? `/uploads/categories/${req.file.filename}` : null;

    const create = await categoryService.craeteProduct({
      name,
      slug,
      image,
    });

    res.status(200).json({
      success: true,
      message: "category created successfuly",
      data: create,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;

    const image = req.file
      ? `/uploads/categories/${req.file.filename}`
      : undefined;

    const updatedCategory = await categoryService.updateProduc(
      req.params.id,
      {
        name,
        slug,
        image,
      }
    );

    return res.status(200).json({
      message: "Product category updated successfully",
      success: true,
      data: updatedCategory,
    });
  } catch (error) {
    console.log("Update category error:", error);

    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const getAll = await categoryService.getAllCategory();

    res.status(200).json({
      message: " all category",
      success: true,
      data: getAll,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingle = await categoryService.getSingleCategory(Number(id));

    res.status(200).json({
      message: " single product",
      success: true,
      data: getSingle,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await categoryService.deteleCategory(Number(id));

    res.status(200).json({
      message: "category deleted sucessful",
      success: true,
      data: deleteCategory,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  updateCategory,
  getAllCategory,
  getSingle,
  deleteCategory,
};
