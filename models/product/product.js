import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
	name: {
		required: true,
		type: String,
	},
	price: {
		required: true,
		type: Number,
	},
	stock: {
		type: Number,
	},
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
