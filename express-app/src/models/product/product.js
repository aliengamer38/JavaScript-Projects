const Sequelize = require("sequelize")
const sequelize = require("../database")

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.STRING(45),
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING        
    },
    manufactureDate: {
        type: Sequelize.DATE
    },
    price: {
        type: Sequelize.DECIMAL(10, 3)
    }
})

module.exports = Product