import express, { json } from "express";
import { apiRouter } from "./routes/apiRoutes.js";
import { productRoutes } from "./routes/product.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const developer = {
	name: "Mohamad Salman",
	age: 27,
	role: "Full Stack Developer",
};

const people = [
	{
		name: "Mohamad Salman",
		age: 27,
		role: "Full Stack Developer",
	},
	{
		name: "Abc",
		age: 23,
		role: "Stack Developer",
	},
	{
		name: "bcd",
		age: 22,
		role: "Developer",
	},
];

// query handling
// app.get("/api", (req, res) => {
// 	const { age } = req.query;
// 	let filterPeople = people;
// 	const lastFilter = filterPeople.filter((item) => item.age >= age);
// });
// path params
// app.get("/api/crypto-name/:curreny", (req, res) => {
// 	console.log(req.params);
// });
// example
// app.get("/api/:category/:type", (req, res) => {
// 	console.log(req.params, "NEw paramas ");
// });
// example wrong parms errot handling
// app.get("/api/:field/:term", (req, res) => {
// 	const allowedFields = ["country", "continent", "industry"];
// 	if (!allowedFields.includes(req.params.field.toLowerCase())) {
// 		res.status(400).json({
// 			success: false,
// 			message:
// 				"search field is not allowed  please use only  country,continent,industry ",
// 		});
// 	} else {
// 		res.status(200).json({
// 			success: true,
// 			messge: "get data successfullyyyyu",
// 			data: {
// 				terms: req.params.term,
// 				field: req.params.field,
// 			},
// 		});
// 	}
// });

// app.use("/api", apiRouter);

// mongodb connection
mongoose
	.connect(process.env?.DATABASE_URL)
	.then((response) => {
		console.log("Database connection ok!");
	})
	.catch((error) => {
		console.log("--- Error in Databse connection ---", error);
	});

// product api crud
app.use("/api/product", productRoutes);

app.listen(PORT, () => {
	console.log(`server is connected ${PORT}`);
});
