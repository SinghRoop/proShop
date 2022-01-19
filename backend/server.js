import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Express is running..");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running at port ${PORT}.`.yellow.bold));
