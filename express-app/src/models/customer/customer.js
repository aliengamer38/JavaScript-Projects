const fs = require("fs")
const { globalDir } = require("../../utils/config")
const path = require("path")
const fields = ["name", "age", "gender"]
const Sequelize = require("sequelize")
const sequelize = require("../database")

const Customer = sequelize.define("customer", {
    id: {
        type: Sequelize.INTEGER,        
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
})

module.exports = Customer
