import express from "express";
import { productsController } from "../controllers/productController.js";

export const apiRouter = express.Router();

apiRouter.get("/products", productsController);
