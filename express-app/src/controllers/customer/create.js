const Customer = require("../../models/customer/customer");
const generateId = require("generate-unique-id").bind(null, {
	length: 32,
	useNumbers: true,
	useLetters: true,
});

const getCustomerForm = (req, res, next) => {
	res.render("customer/create");
};

const postCustomer = (req, res, next) => {
	const body = req.body;
	Object.keys(body).map(k => {
		if (k !== "id") {
			body[k] = body[k] === "" ? "N/A" : body[k]
		}
		return null
	})
	Customer.create({
		id: generateId(),
		name: body.name,
		email: body.email,
		address: body.address,
		description: body.description,
	})
	.then((result) => {			
		res.status(302).redirect("/customer/success");
	})
	.catch((err) => {
		console.log(err);
		res.render("error");
	});
};

module.exports = {
	getCustomerForm,
	postCustomer,
};
