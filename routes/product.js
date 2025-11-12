import express from "express";
import {
	createProduct,
	products,
	product,
	deleteProduct,
	editProduct,
	productFilter,
	searchProducts,
} from "../controllers/product/product.js";

export const productRoutes = express.Router();

productRoutes.get("/filter/search", searchProducts);
productRoutes.get("/filter", productFilter);
productRoutes.post("/", createProduct);
productRoutes.get("/", products);
productRoutes.get("/:id", product);
productRoutes.delete("/:id", deleteProduct);
productRoutes.patch("/:id", editProduct);
