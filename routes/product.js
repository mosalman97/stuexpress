import express from "express";
import {
	createProduct,
	products,
	product,
} from "../controllers/product/product.js";

export const productRoutes = express.Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", products);
productRoutes.get("/:id", product);
