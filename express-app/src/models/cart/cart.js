const Sequelize = require("sequelize")
const sequelize = require("../database")

const Cart = sequelize.define("cart", {
    id: {
        type: Sequelize.STRING(45),
        primaryKey: true
    },
    classification: {
        type: Sequelize.STRING
    }
})

module.exports = Cart