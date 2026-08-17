const { Prisma } = require("@prisma/client");
const prisma = require("../config/prisma.js");
const { includes } = require("zod");
const { id } = require("zod/v4/locales");

const createProduct = async ({
  name,
  slug,
  description,
  price,
  stock,
  image,
  categoryId,
}) => {
  // Check category exists
  const category = await prisma.category.findUnique({
    where: {
      id: Number(categoryId),
    },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  // Check if product already exists
  const existingProduct = await prisma.product.findFirst({
    where: {
      OR: [{ name }, { slug }],
    },
  });

  // Update stock if product exists
  if (existingProduct) {
    return await prisma.product.update({
      where: {
        id: existingProduct.id,
      },
      data: {
        stock: {
          increment: Number(stock),
        },
      },
    });
  }

  // Create new product
  return await prisma.product.create({
    data: {
      name,
      slug,
      description,
      price: Number(price),
      stock: Number(stock),
      image,
      categoryId: Number(categoryId),
    },
  });
};

const getAllProduct = async () => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return products;
};

const getSingleProduct = async (id) => {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      category: true,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const deleteProduct = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!product) {
    throw new Error("product not found");
  }

  const deleteProduct = await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });
  return deleteProduct;
};

const updateProduct = async (
  id,
  { name, slug, description, price, stock, image, categoryId },
) => {
  // Check if product exists
  const existingProduct = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!existingProduct) {
    throw new Error("Product not found");
  }

  // Check for duplicate name or slug (excluding current product)
  const duplicateProduct = await prisma.product.findFirst({
    where: {
      AND: [
        {
          OR: [{ name }, { slug }],
        },
        {
          id: {
            not: Number(id),
          },
        },
      ],
    },
  });

  if (duplicateProduct) {
    throw new Error("Product name or slug already exists");
  }

  // Check category exists (optional)
  if (categoryId) {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(categoryId),
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }
  }

  // Update product
  const updatedProduct = await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      slug,
      description,
      price: Number(price),
      stock: Number(stock),
      ...(image && { image }),
      categoryId: categoryId ? Number(categoryId) : existingProduct.categoryId,
    },
  });

  return updatedProduct;
};

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
