const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(200).json({
      success: false,
      message: "only admin access",
    });
  }
  next();
};

module.exports = adminMiddleware;
