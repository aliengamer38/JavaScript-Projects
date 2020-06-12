const { customerFields } = require("../../models/customer/utility/config")
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
	const newCustomer = {}
	customerFields.map(f => {
		newCustomer[f] = body[f]
		newCustomer.id = generateId()
		return null
	})
	
	Customer.create(newCustomer)
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
