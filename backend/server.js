require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());

const authRouter = require("./routes/auth.routes.js");
const categoryRouter = require("./routes/category.routes.js");
const productRouter = require("./routes/product.routes.js");
const orderRoutes = require("./routes/order.routes.js");

app.use("/api/auth", authRouter);
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);

app.use("/api/orders", orderRoutes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
