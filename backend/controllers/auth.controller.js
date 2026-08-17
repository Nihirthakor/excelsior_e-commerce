const { user } = require("../config/prisma.js");
const authService = require("../services/auth.service.js");

const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(200).json({
      message: "user register successfuly ",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const login = await authService.login(req.body);
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: login,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const singleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await authService.SingleUser(Number(id));

    res.status(200).json({
      message: "user fatch successfuly",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  console.log("Delete API Hit");
  console.log(req.params);

  try {
    const { id } = req.params;

    const user = await authService.deleteUser(Number(id));

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const allUser = async (req, res) => {
  try {
    const user = await authService.allUser();

    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  singleUser,
  deleteUser,
  allUser
};
