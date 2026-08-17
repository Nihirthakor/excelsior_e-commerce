const { number } = require("zod");
const prisma = require("../config/prisma.js");

const craeteProduct = async ({ name, slug, image }) => {
  const existingcategory = await prisma.category.findFirst({
    where: {
      OR: [{ name }, { slug }],
    },
  });

  if (existingcategory) {
    throw new Error("category alrady existing");
  }

  const category = await prisma.category.create({
    data: {
      name,
      slug,
      image,
    },
  });

  return category;
};

const updateProduc = async (id, { name, slug, image }) => {
  const exsitingCategory = await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!exsitingCategory) {
    throw new Error("category not found");
  }

  const duplicateCategory = await prisma.category.findFirst({
    where: {
      AND: [
        {
          OR: [{ name }, { slug }],
        },
        {
          NOT: {
            id: Number(id),
          },
        },
      ],
    },
  });
  if (duplicateCategory) {
    throw new Error("same category alredy exsiting");
  }
  const updateCategory = await prisma.category.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      slug,
      ...(image && { image }),
    },
  });

  return updateCategory;
};

const getAllCategory = async () => {
  const getAll = await prisma.category.findMany();
  return getAll;
};

const getSingleCategory = async (id) => {
  const getSingle = await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
  });
  return getSingle;
};

const deteleCategory = async (id) => {
  const isExsiting = await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!isExsiting) {
    throw new Error("category not exsiting");
  }
  const deleteCategory = await prisma.category.delete({
    where: {
      id: Number(id),
    },
  });
  return deleteCategory;
};

module.exports = {
  craeteProduct,
  updateProduc,
  getAllCategory,
  getSingleCategory,
  deteleCategory,
};
