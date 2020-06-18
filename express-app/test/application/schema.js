const generateId = require("generate-unique-id")
const Sequelize = require("sequelize")
const sequelize = new Sequelize("errand-app", "HR", "a", {
    dialect: "mysql",
    host: "localhost"
})

const Order = sequelize.define("order", {
    id: {
        type: Sequelize.STRING(45),
        primaryKey: true
    },
    description: Sequelize.STRING
})
const Product = sequelize.define("product", {
    id: {
        type: Sequelize.STRING(45),
        primaryKey: true
    },
    name: Sequelize.STRING,
    manufactureDate: Sequelize.DATE,    
})

const OrderProduct = sequelize.define("orderProduct", {
    id: {
        type: Sequelize.STRING(45),
        primaryKey: true
    }
})

Product.belongsToMany(Order, { through: OrderProduct })
Order.hasMany(Product)

module.exports = {
    Order, Product, OrderProduct, sequelize
}