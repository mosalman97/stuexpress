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
		res.status(500).json({
			success: false,
			message: "Some error occured",
		});
	}
};

export const product = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json({
			success: true,
			data: product,
			message: "product details",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Some error occured",
		});
	}
};

export const editProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedData = req.body;

		const updateProduct = await Product.findByIdAndUpdate(id, updatedData, {
			new: true,
		});
		if (!updateProduct) {
			return res.status(404).json({
				success: false,
				message: "this product not found",
			});
		}
		res.status(200).json({
			success: true,
			data: updateProduct,
			message: "Product Edit successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Some error occured",
		});
	}
};

export const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await Product.findByIdAndDelete(id);

		if (!result) {
			return res.status(404).json({
				success: false,
				message: "this product not found",
			});
		}
		res.status(200).json({
			success: true,
			data: result,
			message: "delete product successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Some error occured",
		});
	}
};
