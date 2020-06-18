const generateId = require("generate-unique-id").bind(null, {
	length: 45,
});
const Sequelize = require("sequelize");
const sequelize = new Sequelize("errand-app", "test", "a", {
	dialect: "mysql",
	host: "localhost",
});

const Product = sequelize.define("product", {
	id: {
		primaryKey: true,
		type: Sequelize.STRING,
	},
	name: {
		allowNull: false,
		type: Sequelize.STRING,
	},
	manufacturer: {
		allowNull: false,
		type: Sequelize.STRING,
	},
	manufactureDate: {
		allowNull: false,
		type: Sequelize.DATE,
	},
});

const Order = sequelize.define("order", {
	id: {
		primaryKey: true,
		type: Sequelize.STRING,
	},
	classification: {
		type: Sequelize.STRING,
	},
});

const OrderProduct = sequelize.define("orderProduct", {
	id: {
		primaryKey: true,
		type: Sequelize.STRING,
	},
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

(async () => {
	try {		
		const order = await Order.getOr
		const products = await order.getProducts()
		
		console.log()

	} catch (err) {
		console.log(err);
	}
})();
