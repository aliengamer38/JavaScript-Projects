const generateId = require("generate-unique-id").bind(null, {
	length: 45,
});
const Sequelize = require("sequelize");
const sequelize = new Sequelize("errand-app", "test", "a", {
	dialect: "mysql",
	host: "localhost",
});

const User = sequelize.define("user", {
	id: {
		primaryKey: true,
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});
const Cart = sequelize.define("cart", {
	id: {
		primaryKey: true,
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.STRING,
	},
});

User.belongsTo(Cart, {
	foreignKey: "cartId",
});

(async () => {
	try {
		await sequelize.sync();
		const user = await User.create({
			id: generateId(),
			name: "Ram",
			cartId: "3o15zn7pn2eoyiw811rh7qsx5jubjh497qmpkb9gfouo6",
		});
		await user.createCart({
			id: generateId(),
			description: "store",
		});
	} catch (err) {
		console.log(err);
	}
})();
