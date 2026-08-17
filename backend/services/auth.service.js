const prisma = require("../config/prisma.js");
const bcrypt = require("bcryptjs");

const genearateToken = require("../units/generateToke.js");

const registerUser = async ({ name, email, password, role }) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    throw new Error("email already existing");
  }

  const hashpassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashpassword,
      role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  //for frontend

  //   if (user.role === "ADMIN") {
  //   navigate("/admin");
  // } else {
  //   navigate("/");
  // }

  return user;
};

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("user not founded");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("password is invalid");
  }

  const token = genearateToken(user);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

const SingleUser = async (id) => {
  const singleuser = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!singleuser) {
    throw new Error("user not found");
  }
  return singleuser;
};

const deleteUser = async (id) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!existingUser) {
    throw new Error("User not found");
  }

  const user = await prisma.user.delete({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

const allUser = async () => {
  const user = await prisma.user.findMany();

  return user;
};

module.exports = {
  registerUser,
  login,
  SingleUser,
  deleteUser,
  allUser,
};
