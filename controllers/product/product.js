import { json } from "express";
import Product from "../../models/product/product.js";

export const products = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({
			success: true,
			data: products,
			message: "get all products",
		});
	} catch (error) {
		console.log(error, "+");
		res.status(404).json({
			success: false,
			message: "error in fetching products",
		});
	}
};

export const createProduct = async (req, res) => {
	try {
		const { name, price, stock } = req.body;
		const newProduct = new Product({
			name,
			price,
			stock,
		});
		await newProduct.save();
		res.status(200).json({
			success: true,
			message: "new product added successfully",
		});
	} catch (error) {
		console.error("Error creating product:", error);
		res.status(500).json({
			success: false,
			message: "Some error occured",
		});
	}
};

export const product = async (req, res) => {
	const { id } = req.params;
	console.log(id, "++");
};

export const editProduct = (req, res) => {};

export const deleteProduct = (req, res) => {};
