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

// query handling

app.get("/api", (req, res) => {
	const { age } = req.query;
	let filterPeople = people;
	const lastFilter = filterPeople.filter((item) => item.age >= age);
	console.log(lastFilter, "Filter data");
});

// query

app.listen(PORT, () => {
	console.log(`server is connected ${PORT}`);
});
