import express from "express";

const PORT = 8000;

const app = express();

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

app.get("/api", (req, res) => {
	console.log(req.query);
	res.json(people);
});

// query

app.listen(PORT, () => {
	console.log(`server is connected ${PORT}`);
});
